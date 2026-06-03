# US Equity Daily Briefing

A self-contained dashboard + written briefing for the US equity market, tilted
toward the things you care about: **AI & semiconductors, Big Tech mega-caps,
energy/utilities, oil, and geopolitics.**

No build step, no dependencies, no network calls — just open it.

## View it

Open `index.html` in any browser:

```bash
# from this folder
open index.html            # macOS
xdg-open index.html        # Linux
# ...or just double-click the file
```

Or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/market-briefing/
```

## Files

| File | What it is |
|---|---|
| `index.html` | The dashboard shell (tiles, watchlists, movers, briefing pane). |
| `style.css` | Dark "terminal" styling. |
| `app.js` | Renderer — turns the data file into the page. **Rarely changes.** |
| `data.js` | **The day's data + written prose. This is the file you edit.** |
| `TEMPLATE.js` | Blank skeleton to copy into `data.js` for a new day. |
| `briefing-YYYY-MM-DD.md` | Standalone written briefing (readable on GitHub / mobile). |

## Regenerate it each day (the "generated daily" workflow)

The dashboard is **data-driven**: the entire page renders from `data.js`. To make
tomorrow's briefing you only touch the data, never the layout.

1. **Archive today** (optional): copy `data.js` → `data-2026-06-03.js`.
2. **Start from the skeleton**: copy `TEMPLATE.js` → `data.js`.
3. **Fill in** the latest numbers and prose (see the field notes in the template).
4. **Reload** `index.html`. Done.
5. Also save a `briefing-YYYY-MM-DD.md` if you want the written version archived.

### Easiest path: have Claude do it
In a Claude Code on the web session on this repo, just say:

> "Generate today's market briefing" — fetch the latest snapshot, update
> `market-briefing/data.js`, add a dated `briefing-*.md`, and commit.

Claude pulls current quotes/levels via web search, fills the data file, and the
dashboard updates itself. (If you'd like this to run on a schedule, the `/loop`
skill or a SessionStart hook can kick it off.)

## Data conventions

- `changePct` is the single-session % move as a number (`1.23`, `-3.61`). Use
  `null` when the day's move isn't known — the tile renders neutral instead of
  guessing.
- Everything in the shipped `data.js` reflects the **Tue Jun 2, 2026 close**
  (latest completed session at generation time), with crude/futures intraday
  Jun 3. Sources are listed at the bottom of the dashboard.

## Disclaimer

For information only — **not investment advice.** Figures are point-in-time
snapshots gathered from public sources; verify live prices before trading.
