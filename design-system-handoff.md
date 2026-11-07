# Design-System Handoff: Palette

## Request
From the image in the current message, the user asked to "ikuti gaya color palette nya seperti yang aku kirim" for the Sopinsya project, but:
- Do **not** display that palette in the `web index` (i.e., `index.html`).
- Keep the design system separate from `web admin`; the user/admin area is a separate, standalone site.

## Palette (from the attached image)
- Primary: `#0F2942`
- Secondary: `#0D9488`
- Tertiary: `#F59E0B`
- Neutral: `#64748B`

These are the same values already present in `index.html` (the mechanism of the current repo). The instruction is that they should be **excluded** from the web index.

## Status
- `index-user.html` — a standalone user/peserta prototype that contains this palette. Its current state is a working artifact produced by prior turns.
- `index.html` — the preview shell already containing these tokens. Per request, it must NOT show this palette.

## What this means for the open work
1. Keep `index-user.html` (user-body prototype) separate from `index.html` (admin/preview shell).
2. Do not add this color palette into `index.html`.
3. If a deployed web app is to be built, decide which palette goes into the production UI: the user's stated intent is that the image palette is not for the web index and is kept separate from admin. Recommend the user confirm which palette (`#0F2942`, `#0D9488`, `#F59E0B`, `#64748B`) or an alternative should be the production user-ui default before code review.
