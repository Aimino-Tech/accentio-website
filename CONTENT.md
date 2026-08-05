# Accentio — Website Content & Design Contract

> Build the Accentio marketing website in this repo (`/mnt/work/repos/Operation/accentio-website`).
> Every number below is REAL and verified (2026-08-05). Do not invent metrics, customers, or logos.
> Design reference: `/mnt/work/repos/Operation/syntaro-website` — same stack (Vite 6 + React 18 + TS +
> shadcn/ui + Tailwind 3 + react-router + react-i18next EN/DE), same design language
> (dark-first, superlog.sh-grade). Read `DESIGN.md` there and mirror its tokens/motion/quality bar.

## Product

**Accentio** — accented speech on demand. A voice engine that generates any target language with any
specified native accent, at controllable intensity, verified to match real speakers — where
competitors cannot produce the accent at all.

Tagline candidates: "Accented speech, indistinguishable from real speakers." /
"Give any voice any accent." / "The voice engine that speaks like your users."

## Hard facts (use EXACTLY these numbers)

- P(accent) **0.975** — Chinese-accented German, best-of-N (single-shot 0.966). Real speakers: **0.974**.
  → "statistically indistinguishable from real speakers"
- Intelligibility **1.0** (8/8 content recall) · Medical accuracy **1.0**
- Competitors: Gemini 3.1 Flash TTS and ElevenLabs v3, asked for the same Chinese-accented German,
  moved P(accent) by **≤ 0.02** (Gemini +0.007/+0.017, ElevenLabs −0.003/+0.008 vs their own controls).
- **18** accent cells (ZH, AR verified; 16 more pipeline) · stress levels **0–5** · accent intensity 0–1
- Deterministic: same seed → **byte-identical audio** (verified)
- Steady-state latency **~4.4 s** for 6.9 s audio (RTX A4000); agent-ready
- AR cell at data ceiling: P 0.886 vs the only real Arabic-accented German speaker 0.895

## Audio demo assets (already in `public/audio/`)

Same sentence ("Bitte überwachen Sie den Patienten alle fünf Minuten.") four ways:
- `real_speaker_zh.wav` — REAL Chinese-accented German speaker (ground truth)
- `accentio_zh.wav` — our engine (verified P 0.975)
- `gemini_zh.wav` — Gemini 3.1 Flash TTS "[Chinese accent]" tag
- `elevenlabs_zh.wav` — ElevenLabs v3 "[Chinese accent]" tag

Build an interactive "Hear the difference" comparison player: 4 labeled rows, play/pause each,
timeline scrub if easy. This is the hero proof — a voice product's demo IS the product.
Accentio row gets a "VERIFIED — matches the real speaker" badge.

## Page sections (order: hook → prove → convert)

1. **Navbar**: Accentio logo (waveform monogram), links (Product, Matrix, Use cases, Pricing, Docs),
   CTA [Get API key]. Dark-first.
2. **Hero**: headline with animated gradient on the highlight word. CTAs: [Live demo ↓] + [Get API key].
   Code chip: `curl -X POST https://api.accentio.ai/api/v1/tts -H "X-API-Key: $KEY" -d '{"text":"Bitte überwachen Sie den Patienten alle fünf Minuten.","native_accent":"ZH","eval":true}'`
   Visual: the 4-way audio comparison player (right-anchored product mockup, syntaro-style).
3. **StatBand**: **0.975** P(accent) vs real 0.974 · **1.0** intelligibility · **≤0.02** competitor ΔP ·
   **18** accent cells · **0–5** stress levels. (tabular-nums, count-up on scroll)
4. **Compare** (prove): "Accent on demand — a capability they don't have." Table: rows = system
   (Real speaker / Accentio / Gemini / ElevenLabs), columns = P(accent) attempted, ΔP vs own control,
   intelligibility. Numbers: real 0.974 / Accentio 0.975 (+0.34 over our clean control) / Gemini 0.872
   (+0.017) / ElevenLabs 0.788 (+0.008). Footnote links to the honest eval artifact.
5. **Matrix** (product): the Cross-Lingual Accent Matrix — Tier A verified (ZH, AR → German),
   Tier B feasible (AR/ZH/RU/ES/HI → English via L2-Arctic), Tier C needs reference audio
   (FR→Arabic, DE→Chinese — customer-provided). One JSON example: `{"text":"...","target_language":"de","native_accent":"zh-CN","accent_intensity":0.45}`.
6. **Use cases**: 5 cards — ASR training data (ICU-grade medical safety), EdTech & exam prep,
   Aviation/maritime simulation, Enterprise L&D & brand voice, Gaming NPCs & media localization.
   Each: problem → solution → accentio difference.
7. **Agents & API**: MCP tools (`tts_synthesize`, `tts_evaluate`, `tts_list_cells`, `tts_matrix`),
   OpenAPI 3.1, determinism, latency, RapidAPI. Code chip: `opencode`/Claude MCP config snippet.
8. **Pricing**: 3 tiers — Free (entry cell ZH, 100 req/mo) / Pro per-cell ($XX/mo, verified cells +
   eval) / Matrix (all cells + custom Tier C data engagements). Mark "custom cells: pricing on
   engagement". Keep placeholder prices clearly marked as draft.
9. **FAQ**: 6 Q&As (What accents are verified? English support? How is this measured? Medical safety?
   Determinism? Competitors?).
10. **CTA** + **Footer** (Imprint/Privacy/Terms pages — EN/DE, legal-complete).

## Design requirements (from syntaro DESIGN.md)

- Dark-first, light mode functional. shadcn tokens in `index.css`; brand color: indigo-family
  (syntaro-500 #6366f1 works — call it accentio-primary).
- Inter font, hero `text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight`.
- GPU-only motion: aurora background, scroll reveals (IntersectionObserver), hero entrance stagger,
  stat count-up, marquee if used. All kill under `prefers-reduced-motion`.
- Product mockups: `rounded-xl border border-border bg-card shadow-2xl`.
- i18n EN + DE for every string (react-i18next).
- One h1 per page, sequential headings, SEO meta + og tags, canonical https://accentio.ai
  (domain pending — mark accepted debt in README, same as syntaro did).
- Accessibility: real anchors for CTAs, lucide icons aria-hidden, focus-visible rings, AA contrast.

## Verification (definition of done — do not skip)

1. `npm run build` clean + `npx tsc --noEmit` clean (or vite build covers it).
2. Lighthouse ≥ 90 on performance, accessibility, best-practices, SEO:
   `npm run build && npx vite preview --port 4173 & sleep 3 && npx lighthouse http://localhost:4173 --output=json --output-path=./lighthouse-report.json --chrome-flags='--headless --no-sandbox --disable-gpu'`
   Persist `lighthouse-report.json`. Fix any axis < 90 before reporting done.
3. Playwright (or npx playwright screenshot) at 375 / 768 / 1280 — save to `screenshots/`.
4. No broken links; no fabricated testimonials/logos; all CTAs real anchors.
5. Commit + push to main (repo remote already configured). Include the audio assets already committed.

## Copy integrity rules

- Every statistic maps to the Hard facts above. Never round 0.975 up to "1.0 P(accent)" in copy;
  use "0.975" or "statistically indistinguishable from real speakers".
- Do NOT claim English support — German is the only verified target today; English is Tier B roadmap.
- Do NOT claim we beat competitors on naturalness — we beat them on accent capability, which is the
  point of the Compare section. Keep that framing precise.
- EN + DE copy must say the same thing.
