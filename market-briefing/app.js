/* Renders the dashboard + written briefing from window.BRIEFING (see data.js).
 * No frameworks, no network, no build step. */
(function () {
  "use strict";
  const B = window.BRIEFING;
  if (!B) { document.body.innerHTML = "<p style='padding:2rem'>Missing data.js</p>"; return; }

  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  // Format a signed percent into {text, dir} where dir ∈ up|down|flat
  function pct(p) {
    if (p == null || isNaN(p)) return { text: "—", dir: "flat" };
    const dir = p > 0 ? "up" : p < 0 ? "down" : "flat";
    const arrow = p > 0 ? "▲" : p < 0 ? "▼" : "■";
    return { text: `${arrow} ${Math.abs(p).toFixed(2)}%`, dir };
  }

  // ---- Header ---------------------------------------------------------------
  $("#m-title").textContent = B.meta.title;
  $("#m-date").textContent = B.meta.dateLong;
  $("#m-asof").textContent = B.meta.asOf;
  $("#m-status").textContent = B.meta.status;
  const chips = $("#m-focus");
  B.meta.focus.forEach((f) => chips.appendChild(el("span", "chip", f)));

  // ---- Index tiles ----------------------------------------------------------
  const idx = $("#indices");
  B.indices.forEach((i) => {
    const p = pct(i.changePct);
    const tile = el("div", `tile ${p.dir}`);
    tile.appendChild(el("div", "tile-name", `${i.name} <span class="tk">${i.ticker}</span>`));
    tile.appendChild(el("div", "tile-val", i.value));
    tile.appendChild(el("div", `tile-chg ${p.dir}`, p.text));
    if (i.note) tile.appendChild(el("div", "tile-note", i.note));
    idx.appendChild(tile);
  });

  // ---- Macro strip ----------------------------------------------------------
  const macro = $("#macro");
  B.macro.forEach((m) => {
    const p = pct(m.changePct);
    const cell = el("div", "macro-cell");
    cell.appendChild(el("div", "macro-label", m.label));
    cell.appendChild(el("div", "macro-val", m.value));
    const meta = el("div", "macro-meta");
    meta.appendChild(el("span", `macro-chg ${p.dir}`, m.changePct == null ? "" : p.text));
    if (m.sub) meta.appendChild(el("span", "macro-sub", m.sub));
    cell.appendChild(meta);
    macro.appendChild(cell);
  });

  // ---- Themed watchlists ----------------------------------------------------
  const groups = $("#groups");
  B.groups.forEach((g) => {
    const card = el("div", "group");
    card.style.setProperty("--accent", g.accent || "#7c9cff");
    card.appendChild(el("h3", "group-title", g.title));
    const table = el("div", "rows");
    g.items.forEach((it) => {
      const p = pct(it.changePct);
      const row = el("div", "row");
      row.appendChild(el("div", "row-tk", it.ticker));
      const mid = el("div", "row-mid");
      mid.appendChild(el("div", "row-name", it.name));
      if (it.note) mid.appendChild(el("div", "row-note", it.note));
      row.appendChild(mid);
      const right = el("div", "row-right");
      right.appendChild(el("div", "row-price", it.price || "—"));
      right.appendChild(el("div", `row-chg ${p.dir}`, it.changePct == null ? "—" : p.text));
      row.appendChild(right);
      table.appendChild(row);
    });
    card.appendChild(table);
    groups.appendChild(card);
  });

  // ---- Movers bar chart (pure CSS, real single-session moves) ---------------
  const chart = $("#movers");
  const max = Math.max(...B.movers.map((m) => Math.abs(m.changePct)), 1);
  B.movers
    .slice()
    .sort((a, b) => b.changePct - a.changePct)
    .forEach((m) => {
      const dir = m.changePct >= 0 ? "up" : "down";
      const w = (Math.abs(m.changePct) / max) * 100;
      const bar = el("div", "bar-row");
      bar.appendChild(el("div", "bar-tk", m.ticker));
      const track = el("div", "bar-track");
      const fill = el("div", `bar-fill ${dir}`);
      fill.style.width = w + "%";
      track.appendChild(fill);
      bar.appendChild(track);
      bar.appendChild(el("div", `bar-val ${dir}`, (m.changePct >= 0 ? "+" : "") + m.changePct.toFixed(2) + "%"));
      chart.appendChild(bar);
    });

  // ---- Written briefing -----------------------------------------------------
  $("#brief-headline").textContent = B.briefing.headline;
  const brief = $("#brief-body");
  B.briefing.sections.forEach((s) => {
    brief.appendChild(el("h3", "brief-h", s.title));
    (s.paras || []).forEach((para) => brief.appendChild(el("p", "brief-p", para)));
    if (s.bullets) {
      const ul = el("ul", "brief-ul");
      s.bullets.forEach((b) => ul.appendChild(el("li", null, b)));
      brief.appendChild(ul);
    }
  });

  // ---- Sources --------------------------------------------------------------
  const src = $("#sources");
  B.sources.forEach((s) => {
    const a = el("a", "src", s.label);
    a.href = s.url;
    a.target = "_blank";
    a.rel = "noopener";
    src.appendChild(a);
  });

  // ---- Footer note ----------------------------------------------------------
  $("#gen-note").textContent =
    "Generated for " + (B.meta.preparedFor || "you") + " · " + B.meta.dateShort;
})();
