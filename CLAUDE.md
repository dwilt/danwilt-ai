# danwilt.ai — Website

Public marketing site for Dan's AI consulting business.

## Positioning rules

### No methodology specifics on the public site

The public website must NOT reveal *how* Dan does context engineering. His methodology is the secret sauce — it's what clients pay for. The website sells the outcome and the discipline; it does not teach the technique.

**Do NOT use on this site:**
- `CLAUDE.md` (or any specific filename Dan uses)
- `subagent` / `sub-agent`
- References to directory-level context files, root-level context files, `.claude/` directories
- **The word "context"** in any methodology sense — "context engineering," "context files," "context system," "starter context," "maintaining context." Generic tech meaning (e.g. "in the context of…") is fine, but avoid it when describing Dan's offering. Use "setup," "configuration," "setting up their repos," "configuring their codebases" instead.
- Specific tool names tied to Dan's workflow (Claude Code, specific Cursor features, etc.)
- Step-by-step methodology, implementation details, or "how it works under the hood"

**OK to use on this site:**
- "Prompt engineering" — industry-standard term used to contrast.
- Generic outcome language: "configure your repos," "set up your codebase," "patterns," "documentation," "discipline," "reference implementation," "starter configuration"
- Tool names clients use (Copilot, Cursor) in customer-voice pain points — that's their reality, not Dan's method.

### The positioning Dan sells (from root `CLAUDE.md`)

- Not a retainer / done-for-you service
- Starter configuration is the teaching tool, not the product
- Team owns the discipline going forward
- Follow-up is bounded (30-day check-ins)

Deliverable language on this site should reflect this. See homepage Phase 2 section for current phrasing.

## Known leaks to consider

- The decorative "blueprint" SVG elements at the bottom of the page include faint pixel-font flavor text:
  - `TOOLS:CURSOR+CLAUDE` and `CLAUDE:EXPERT` (around lines 4199, 4304, 4374) — name tools, don't reveal methodology
  - `CONTEXTUN` (line 3583) and `CONTEXT.WI` (line 3897) — aesthetic partial strings, but include the word "context"
  Dan can decide whether to keep, soften, or remove these decorations.

## Files

- `index.html` — single-page homepage, all copy + styles inline
- `analytics.js` — analytics script
- Images: `dan-headshot.*`, `dan-working*.jpg`, `og-image.png`, favicons, `logos/`
