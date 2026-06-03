/* =============================================================================
 * DAILY EQUITY BRIEFING — DATA FILE
 * -----------------------------------------------------------------------------
 * This is the ONLY file you edit to regenerate the briefing each day.
 * The dashboard (index.html + app.js) renders entirely from the object below.
 *
 * To produce tomorrow's briefing:
 *   1. Copy this file (or TEMPLATE.js) and update the numbers + prose.
 *   2. Reload index.html — the dashboard and written briefing update themselves.
 *
 * Conventions:
 *   - changePct: single-session % move as a NUMBER (e.g. 1.23 or -3.61).
 *     Use null when the day's move is not known — the tile renders neutral.
 *   - All figures below reflect the latest completed session (Mon Jun 2, 2026
 *     close); commodities/futures are intraday Jun 3. Sources listed at bottom.
 * ========================================================================== */

const BRIEFING = {
  meta: {
    title: "US Equity Market — Daily Briefing",
    dateLong: "Wednesday, June 3, 2026",
    dateShort: "2026-06-03",
    asOf:
      "Equities reflect the Tue Jun 2 close (latest completed session). " +
      "Crude & futures are intraday Jun 3. Rates/VIX/gold as of Jun 1–2.",
    status: "Pre-open",
    preparedFor: "Andrew",
    focus: ["AI & Semiconductors", "Big Tech", "Energy & Utilities", "Oil", "Geopolitics"],
  },

  // ---- Headline index tiles -------------------------------------------------
  indices: [
    { name: "S&P 500", ticker: "SPX", value: "7,609.78", changePct: 0.13, note: "Record close — above 7,600 first time" },
    { name: "Nasdaq Composite", ticker: "COMP", value: "27,093.90", changePct: 0.03, note: "Fresh record; chip-led" },
    { name: "Dow Jones", ticker: "DJI", value: "51,322", changePct: 0.47, note: "+243 pts" },
  ],

  // ---- Macro / cross-asset strip -------------------------------------------
  macro: [
    { label: "WTI Crude", value: "$91.82", changePct: -0.37, sub: "Intraday Jun 3" },
    { label: "Brent Crude", value: "$95.96", changePct: null, sub: "Intraday Jun 3" },
    { label: "10Y Treasury", value: "4.48%", changePct: null, sub: "Yield" },
    { label: "VIX", value: "16.1", changePct: null, sub: "Low / complacent" },
    { label: "Gold", value: "$4,556", changePct: 1.11, sub: "Per oz" },
  ],

  // ---- Themed watchlists (ordered by your focus areas) ----------------------
  groups: [
    {
      title: "AI & Semiconductors",
      accent: "#7c9cff",
      items: [
        { ticker: "NVDA", name: "Nvidia", price: "$224.60", changePct: 5.64, note: "RTX Spark AI-PC chip w/ Microsoft" },
        { ticker: "AVGO", name: "Broadcom", price: "$480.80", changePct: 4.85, note: "Record high — reports after close TODAY" },
        { ticker: "TSM", name: "Taiwan Semi", price: "$441.00", changePct: 1.23, note: "Foundry to the AI buildout" },
        { ticker: "AMD", name: "AMD", price: "$513.72", changePct: 0.70, note: "Data-center rev +57% YoY" },
      ],
    },
    {
      title: "Big Tech / Mega-cap",
      accent: "#6fd3a8",
      items: [
        { ticker: "META", name: "Meta", price: "$600.61", changePct: null, note: "Above $600" },
        { ticker: "GOOGL", name: "Alphabet", price: "$372.18", changePct: null, note: "Custom-silicon (TPU) tailwind" },
        { ticker: "AAPL", name: "Apple", price: "$314.70", changePct: null, note: "" },
        { ticker: "AMZN", name: "Amazon", price: "$256.43", changePct: null, note: "" },
        { ticker: "MSFT", name: "Microsoft", price: "$452.35", changePct: -3.61, note: "Laggard — AI capex (~$190B) scrutiny" },
      ],
    },
    {
      title: "Energy, Utilities & Oil",
      accent: "#e6b566",
      items: [
        { ticker: "XLE", name: "Energy Sector ETF", price: "—", changePct: null, note: "+32% YTD, but ~-2% in Q2" },
        { ticker: "XOM", name: "Exxon Mobil", price: "—", changePct: null, note: "22% of XLE" },
        { ticker: "CVX", name: "Chevron", price: "—", changePct: null, note: "16% of XLE" },
        { ticker: "XLU", name: "Utilities ETF", price: "—", changePct: null, note: "Defensive / power-demand play" },
      ],
    },
  ],

  // ---- Movers bar chart (single-session % moves, real data) -----------------
  movers: [
    { ticker: "NVDA", changePct: 5.64 },
    { ticker: "AVGO", changePct: 4.85 },
    { ticker: "TSM", changePct: 1.23 },
    { ticker: "AMD", changePct: 0.70 },
    { ticker: "DJI", changePct: 0.47 },
    { ticker: "SPX", changePct: 0.13 },
    { ticker: "WTI", changePct: -0.37 },
    { ticker: "MSFT", changePct: -3.61 },
  ],

  // ---- Written briefing -----------------------------------------------------
  briefing: {
    headline:
      "Chips power the indices to fresh records as Microsoft lags; oil drifts lower on Iran de-escalation hopes ahead of Broadcom's print tonight.",
    sections: [
      {
        title: "Market Summary",
        paras: [
          "US equities ground higher Tuesday, with the S&P 500 (7,609.78, +0.13%) and Nasdaq Composite (27,093.90, +0.03%) notching record closes and the Dow adding 243 points (+0.47%). Breadth was narrow: the gains were overwhelmingly an AI-semiconductor story, masking a sharp 3.6% drop in Microsoft. Volatility stayed subdued (VIX ~16), the 10-year held near 4.48%, and gold firmed toward $4,556/oz.",
          "The setup into June 3 is constructive but top-heavy. The same handful of chip names carrying the tape also concentrates the risk — and tonight's Broadcom earnings is the single biggest swing factor for your watchlist.",
        ],
      },
      {
        title: "AI & Semiconductors  ⭐ your focus",
        paras: [
          "This is where the action is. Nvidia jumped ~5.6% to $224.60 after unveiling RTX Spark — a 1-petaflop AI-PC 'superchip' (Arm CPU + Blackwell GPU, 128GB unified memory, built with MediaTek) launched jointly with Microsoft to turn Windows into an 'agentic' OS. Systems from Dell, HP, Lenovo, Asus, MSI and a Microsoft Surface Ultra ship this fall. It pushes Nvidia squarely into Intel/AMD's PC turf and extends the AI narrative from the data center to the device.",
          "Broadcom (+4.85% to a record $480.80) reports fiscal Q2 after the close TODAY — the key event. Last quarter AI revenue more than doubled (+106% to $8.4B) and management has floated a path to >$100B of AI chip revenue by 2027. A strong guide likely carries the whole group into summer; a soft one is the most obvious source of a pullback. TSM (+1.2%) and AMD (+0.7%) are the secondary reads.",
        ],
      },
      {
        title: "Big Tech / Mega-cap  ⭐ your focus",
        paras: [
          "Divergence is the theme. Microsoft fell 3.6% to $452.35 even as it co-headlined the Nvidia RTX Spark launch — the market is increasingly scrutinizing the ~$190B AI-infrastructure capex bill and when it converts to returns. That's the tension to watch across the hyperscalers: owning the AI buildout vs. paying for it. Meta ($600.61) and Alphabet ($372.18, a TPU/custom-silicon beneficiary) held up better; Apple ($314.70) and Amazon ($256.43) were quieter.",
        ],
      },
      {
        title: "Energy, Oil & Geopolitics  ⭐ your focus",
        paras: [
          "Oil is easing despite an active conflict. WTI sits near $91.82 (-0.4%) and Brent ~$95.96, both down more than 10% from May highs after President Trump paused an imminent strike package on May 18 to allow negotiations. But the backdrop remains the 2026 Iran war and the Strait of Hormuz crisis: traffic through the strait — ~27% of seaborne crude — has been largely blocked since late February, an episode the IEA has called the largest supply disruption in oil-market history. The premium has swung from tail-risk to the central driver, so headlines can move crude (and your energy names) sharply in either direction.",
          "Sector-wise, energy (XLE) is up ~32% YTD but has stalled in Q2 (roughly -2%) as de-escalation hopes bleed out the war premium; Exxon and Chevron are ~41% of the ETF. S&P 500 energy earnings are forecast up ~57% in 2026 before shrinking ~5% in 2027 — i.e. you're being paid for a geopolitical premium that the forward curve expects to fade. Utilities (XLU) remain the lower-beta way to play structural AI/data-center power demand.",
        ],
      },
      {
        title: "What to Watch Today",
        bullets: [
          "Broadcom (AVGO) fiscal Q2 earnings AFTER THE CLOSE — AI revenue growth and FY27 commentary; the day's biggest catalyst for chips.",
          "Any Strait of Hormuz / US-Iran negotiation headlines — direct driver of WTI/Brent and energy equities.",
          "Whether Microsoft's drop spreads to other hyperscalers (AI-capex sentiment) or stays idiosyncratic.",
          "Crude holding the ~$90 WTI line; a break could pressure XLE, a spike would revive the inflation/rate worry.",
          "Index breadth — records on narrow leadership are fragile if the chip bid pauses.",
        ],
      },
    ],
  },

  // ---- Sources (clickable) --------------------------------------------------
  sources: [
    { label: "CNBC — Markets (Jun 1–2)", url: "https://www.cnbc.com/2026/06/01/stock-market-today-live-updates.html" },
    { label: "TheStreet — Market Today, Jun 2 2026", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-june-02-2026" },
    { label: "Schwab — Nvidia's New Chip / War Flares", url: "https://www.schwab.com/learn/story/stock-market-update-open" },
    { label: "NVIDIA Newsroom — RTX Spark / Windows PCs", url: "https://nvidianews.nvidia.com/news/nvidia-microsoft-windows-pcs-agents-rtx-spark" },
    { label: "TradingEconomics — Brent Crude", url: "https://tradingeconomics.com/commodity/brent-crude-oil" },
    { label: "OilPrice.com", url: "https://oilprice.com/" },
    { label: "Wikipedia — 2026 Strait of Hormuz crisis", url: "https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis" },
    { label: "24/7 Wall St. — XLE outlook", url: "https://247wallst.com/investing/2026/05/31/the-2-signals-that-will-determine-xles-performance-through-year-end/" },
    { label: "Yahoo Finance — quotes", url: "https://finance.yahoo.com/" },
  ],
};

// Expose for the renderer (works as plain <script>, no modules/build step).
if (typeof window !== "undefined") window.BRIEFING = BRIEFING;
