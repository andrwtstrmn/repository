(function () {
  "use strict";

  // --- Utility: Seeded PRNG (mulberry32) for deterministic daily selection ---
  function mulberry32(seed) {
    return function () {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // --- Date helpers ---
  function getTodayKey() {
    var d = new Date();
    return (
      d.getFullYear() +
      "-" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d.getDate()).padStart(2, "0")
    );
  }

  function getDateSeed() {
    var d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }

  function formatDisplayDate() {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  // --- Select 10 questions deterministically based on today's date ---
  function selectDailyQuestions() {
    var rng = mulberry32(getDateSeed());
    var indices = [];
    for (var i = 0; i < QUESTIONS.length; i++) {
      indices.push(i);
    }
    // Fisher-Yates shuffle with seeded RNG
    for (var i = indices.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var tmp = indices[i];
      indices[i] = indices[j];
      indices[j] = tmp;
    }
    var selected = [];
    for (var k = 0; k < 10; k++) {
      selected.push(QUESTIONS[indices[k]]);
    }
    return selected;
  }

  // --- Local Storage helpers ---
  var STORAGE_KEY = "us_history_trivia";

  function loadData() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // Storage full or unavailable -- silently ignore
    }
  }

  function getTodayResult() {
    var data = loadData();
    return data[getTodayKey()] || null;
  }

  function saveTodayResult(score, answers) {
    var data = loadData();
    data[getTodayKey()] = { score: score, answers: answers };
    saveData(data);
  }

  function calculateStreak() {
    var data = loadData();
    var streak = 0;
    var d = new Date();
    // Check today first, then go backwards
    while (true) {
      var key =
        d.getFullYear() +
        "-" +
        String(d.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(d.getDate()).padStart(2, "0");
      if (data[key]) {
        streak++;
        d.setDate(d.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  }

  // --- DOM references ---
  var screenStart = document.getElementById("screen-start");
  var screenQuiz = document.getElementById("screen-quiz");
  var screenResults = document.getElementById("screen-results");

  var btnStart = document.getElementById("btn-start");
  var btnNext = document.getElementById("btn-next");
  var btnHome = document.getElementById("btn-home");

  var todayDateEl = document.getElementById("today-date");
  var streakDisplay = document.getElementById("streak-display");
  var streakCount = document.getElementById("streak-count");
  var alreadyPlayed = document.getElementById("already-played");
  var prevScore = document.getElementById("prev-score");

  var progressFill = document.getElementById("progress-fill");
  var qCurrent = document.getElementById("q-current");
  var eraBadge = document.getElementById("era-badge");
  var questionText = document.getElementById("question-text");
  var choicesContainer = document.getElementById("choices");

  var finalScore = document.getElementById("final-score");
  var scoreMessage = document.getElementById("score-message");
  var resultsStreak = document.getElementById("results-streak");
  var resultsStreakCount = document.getElementById("results-streak-count");
  var resultsBreakdown = document.getElementById("results-breakdown");

  // --- Quiz state ---
  var dailyQuestions = [];
  var currentIndex = 0;
  var score = 0;
  var userAnswers = []; // stores {selected, correct, questionText, correctAnswer}
  var answered = false;

  // --- Screen management ---
  function showScreen(screen) {
    screenStart.classList.remove("active");
    screenQuiz.classList.remove("active");
    screenResults.classList.remove("active");
    screen.classList.add("active");
  }

  // --- Initialize start screen ---
  function initStartScreen() {
    todayDateEl.textContent = formatDisplayDate();

    var streak = calculateStreak();
    if (streak > 0) {
      streakDisplay.classList.remove("hidden");
      streakCount.textContent = streak;
    } else {
      streakDisplay.classList.add("hidden");
    }

    var todayResult = getTodayResult();
    if (todayResult) {
      alreadyPlayed.classList.remove("hidden");
      prevScore.textContent = todayResult.score;
      btnStart.textContent = "View Results";
    } else {
      alreadyPlayed.classList.add("hidden");
      btnStart.textContent = "Start Today's Quiz";
    }

    showScreen(screenStart);
  }

  // --- Render a question ---
  function renderQuestion() {
    var q = dailyQuestions[currentIndex];
    qCurrent.textContent = currentIndex + 1;
    progressFill.style.width = ((currentIndex / 10) * 100) + "%";
    eraBadge.textContent = q.era + " \u00B7 " + q.year;
    questionText.textContent = q.question;

    choicesContainer.innerHTML = "";
    var letters = ["A", "B", "C", "D"];

    for (var i = 0; i < q.choices.length; i++) {
      var btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.dataset.index = i;

      var letterSpan = document.createElement("span");
      letterSpan.className = "choice-letter";
      letterSpan.textContent = letters[i];

      var textSpan = document.createElement("span");
      textSpan.textContent = q.choices[i];

      btn.appendChild(letterSpan);
      btn.appendChild(textSpan);
      btn.addEventListener("click", handleChoiceClick);
      choicesContainer.appendChild(btn);
    }

    btnNext.classList.add("hidden");
    answered = false;
  }

  // --- Handle answer selection ---
  function handleChoiceClick(e) {
    if (answered) return;
    answered = true;

    var btn = e.currentTarget;
    var selected = parseInt(btn.dataset.index, 10);
    var q = dailyQuestions[currentIndex];
    var isCorrect = selected === q.answer;

    if (isCorrect) {
      score++;
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }

    // Highlight the correct answer and disable all buttons
    var allBtns = choicesContainer.querySelectorAll(".choice-btn");
    for (var i = 0; i < allBtns.length; i++) {
      allBtns[i].classList.add("disabled");
      allBtns[i].removeEventListener("click", handleChoiceClick);
      if (parseInt(allBtns[i].dataset.index, 10) === q.answer) {
        allBtns[i].classList.add("correct");
      }
    }

    userAnswers.push({
      questionText: q.question,
      selected: selected,
      correct: q.answer,
      correctAnswer: q.choices[q.answer],
      isCorrect: isCorrect,
    });

    if (currentIndex < 9) {
      btnNext.classList.remove("hidden");
      btnNext.textContent = "Next Question";
    } else {
      btnNext.classList.remove("hidden");
      btnNext.textContent = "See Results";
    }
  }

  // --- Show results ---
  function showResults() {
    saveTodayResult(score, userAnswers);

    finalScore.textContent = score;

    var messages = [
      "Keep studying! Every day is a chance to learn.",         // 0-2
      "Not bad! You're building your knowledge.",               // 3-4
      "Solid performance! You know your history.",              // 5-6
      "Impressive! You're a history buff.",                     // 7-8
      "Outstanding! You really know American history!",         // 9
      "Perfect score! You're a true history scholar!",          // 10
    ];
    var msgIndex;
    if (score <= 2) msgIndex = 0;
    else if (score <= 4) msgIndex = 1;
    else if (score <= 6) msgIndex = 2;
    else if (score <= 8) msgIndex = 3;
    else if (score === 9) msgIndex = 4;
    else msgIndex = 5;
    scoreMessage.textContent = messages[msgIndex];

    var streak = calculateStreak();
    if (streak > 1) {
      resultsStreak.classList.remove("hidden");
      resultsStreakCount.textContent = streak;
    } else {
      resultsStreak.classList.add("hidden");
    }

    // Build breakdown
    resultsBreakdown.innerHTML = "";
    for (var i = 0; i < userAnswers.length; i++) {
      var a = userAnswers[i];
      var item = document.createElement("div");
      item.className = "result-item";

      var icon = document.createElement("span");
      icon.className = "result-icon";
      icon.textContent = a.isCorrect ? "\u2705" : "\u274C";

      var details = document.createElement("div");
      var qText = document.createElement("div");
      qText.className = "result-question";
      qText.textContent = (i + 1) + ". " + a.questionText;

      details.appendChild(qText);

      if (!a.isCorrect) {
        var ans = document.createElement("div");
        ans.className = "result-answer";
        ans.textContent = "Answer: " + a.correctAnswer;
        details.appendChild(ans);
      }

      item.appendChild(icon);
      item.appendChild(details);
      resultsBreakdown.appendChild(item);
    }

    showScreen(screenResults);
  }

  // --- Event listeners ---
  btnStart.addEventListener("click", function () {
    var todayResult = getTodayResult();
    if (todayResult) {
      // Rebuild state to show results
      dailyQuestions = selectDailyQuestions();
      score = todayResult.score;
      userAnswers = todayResult.answers;
      showResults();
      return;
    }

    dailyQuestions = selectDailyQuestions();
    currentIndex = 0;
    score = 0;
    userAnswers = [];

    showScreen(screenQuiz);
    renderQuestion();
  });

  btnNext.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= 10) {
      showResults();
    } else {
      renderQuestion();
    }
  });

  btnHome.addEventListener("click", function () {
    initStartScreen();
  });

  // --- Boot ---
  initStartScreen();
})();
