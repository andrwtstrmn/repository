// US History Trivia Question Bank
// Each question has: question text, 4 choices, correct answer index (0-3), era label, and year
const QUESTIONS = [
  // === Revolutionary Era (1770-1789) ===
  {
    question: "What event in 1770 involved British soldiers killing five colonists in Boston?",
    choices: ["Boston Tea Party", "Boston Massacre", "Stamp Act Riots", "Battle of Bunker Hill"],
    answer: 1,
    era: "Revolutionary Era",
    year: 1770
  },
  {
    question: "Which Founding Father was the principal author of the Declaration of Independence?",
    choices: ["Benjamin Franklin", "John Adams", "Thomas Jefferson", "James Madison"],
    answer: 2,
    era: "Revolutionary Era",
    year: 1776
  },
  {
    question: "In what year was the Declaration of Independence signed?",
    choices: ["1774", "1775", "1776", "1777"],
    answer: 2,
    era: "Revolutionary Era",
    year: 1776
  },
  {
    question: "What was the last major battle of the American Revolutionary War?",
    choices: ["Battle of Saratoga", "Battle of Yorktown", "Battle of Trenton", "Battle of Bunker Hill"],
    answer: 1,
    era: "Revolutionary Era",
    year: 1781
  },
  {
    question: "Which document preceded the Constitution as the first governing framework of the United States?",
    choices: ["Magna Carta", "Mayflower Compact", "Articles of Confederation", "Federalist Papers"],
    answer: 2,
    era: "Revolutionary Era",
    year: 1781
  },
  {
    question: "Who served as the commander-in-chief of the Continental Army?",
    choices: ["Alexander Hamilton", "George Washington", "Thomas Jefferson", "Benjamin Franklin"],
    answer: 1,
    era: "Revolutionary Era",
    year: 1775
  },
  {
    question: "The Boston Tea Party was a protest against what?",
    choices: ["Income taxes", "Property taxes", "Tea taxation without representation", "Military occupation"],
    answer: 2,
    era: "Revolutionary Era",
    year: 1773
  },
  {
    question: "Which treaty officially ended the American Revolutionary War?",
    choices: ["Treaty of Ghent", "Treaty of Paris", "Treaty of Versailles", "Treaty of Alliance"],
    answer: 1,
    era: "Revolutionary Era",
    year: 1783
  },
  {
    question: "What pamphlet by Thomas Paine helped inspire the American Revolution?",
    choices: ["The Federalist", "Common Sense", "Poor Richard's Almanack", "The Rights of Man"],
    answer: 1,
    era: "Revolutionary Era",
    year: 1776
  },
  {
    question: "Which battle is considered the turning point of the Revolutionary War?",
    choices: ["Battle of Yorktown", "Battle of Bunker Hill", "Battle of Saratoga", "Battle of Trenton"],
    answer: 2,
    era: "Revolutionary Era",
    year: 1777
  },
  {
    question: "Who famously said 'Give me liberty, or give me death'?",
    choices: ["Samuel Adams", "Patrick Henry", "Thomas Paine", "John Hancock"],
    answer: 1,
    era: "Revolutionary Era",
    year: 1775
  },
  {
    question: "In what year was the U.S. Constitution ratified?",
    choices: ["1776", "1783", "1787", "1788"],
    answer: 3,
    era: "Revolutionary Era",
    year: 1788
  },

  // === Early Republic (1789-1820) ===
  {
    question: "Who was the first President of the United States?",
    choices: ["John Adams", "Thomas Jefferson", "George Washington", "James Madison"],
    answer: 2,
    era: "Early Republic",
    year: 1789
  },
  {
    question: "What did the Louisiana Purchase of 1803 roughly do to the size of the United States?",
    choices: ["Increased it by a quarter", "Doubled it", "Tripled it", "Increased it by a tenth"],
    answer: 1,
    era: "Early Republic",
    year: 1803
  },
  {
    question: "Which expedition explored the western territory after the Louisiana Purchase?",
    choices: ["Pike Expedition", "Lewis and Clark Expedition", "Fremont Expedition", "Long Expedition"],
    answer: 1,
    era: "Early Republic",
    year: 1804
  },
  {
    question: "The War of 1812 was fought between the United States and which country?",
    choices: ["France", "Spain", "Great Britain", "Mexico"],
    answer: 2,
    era: "Early Republic",
    year: 1812
  },
  {
    question: "Who wrote the Star-Spangled Banner after witnessing the Battle of Baltimore?",
    choices: ["Francis Scott Key", "John Philip Sousa", "Samuel Francis Smith", "Irving Berlin"],
    answer: 0,
    era: "Early Republic",
    year: 1814
  },
  {
    question: "The Bill of Rights consists of how many amendments?",
    choices: ["5", "8", "10", "12"],
    answer: 2,
    era: "Early Republic",
    year: 1791
  },
  {
    question: "Which Supreme Court case established the principle of judicial review?",
    choices: ["McCulloch v. Maryland", "Marbury v. Madison", "Gibbons v. Ogden", "Dred Scott v. Sandford"],
    answer: 1,
    era: "Early Republic",
    year: 1803
  },
  {
    question: "The Monroe Doctrine warned European nations against further colonization of where?",
    choices: ["Asia", "Africa", "The Americas", "The Pacific Islands"],
    answer: 2,
    era: "Early Republic",
    year: 1823
  },
  {
    question: "Alexander Hamilton served as the first Secretary of what?",
    choices: ["State", "War", "Treasury", "Commerce"],
    answer: 2,
    era: "Early Republic",
    year: 1789
  },
  {
    question: "Who was the second President of the United States?",
    choices: ["Thomas Jefferson", "John Adams", "James Madison", "James Monroe"],
    answer: 1,
    era: "Early Republic",
    year: 1797
  },
  {
    question: "The Missouri Compromise of 1820 addressed the issue of what in new states?",
    choices: ["Voting rights", "Slavery", "Taxation", "Land ownership"],
    answer: 1,
    era: "Early Republic",
    year: 1820
  },

  // === Antebellum & Expansion (1820-1860) ===
  {
    question: "What was the Trail of Tears?",
    choices: [
      "A route used by Gold Rush miners",
      "The forced relocation of Native Americans from the Southeast",
      "A path through the Appalachian Mountains",
      "A Civil War retreat route"
    ],
    answer: 1,
    era: "Antebellum Era",
    year: 1838
  },
  {
    question: "The Mexican-American War resulted in the U.S. acquiring territory that became which states?",
    choices: [
      "Oregon and Washington",
      "California and much of the Southwest",
      "Florida and Alabama",
      "Texas and Oklahoma"
    ],
    answer: 1,
    era: "Antebellum Era",
    year: 1848
  },
  {
    question: "What discovery in 1848 triggered a massive westward migration to California?",
    choices: ["Oil", "Silver", "Gold", "Copper"],
    answer: 2,
    era: "Antebellum Era",
    year: 1848
  },
  {
    question: "The Compromise of 1850 included a controversial law requiring the return of what?",
    choices: ["Stolen property", "Fugitive slaves", "Tax revenue", "Military deserters"],
    answer: 1,
    era: "Antebellum Era",
    year: 1850
  },
  {
    question: "Who wrote 'Uncle Tom's Cabin,' which fueled anti-slavery sentiment?",
    choices: ["Frederick Douglass", "Harriet Beecher Stowe", "Sojourner Truth", "William Lloyd Garrison"],
    answer: 1,
    era: "Antebellum Era",
    year: 1852
  },
  {
    question: "What was the Dred Scott decision's main ruling?",
    choices: [
      "Slaves could sue for freedom in any state",
      "African Americans were not citizens and had no right to sue",
      "Slavery was unconstitutional",
      "Fugitive slaves must be returned"
    ],
    answer: 1,
    era: "Antebellum Era",
    year: 1857
  },
  {
    question: "What doctrine stated that settlers in new territories could decide the slavery question for themselves?",
    choices: ["Manifest Destiny", "Popular Sovereignty", "States' Rights", "Nullification"],
    answer: 1,
    era: "Antebellum Era",
    year: 1854
  },
  {
    question: "Who led a famous raid on Harpers Ferry in 1859?",
    choices: ["Nat Turner", "John Brown", "William Lloyd Garrison", "Frederick Douglass"],
    answer: 1,
    era: "Antebellum Era",
    year: 1859
  },
  {
    question: "The phrase 'Manifest Destiny' expressed the belief that Americans were destined to do what?",
    choices: [
      "Abolish slavery",
      "Expand across the North American continent",
      "Establish a monarchy",
      "Form alliances with European powers"
    ],
    answer: 1,
    era: "Antebellum Era",
    year: 1845
  },
  {
    question: "Which president signed the Indian Removal Act of 1830?",
    choices: ["John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "James K. Polk"],
    answer: 1,
    era: "Antebellum Era",
    year: 1830
  },

  // === Civil War (1861-1865) ===
  {
    question: "Which state was the first to secede from the Union?",
    choices: ["Virginia", "Georgia", "South Carolina", "Mississippi"],
    answer: 2,
    era: "Civil War",
    year: 1860
  },
  {
    question: "Who was the President of the Confederate States of America?",
    choices: ["Robert E. Lee", "Jefferson Davis", "Stonewall Jackson", "Alexander Stephens"],
    answer: 1,
    era: "Civil War",
    year: 1861
  },
  {
    question: "The Emancipation Proclamation declared freedom for enslaved people in which areas?",
    choices: [
      "All U.S. states",
      "Border states only",
      "Confederate states in rebellion",
      "Northern states only"
    ],
    answer: 2,
    era: "Civil War",
    year: 1863
  },
  {
    question: "Which Civil War battle had the highest number of casualties?",
    choices: ["Battle of Antietam", "Battle of Gettysburg", "Battle of Shiloh", "Battle of Chickamauga"],
    answer: 1,
    era: "Civil War",
    year: 1863
  },
  {
    question: "Where did General Lee surrender to General Grant, effectively ending the Civil War?",
    choices: ["Richmond", "Appomattox Court House", "Atlanta", "Vicksburg"],
    answer: 1,
    era: "Civil War",
    year: 1865
  },
  {
    question: "The Battle of Gettysburg took place in which state?",
    choices: ["Virginia", "Maryland", "Pennsylvania", "West Virginia"],
    answer: 2,
    era: "Civil War",
    year: 1863
  },
  {
    question: "What famous address did Lincoln deliver at a battlefield cemetery in 1863?",
    choices: ["Inaugural Address", "Emancipation Proclamation", "Gettysburg Address", "Cooper Union Address"],
    answer: 2,
    era: "Civil War",
    year: 1863
  },
  {
    question: "Which Union general's 'March to the Sea' devastated Georgia in 1864?",
    choices: ["Ulysses S. Grant", "William T. Sherman", "George McClellan", "Ambrose Burnside"],
    answer: 1,
    era: "Civil War",
    year: 1864
  },
  {
    question: "What was the first major battle of the Civil War?",
    choices: ["Battle of Shiloh", "First Battle of Bull Run", "Battle of Antietam", "Battle of Fort Sumter"],
    answer: 1,
    era: "Civil War",
    year: 1861
  },
  {
    question: "Where were the first shots of the Civil War fired?",
    choices: ["Fort Sumter", "Fort Monroe", "Fort Henry", "Fort McHenry"],
    answer: 0,
    era: "Civil War",
    year: 1861
  },

  // === Reconstruction & Gilded Age (1865-1900) ===
  {
    question: "Which amendment abolished slavery in the United States?",
    choices: ["12th Amendment", "13th Amendment", "14th Amendment", "15th Amendment"],
    answer: 1,
    era: "Reconstruction",
    year: 1865
  },
  {
    question: "Who assassinated President Abraham Lincoln?",
    choices: ["Lee Harvey Oswald", "John Wilkes Booth", "Charles Guiteau", "Leon Czolgosz"],
    answer: 1,
    era: "Reconstruction",
    year: 1865
  },
  {
    question: "The 14th Amendment granted what to all persons born in the United States?",
    choices: ["Right to vote", "Citizenship", "Right to bear arms", "Freedom of speech"],
    answer: 1,
    era: "Reconstruction",
    year: 1868
  },
  {
    question: "The 15th Amendment prohibited denying the right to vote based on what?",
    choices: ["Gender", "Property ownership", "Race, color, or previous condition of servitude", "Age"],
    answer: 2,
    era: "Reconstruction",
    year: 1870
  },
  {
    question: "The transcontinental railroad was completed in 1869 at what location?",
    choices: ["Omaha, Nebraska", "Promontory Summit, Utah", "Sacramento, California", "Denver, Colorado"],
    answer: 1,
    era: "Reconstruction",
    year: 1869
  },
  {
    question: "Which inventor is credited with creating the first practical light bulb?",
    choices: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "George Westinghouse"],
    answer: 2,
    era: "Gilded Age",
    year: 1879
  },
  {
    question: "The Statue of Liberty was a gift from which country?",
    choices: ["England", "Germany", "France", "Spain"],
    answer: 2,
    era: "Gilded Age",
    year: 1886
  },
  {
    question: "What was the name given to the era of rapid economic growth and political corruption in the late 1800s?",
    choices: ["Progressive Era", "Gilded Age", "Roaring Twenties", "Age of Reason"],
    answer: 1,
    era: "Gilded Age",
    year: 1870
  },
  {
    question: "Which battle in 1876 saw the defeat of Lt. Col. Custer by Lakota and Cheyenne warriors?",
    choices: ["Battle of Wounded Knee", "Battle of Little Bighorn", "Sand Creek Massacre", "Red Cloud's War"],
    answer: 1,
    era: "Gilded Age",
    year: 1876
  },
  {
    question: "The Sherman Antitrust Act of 1890 targeted what?",
    choices: ["Labor unions", "Monopolies and trusts", "Immigration", "Foreign trade"],
    answer: 1,
    era: "Gilded Age",
    year: 1890
  },
  {
    question: "Ellis Island opened in 1892 primarily to serve what function?",
    choices: ["Military base", "Immigration processing station", "Prison", "Trade port"],
    answer: 1,
    era: "Gilded Age",
    year: 1892
  },
  {
    question: "The Spanish-American War of 1898 resulted in the U.S. gaining control of which territories?",
    choices: [
      "Canada and Mexico",
      "Philippines, Guam, and Puerto Rico",
      "Cuba and Haiti",
      "Alaska and Hawaii"
    ],
    answer: 1,
    era: "Gilded Age",
    year: 1898
  },

  // === Progressive Era & WWI (1900-1920) ===
  {
    question: "Which president was known as the 'trust buster' for breaking up monopolies?",
    choices: ["William Howard Taft", "Woodrow Wilson", "Theodore Roosevelt", "Calvin Coolidge"],
    answer: 2,
    era: "Progressive Era",
    year: 1901
  },
  {
    question: "The 19th Amendment, ratified in 1920, granted what right?",
    choices: ["Prohibition of alcohol", "Women's suffrage", "Direct election of senators", "Income tax"],
    answer: 1,
    era: "Progressive Era",
    year: 1920
  },
  {
    question: "What event triggered U.S. entry into World War I?",
    choices: [
      "Sinking of the Lusitania",
      "Zimmermann Telegram and unrestricted submarine warfare",
      "Assassination of Archduke Ferdinand",
      "Attack on Pearl Harbor"
    ],
    answer: 1,
    era: "World War I",
    year: 1917
  },
  {
    question: "The Panama Canal, completed in 1914, connects which two bodies of water?",
    choices: [
      "Atlantic and Indian Oceans",
      "Pacific and Arctic Oceans",
      "Atlantic and Pacific Oceans",
      "Caribbean Sea and Gulf of Mexico"
    ],
    answer: 2,
    era: "Progressive Era",
    year: 1914
  },
  {
    question: "Which amendment established Prohibition, banning the manufacture and sale of alcohol?",
    choices: ["16th Amendment", "17th Amendment", "18th Amendment", "19th Amendment"],
    answer: 2,
    era: "Progressive Era",
    year: 1919
  },
  {
    question: "What was the name of the ship whose sinking by a German U-boat in 1915 outraged Americans?",
    choices: ["Titanic", "Lusitania", "Maine", "Bismarck"],
    answer: 1,
    era: "World War I",
    year: 1915
  },
  {
    question: "Woodrow Wilson's Fourteen Points proposed what after WWI?",
    choices: [
      "Harsh reparations for Germany",
      "A framework for lasting world peace including a League of Nations",
      "American isolationism",
      "Expansion of colonial empires"
    ],
    answer: 1,
    era: "World War I",
    year: 1918
  },
  {
    question: "The Triangle Shirtwaist Factory fire of 1911 led to reforms in what area?",
    choices: ["Immigration policy", "Workplace safety laws", "Child labor", "Voting rights"],
    answer: 1,
    era: "Progressive Era",
    year: 1911
  },
  {
    question: "Which amendment introduced the federal income tax?",
    choices: ["14th Amendment", "15th Amendment", "16th Amendment", "17th Amendment"],
    answer: 2,
    era: "Progressive Era",
    year: 1913
  },

  // === Roaring Twenties & Great Depression (1920-1940) ===
  {
    question: "The stock market crash of 1929 is often associated with what day of the week?",
    choices: ["Black Monday", "Black Tuesday", "Black Friday", "Black Thursday"],
    answer: 1,
    era: "Great Depression",
    year: 1929
  },
  {
    question: "Franklin D. Roosevelt's New Deal aimed to address what crisis?",
    choices: ["World War II", "The Great Depression", "The Dust Bowl", "Prohibition"],
    answer: 1,
    era: "Great Depression",
    year: 1933
  },
  {
    question: "What environmental disaster devastated the Great Plains during the 1930s?",
    choices: ["Great Flood", "Dust Bowl", "Great Hurricane", "Yellowstone Eruption"],
    answer: 1,
    era: "Great Depression",
    year: 1935
  },
  {
    question: "The Harlem Renaissance was a flourishing of what in the 1920s?",
    choices: [
      "Technology and industry",
      "African American culture, art, and literature",
      "European immigration",
      "Political activism"
    ],
    answer: 1,
    era: "Roaring Twenties",
    year: 1925
  },
  {
    question: "Who made the first solo nonstop transatlantic flight in 1927?",
    choices: ["Amelia Earhart", "Charles Lindbergh", "Howard Hughes", "Wiley Post"],
    answer: 1,
    era: "Roaring Twenties",
    year: 1927
  },
  {
    question: "Which New Deal program provided jobs building infrastructure like roads and bridges?",
    choices: [
      "Social Security Administration",
      "Works Progress Administration",
      "Federal Reserve",
      "Securities and Exchange Commission"
    ],
    answer: 1,
    era: "Great Depression",
    year: 1935
  },
  {
    question: "The Social Security Act, signed in 1935, primarily provided what?",
    choices: [
      "Free healthcare",
      "Retirement and unemployment benefits",
      "Free education",
      "Housing subsidies"
    ],
    answer: 1,
    era: "Great Depression",
    year: 1935
  },
  {
    question: "Which amendment repealed Prohibition?",
    choices: ["19th Amendment", "20th Amendment", "21st Amendment", "22nd Amendment"],
    answer: 2,
    era: "Great Depression",
    year: 1933
  },
  {
    question: "What was the Scopes Trial of 1925 about?",
    choices: [
      "Freedom of the press",
      "Teaching evolution in public schools",
      "Prohibition enforcement",
      "Women's voting rights"
    ],
    answer: 1,
    era: "Roaring Twenties",
    year: 1925
  },

  // === World War II (1941-1945) ===
  {
    question: "The attack on Pearl Harbor occurred on what date?",
    choices: ["December 7, 1941", "June 6, 1944", "August 6, 1945", "September 1, 1939"],
    answer: 0,
    era: "World War II",
    year: 1941
  },
  {
    question: "D-Day, the Allied invasion of Normandy, took place on what date?",
    choices: ["June 6, 1943", "June 6, 1944", "May 8, 1945", "August 15, 1945"],
    answer: 1,
    era: "World War II",
    year: 1944
  },
  {
    question: "What was the name of the U.S. program that developed the atomic bomb?",
    choices: ["Operation Overlord", "Manhattan Project", "Project Apollo", "Operation Paperclip"],
    answer: 1,
    era: "World War II",
    year: 1942
  },
  {
    question: "Which U.S. president made the decision to drop atomic bombs on Japan?",
    choices: ["Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower", "Douglas MacArthur"],
    answer: 1,
    era: "World War II",
    year: 1945
  },
  {
    question: "Executive Order 9066 led to the internment of which group during WWII?",
    choices: ["German Americans", "Italian Americans", "Japanese Americans", "Irish Americans"],
    answer: 2,
    era: "World War II",
    year: 1942
  },
  {
    question: "The Battle of Midway in 1942 was a turning point in which theater of war?",
    choices: ["European", "Pacific", "African", "Atlantic"],
    answer: 1,
    era: "World War II",
    year: 1942
  },
  {
    question: "What was the name for American women who worked in factories during WWII?",
    choices: ["Liberty Belles", "Rosie the Riveter", "Victory Girls", "War Mothers"],
    answer: 1,
    era: "World War II",
    year: 1943
  },
  {
    question: "The GI Bill of 1944 provided veterans with benefits including what?",
    choices: [
      "Free housing only",
      "Education funding and low-cost mortgages",
      "Military pensions only",
      "Tax exemptions only"
    ],
    answer: 1,
    era: "World War II",
    year: 1944
  },
  {
    question: "Which two Japanese cities were atomic bombs dropped on?",
    choices: [
      "Tokyo and Osaka",
      "Hiroshima and Nagasaki",
      "Kyoto and Kobe",
      "Yokohama and Sapporo"
    ],
    answer: 1,
    era: "World War II",
    year: 1945
  },

  // === Cold War Era (1945-1970) ===
  {
    question: "The Marshall Plan provided economic aid to help rebuild which region after WWII?",
    choices: ["Asia", "South America", "Europe", "Africa"],
    answer: 2,
    era: "Cold War",
    year: 1948
  },
  {
    question: "The Korean War lasted from 1950 to what year?",
    choices: ["1951", "1952", "1953", "1954"],
    answer: 2,
    era: "Cold War",
    year: 1953
  },
  {
    question: "Senator Joseph McCarthy became infamous in the 1950s for his campaign against what?",
    choices: ["Civil rights", "Communism", "Labor unions", "Immigration"],
    answer: 1,
    era: "Cold War",
    year: 1954
  },
  {
    question: "The Cuban Missile Crisis occurred in what year?",
    choices: ["1960", "1961", "1962", "1963"],
    answer: 2,
    era: "Cold War",
    year: 1962
  },
  {
    question: "Which president established NASA in 1958?",
    choices: ["John F. Kennedy", "Dwight D. Eisenhower", "Lyndon B. Johnson", "Richard Nixon"],
    answer: 1,
    era: "Cold War",
    year: 1958
  },
  {
    question: "The Berlin Airlift of 1948-1949 was a response to a Soviet blockade of what city?",
    choices: ["Munich", "Hamburg", "West Berlin", "Vienna"],
    answer: 2,
    era: "Cold War",
    year: 1948
  },
  {
    question: "What organization was formed in 1949 as a Western military alliance against the Soviet bloc?",
    choices: ["United Nations", "NATO", "SEATO", "Warsaw Pact"],
    answer: 1,
    era: "Cold War",
    year: 1949
  },
  {
    question: "The U-2 incident of 1960 involved what?",
    choices: [
      "A submarine collision",
      "A spy plane shot down over the Soviet Union",
      "A nuclear test failure",
      "An assassination attempt"
    ],
    answer: 1,
    era: "Cold War",
    year: 1960
  },
  {
    question: "What was the Bay of Pigs invasion?",
    choices: [
      "A successful U.S. military operation in Vietnam",
      "A failed CIA-sponsored invasion of Cuba",
      "A naval battle in the Korean War",
      "A covert operation in the Soviet Union"
    ],
    answer: 1,
    era: "Cold War",
    year: 1961
  },

  // === Civil Rights Movement (1950s-1960s) ===
  {
    question: "The Supreme Court case Brown v. Board of Education (1954) ruled that what was unconstitutional?",
    choices: [
      "Poll taxes",
      "Segregation in public schools",
      "Interracial marriage bans",
      "Literacy tests for voting"
    ],
    answer: 1,
    era: "Civil Rights",
    year: 1954
  },
  {
    question: "Who refused to give up her bus seat in Montgomery, Alabama in 1955?",
    choices: ["Coretta Scott King", "Rosa Parks", "Claudette Colvin", "Fannie Lou Hamer"],
    answer: 1,
    era: "Civil Rights",
    year: 1955
  },
  {
    question: "Martin Luther King Jr.'s 'I Have a Dream' speech was delivered during which event?",
    choices: [
      "Montgomery Bus Boycott",
      "March on Washington",
      "Selma to Montgomery Marches",
      "Birmingham Campaign"
    ],
    answer: 1,
    era: "Civil Rights",
    year: 1963
  },
  {
    question: "The Civil Rights Act of 1964 outlawed discrimination based on what?",
    choices: [
      "Race only",
      "Race, color, religion, sex, or national origin",
      "Race and gender only",
      "Race and religion only"
    ],
    answer: 1,
    era: "Civil Rights",
    year: 1964
  },
  {
    question: "The Voting Rights Act of 1965 primarily targeted which discriminatory practices?",
    choices: [
      "School segregation",
      "Housing discrimination",
      "Voter suppression tactics like literacy tests",
      "Employment discrimination"
    ],
    answer: 2,
    era: "Civil Rights",
    year: 1965
  },
  {
    question: "Who was the civil rights leader assassinated in Memphis in 1968?",
    choices: ["Malcolm X", "Medgar Evers", "Martin Luther King Jr.", "Fred Hampton"],
    answer: 2,
    era: "Civil Rights",
    year: 1968
  },
  {
    question: "The Little Rock Nine were students who integrated a high school in which state?",
    choices: ["Alabama", "Mississippi", "Arkansas", "Georgia"],
    answer: 2,
    era: "Civil Rights",
    year: 1957
  },
  {
    question: "What were the Freedom Rides of 1961?",
    choices: [
      "Protests against the Vietnam War",
      "Bus trips challenging segregation in interstate travel",
      "Marches for women's suffrage",
      "Labor union demonstrations"
    ],
    answer: 1,
    era: "Civil Rights",
    year: 1961
  },
  {
    question: "Which organization did Martin Luther King Jr. help found in 1957?",
    choices: ["NAACP", "SNCC", "SCLC", "CORE"],
    answer: 2,
    era: "Civil Rights",
    year: 1957
  },

  // === Vietnam & 1970s (1965-1980) ===
  {
    question: "The Gulf of Tonkin Resolution gave the president authority to escalate involvement in which conflict?",
    choices: ["Korean War", "Vietnam War", "Cold War", "Bay of Pigs"],
    answer: 1,
    era: "Vietnam Era",
    year: 1964
  },
  {
    question: "The Watergate scandal led to the resignation of which president?",
    choices: ["Lyndon B. Johnson", "Richard Nixon", "Gerald Ford", "Jimmy Carter"],
    answer: 1,
    era: "1970s",
    year: 1974
  },
  {
    question: "Which event in 1969 marked a giant leap for mankind?",
    choices: [
      "First satellite in orbit",
      "First American in space",
      "Moon landing by Apollo 11",
      "Launch of Space Shuttle"
    ],
    answer: 2,
    era: "1960s",
    year: 1969
  },
  {
    question: "The Kent State shootings of 1970 involved National Guard soldiers firing on students protesting what?",
    choices: ["Civil rights", "Vietnam War", "Watergate", "Draft lottery"],
    answer: 1,
    era: "Vietnam Era",
    year: 1970
  },
  {
    question: "The Tet Offensive of 1968 was a major turning point in which war?",
    choices: ["Korean War", "Vietnam War", "Gulf War", "Cold War"],
    answer: 1,
    era: "Vietnam Era",
    year: 1968
  },
  {
    question: "Who became president after Richard Nixon resigned?",
    choices: ["Jimmy Carter", "Gerald Ford", "Nelson Rockefeller", "Spiro Agnew"],
    answer: 1,
    era: "1970s",
    year: 1974
  },
  {
    question: "The Environmental Protection Agency (EPA) was established in what year?",
    choices: ["1965", "1970", "1975", "1980"],
    answer: 1,
    era: "1970s",
    year: 1970
  },
  {
    question: "What crisis in 1973 caused long gas lines and energy shortages in the U.S.?",
    choices: ["Iran hostage crisis", "OPEC oil embargo", "Three Mile Island", "Suez Canal crisis"],
    answer: 1,
    era: "1970s",
    year: 1973
  },
  {
    question: "The Iran hostage crisis began in what year?",
    choices: ["1977", "1978", "1979", "1980"],
    answer: 2,
    era: "1970s",
    year: 1979
  },
  {
    question: "Which astronaut spoke the famous words 'That's one small step for man, one giant leap for mankind'?",
    choices: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
    answer: 1,
    era: "1960s",
    year: 1969
  },

  // === 1980s-1990s ===
  {
    question: "Which president is associated with the phrase 'Mr. Gorbachev, tear down this wall'?",
    choices: ["George H.W. Bush", "Ronald Reagan", "Jimmy Carter", "Bill Clinton"],
    answer: 1,
    era: "1980s",
    year: 1987
  },
  {
    question: "The Berlin Wall fell in what year?",
    choices: ["1987", "1988", "1989", "1990"],
    answer: 2,
    era: "1980s",
    year: 1989
  },
  {
    question: "Operation Desert Storm in 1991 was the U.S. military response to Iraq's invasion of where?",
    choices: ["Iran", "Kuwait", "Saudi Arabia", "Syria"],
    answer: 1,
    era: "1990s",
    year: 1991
  },
  {
    question: "The North American Free Trade Agreement (NAFTA) was signed into law by which president?",
    choices: ["George H.W. Bush", "Bill Clinton", "Ronald Reagan", "George W. Bush"],
    answer: 1,
    era: "1990s",
    year: 1993
  },
  {
    question: "What technology, widely adopted in the 1990s, transformed communication and commerce?",
    choices: ["Television", "Radio", "The Internet", "Fax machines"],
    answer: 2,
    era: "1990s",
    year: 1995
  },
  {
    question: "The Oklahoma City bombing of 1995 targeted what type of building?",
    choices: ["Military base", "Federal building", "State capitol", "Shopping mall"],
    answer: 1,
    era: "1990s",
    year: 1995
  },
  {
    question: "Which president was impeached by the House in 1998 but acquitted by the Senate?",
    choices: ["Richard Nixon", "Ronald Reagan", "Bill Clinton", "George H.W. Bush"],
    answer: 2,
    era: "1990s",
    year: 1998
  },
  {
    question: "The Americans with Disabilities Act was signed into law in what year?",
    choices: ["1988", "1990", "1992", "1994"],
    answer: 1,
    era: "1990s",
    year: 1990
  },
  {
    question: "The Soviet Union officially dissolved in what year?",
    choices: ["1989", "1990", "1991", "1992"],
    answer: 2,
    era: "1990s",
    year: 1991
  },
  {
    question: "The World Wide Web was made publicly available in what year?",
    choices: ["1989", "1991", "1993", "1995"],
    answer: 1,
    era: "1990s",
    year: 1991
  },

  // === 2000s-Present ===
  {
    question: "The September 11 attacks occurred in what year?",
    choices: ["2000", "2001", "2002", "2003"],
    answer: 1,
    era: "2000s",
    year: 2001
  },
  {
    question: "Which government department was created in response to the September 11 attacks?",
    choices: [
      "Department of Defense",
      "Department of Homeland Security",
      "Department of Justice",
      "National Security Agency"
    ],
    answer: 1,
    era: "2000s",
    year: 2002
  },
  {
    question: "The U.S. invaded Iraq in 2003 under what stated justification?",
    choices: [
      "Harboring al-Qaeda leadership",
      "Weapons of mass destruction",
      "Oil reserves",
      "Human rights violations"
    ],
    answer: 1,
    era: "2000s",
    year: 2003
  },
  {
    question: "Hurricane Katrina devastated which major U.S. city in 2005?",
    choices: ["Houston", "Miami", "New Orleans", "Tampa"],
    answer: 2,
    era: "2000s",
    year: 2005
  },
  {
    question: "Who was the first African American president of the United States?",
    choices: ["Colin Powell", "Barack Obama", "Condoleezza Rice", "Eric Holder"],
    answer: 1,
    era: "2000s",
    year: 2008
  },
  {
    question: "The Affordable Care Act (Obamacare) was signed into law in what year?",
    choices: ["2008", "2009", "2010", "2011"],
    answer: 2,
    era: "2010s",
    year: 2010
  },
  {
    question: "Osama bin Laden was killed by U.S. Navy SEALs in what year?",
    choices: ["2009", "2010", "2011", "2012"],
    answer: 2,
    era: "2010s",
    year: 2011
  },
  {
    question: "The Supreme Court legalized same-sex marriage nationwide in which case?",
    choices: [
      "Roe v. Wade",
      "Obergefell v. Hodges",
      "Loving v. Virginia",
      "Lawrence v. Texas"
    ],
    answer: 1,
    era: "2010s",
    year: 2015
  },
  {
    question: "The 2008 financial crisis was triggered primarily by the collapse of what market?",
    choices: ["Stock market", "Housing/mortgage market", "Oil market", "Technology market"],
    answer: 1,
    era: "2000s",
    year: 2008
  },
  {
    question: "Which act, passed after 9/11, expanded government surveillance powers?",
    choices: ["Freedom Act", "Patriot Act", "Homeland Security Act", "Intelligence Reform Act"],
    answer: 1,
    era: "2000s",
    year: 2001
  },
  {
    question: "The U.S. withdrew its military from Afghanistan in what year?",
    choices: ["2019", "2020", "2021", "2022"],
    answer: 2,
    era: "2020s",
    year: 2021
  },
  {
    question: "Who was the first woman to serve as Vice President of the United States?",
    choices: ["Hillary Clinton", "Nancy Pelosi", "Kamala Harris", "Condoleezza Rice"],
    answer: 2,
    era: "2020s",
    year: 2021
  },
  {
    question: "The COVID-19 pandemic was officially declared a national emergency in the U.S. in what month and year?",
    choices: ["January 2020", "February 2020", "March 2020", "April 2020"],
    answer: 2,
    era: "2020s",
    year: 2020
  },
  {
    question: "What major infrastructure bill was signed into law in November 2021?",
    choices: [
      "Build Back Better Act",
      "Infrastructure Investment and Jobs Act",
      "American Rescue Plan",
      "CHIPS and Science Act"
    ],
    answer: 1,
    era: "2020s",
    year: 2021
  },
  {
    question: "The Dobbs v. Jackson Women's Health Organization decision in 2022 overturned which landmark ruling?",
    choices: ["Brown v. Board of Education", "Roe v. Wade", "Obergefell v. Hodges", "Miranda v. Arizona"],
    answer: 1,
    era: "2020s",
    year: 2022
  }
];
