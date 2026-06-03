/* =============================================================================
 * BRIEFING TEMPLATE — copy this to data.js each morning and fill in.
 * Keep the structure; only change values/prose. Set changePct to null when
 * a single-session move isn't known (the tile renders neutral).
 * ========================================================================== */

const BRIEFING = {
  meta: {
    title: "US Equity Market — Daily Briefing",
    dateLong: "Weekday, Month D, YYYY",
    dateShort: "YYYY-MM-DD",
    asOf: "What the numbers reflect (close date, intraday items, rates as-of).",
    status: "Pre-open",            // Pre-open | Open | Closed
    preparedFor: "Andrew",
    focus: ["AI & Semiconductors", "Big Tech", "Energy & Utilities", "Oil", "Geopolitics"],
  },

  indices: [
    { name: "S&P 500", ticker: "SPX", value: "0,000.00", changePct: 0, note: "" },
    { name: "Nasdaq Composite", ticker: "COMP", value: "00,000.00", changePct: 0, note: "" },
    { name: "Dow Jones", ticker: "DJI", value: "00,000", changePct: 0, note: "" },
  ],

  macro: [
    { label: "WTI Crude", value: "$00.00", changePct: 0, sub: "Intraday" },
    { label: "Brent Crude", value: "$00.00", changePct: null, sub: "Intraday" },
    { label: "10Y Treasury", value: "0.00%", changePct: null, sub: "Yield" },
    { label: "VIX", value: "00.0", changePct: null, sub: "" },
    { label: "Gold", value: "$0,000", changePct: null, sub: "Per oz" },
  ],

  groups: [
    {
      title: "AI & Semiconductors", accent: "#7c9cff",
      items: [
        { ticker: "NVDA", name: "Nvidia", price: "$0.00", changePct: 0, note: "" },
        { ticker: "AVGO", name: "Broadcom", price: "$0.00", changePct: 0, note: "" },
        { ticker: "TSM", name: "Taiwan Semi", price: "$0.00", changePct: 0, note: "" },
        { ticker: "AMD", name: "AMD", price: "$0.00", changePct: 0, note: "" },
      ],
    },
    {
      title: "Big Tech / Mega-cap", accent: "#6fd3a8",
      items: [
        { ticker: "META", name: "Meta", price: "$0.00", changePct: null, note: "" },
        { ticker: "GOOGL", name: "Alphabet", price: "$0.00", changePct: null, note: "" },
        { ticker: "AAPL", name: "Apple", price: "$0.00", changePct: null, note: "" },
        { ticker: "AMZN", name: "Amazon", price: "$0.00", changePct: null, note: "" },
        { ticker: "MSFT", name: "Microsoft", price: "$0.00", changePct: null, note: "" },
      ],
    },
    {
      title: "Energy, Utilities & Oil", accent: "#e6b566",
      items: [
        { ticker: "XLE", name: "Energy Sector ETF", price: "—", changePct: null, note: "" },
        { ticker: "XOM", name: "Exxon Mobil", price: "—", changePct: null, note: "" },
        { ticker: "CVX", name: "Chevron", price: "—", changePct: null, note: "" },
        { ticker: "XLU", name: "Utilities ETF", price: "—", changePct: null, note: "" },
      ],
    },
  ],

  movers: [
    // Pull the biggest +/- single-session moves from above.
    { ticker: "NVDA", changePct: 0 },
  ],

  briefing: {
    headline: "One-sentence takeaway for the day.",
    sections: [
      { title: "Market Summary", paras: ["", ""] },
      { title: "AI & Semiconductors  ⭐ your focus", paras: [""] },
      { title: "Big Tech / Mega-cap  ⭐ your focus", paras: [""] },
      { title: "Energy, Oil & Geopolitics  ⭐ your focus", paras: [""] },
      { title: "What to Watch Today", bullets: ["", ""] },
    ],
  },

  sources: [
    { label: "Source name", url: "https://example.com" },
  ],
};

if (typeof window !== "undefined") window.BRIEFING = BRIEFING;
