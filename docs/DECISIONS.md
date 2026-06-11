# Decisions

A running log of notable decisions made while developing this app, and the
reasoning behind them — so future sessions don't relitigate settled questions
without knowing why they were settled. Newest entries at the top.

Decisions about *language* — both the interface-language (i18n) feature and
the Basque conjugation research behind `CONJUGATIONS.md`/`VERB_COVERAGE.md` —
live in `docs/LANGUAGE_DECISIONS.md` instead.

## 2026-06-11 — Implemented Unit 3 ("Moving Around"): new `joan`/`etorri` present-tense verbs

**Decision:** Added `joan-present` and `etorri-present` lessons and flipped
Unit 3 to `available`. Both verbs are fully synthetic, `agreement: ['nor']`,
trimmed to the `ni`/`zu`/`hura` horizon (`noa`/`zoaz`/`doa`,
`nator`/`zatoz`/`dator`) per `CONJUGATIONS.md` §6, with full sentence/pronoun
data for the same question-kind variety as other Phase I verbs. No engine
changes needed; no `STORAGE_KEY` bump (new lesson ids).

## 2026-06-11 — Implemented Unit 2 ("Having, Wanting, and Knowing"): `ukan` present trimmed to 3-person horizon, plus new `nahi`/`jakin` verbs

**Decision:** Added `ukan-present`, `nahi-present`, `jakin-present` lessons and
flipped Unit 2 to `available`. Trimmed `ukan`'s `present` to `ni`/`zu`/`hura`
(`dut`/`duzu`/`du`), removing the old 6-person `hi`-based present/past tables
(unused, wrong shape — `past` will return correctly for Unit 12). `nahi`
(`nahi izan`) rides `ukan`'s exact suffixes and is the first `VERBS` entry
tagged `type: 'periphrastic'`. `jakin` is fully synthetic
(`dakit`/`dakizu`/`daki`), sharing `ukan`'s suffix family. All three have full
sentence/pronoun data. No `STORAGE_KEY` bump — progress shape unchanged, new
lesson ids have no prior progress.

## 2026-06-11 — Three journey-content fixes: `jakin` added to Unit 2, Unit 4's forward-referencing payload fixed, Unit 10's payload rewritten

**Decision:** A review of still-`pending` Units 2, 4, 10 in
`LEARNING_JOURNEY.md` found three content gaps, fixed in the doc and mirrored
in `journey.js`'s `focus`/`payload` (no `VERBS`/`LESSONS` data existed yet, so
this was content/sequencing only):

1. `jakin` ("to know") had no home in the journey despite being documented —
   added to Unit 2 alongside `ukan`/`nahi`, since it shares `ukan`'s suffix
   family.
2. Unit 4's payload referenced `jan` before Unit 7 introduces it — kept
   `jaten` but reframed it as a single fixed vocabulary item for Unit 4's
   `ari` examples, which primes Unit 7.
3. Unit 10's payload missed the point of teaching `behar` separately from
   `nahi` (its auxiliary-mismatch "aha moment") — replaced with `Joan behar
   dut`/`Etorri beharko duzu`, reusing Unit 3's intransitive `joan`/`etorri`
   so the `naiz`→`dut` shift is visible.

Fixed while still `pending` — the cheapest point to correct framing before any
conjugation data is authored.

## 2026-06-11 — Added Phase VI (causative `-arazi`/`-erazi`, Units 23-25) to `LEARNING_JOURNEY.md`

**Decision:** The causative suffix wasn't covered anywhere in the 22-unit
journey. Added a new **Phase VI — Making Things Happen (Causatives)** after
Phase V, with Stage 9 (Units 23-24: `-arazi` shifting `nor`→`nor-nork`→
`nor-nori-nork`) and Refresh Gate D (Unit 25, recombining with
future/conditional/imperative). Also added `VERB_COVERAGE.md` §6 documenting
the morphology/argument-shift rules.

**Why last:** causatives are a morphological *operation* recombining
everything taught earlier, so a learner needs every piece it recombines first
— same logic as Unit 22 (passive) being a late-game transformation. A
causativized verb is just another `type: 'periphrastic'` entry, so Tier 1 of
`EXERCISE_ENGINE.md` applies unchanged — flagged as content work, not engine
work.

## 2026-06-11 — Lessons now repeat each person to reach ~12 exercises (`TARGET_EXERCISE_COUNT`), instead of one question per person

**Decision:** `generateQuestions` previously produced one question per
grammatical person (3-6 total), making sessions too short for spaced
repetition. Added a `rounds` option (default `1`, backward-compatible) that
repeats the shuffle-and-roll pass independently each time. `createExerciseState`
picks `rounds` per source from `TARGET_EXERCISE_COUNT = 12` (each source's
share of 12, divided by its person count, rounded, floored at 1).

**Why 12:** 3-4 repetitions per form is enough for the testing effect without
dragging, and 12 divides evenly by both 3 and 6 (the table sizes in play),
keeping session length consistent regardless of a verb's person count.

## 2026-06-11 — Extended the bare-form ramp to two attempts, added a one-time conjugation preview, and flagged high-difficulty units for extra practice

**Decision:** Three changes addressing feedback that the journey moves too
fast:

1. `BARE_FORM_ATTEMPTS = 2` — `onlyBareForm` now applies whenever `attempts <
   2`, giving two recognition-only passes before richer framings mix in.
2. `LessonPreviewScreen` — shown once before a lesson's first attempt: a plain
   conjugation table with a "Start" button. Review lessons skip it.
3. `LEARNING_JOURNEY.md` gained a "Difficulty-weighted extra practice" note
   (§1.6) flagging units introducing a new grammatical relation (Units 2, 8,
   15, 16, 20, 21) for extra practice lessons, with Unit 16 (NOR-NORI-NORK)
   getting two.

(1) and (2) are general engine improvements with no new stored state, so no
`STORAGE_KEY` bump; (3) is a flag for future unit authors. Also fixed a
test-isolation bug: `setupTests.js` now calls RTL's `cleanup` in `afterEach`.

## 2026-06-11 — Restructured the home screen around `LEARNING_JOURNEY.md` and implemented Unit 1 ("Who and Where")

**Decision:** Added `src/journey.js` exporting `JOURNEY` — a data-only mirror
of `LEARNING_JOURNEY.md`'s phases → stages → units, each `available` (with
`lessonIds`) or `pending` (roadmap preview only, `gate: true` for Refresh
Gates). The home screen now walks this structure, rendering available units
via `LessonNode`/`LessonList` and pending units as locked `PendingUnitCard`s —
so the full curriculum is visible from day one. The old auto-derived `LESSONS
= (verb × tense)` cross product and verb-grouped
`VerbSection`/`ReviewSection`/`LearnTab` are gone; `LESSONS` is now a small
hand-written list, since units don't map cleanly onto "every tense of every
verb".

**Unit 1** (izan + new `egon` verb, present, `ni`/`zu`/`hura`) is implemented,
adopting the 3-person-horizon via partial conjugation tables rather than a
`persons` filter — `generateQuestions`/`buildOptions` already degrade
gracefully with fewer than 4/6 persons. `izan`'s old 6-person `hi`-based past
table was removed (will return correctly, with `zu`, for Unit 12).

**Note for existing learners:** `izan-present`'s table shrank from 6 to 3
persons, changing its question pool, but the *shape* of stored progress is
unchanged so `STORAGE_KEY` was not bumped.

## 2026-06-11 — Added `EXERCISE_ENGINE.md`: a unit-by-unit audit of engine gaps, superseding scattered `LEARNING_JOURNEY.md` notes

**Decision:** Added `docs/EXERCISE_ENGINE.md`, auditing all 22 journey units
against the current engine and sorting gaps into four tiers: data-only (most
of Phase I-III), small localized code changes (distractor floors, Phase I
person-restriction, Refresh Gate score-gating), new data shapes (negation,
ditransitive NOR-NORI-NORK, allocutive, non-finite/passive), and structural
engine work (flash drills, error-pattern detection). Audit-only — no decisions
made, just consolidated for when each unit comes up.

**Highest-priority open decisions flagged:** the Phase I 3-person-horizon
mechanism (per-verb partial tables vs. a `persons` filter — resolved in favor
of partial tables by the entry above) and the Unit 16 ditransitive table shape
(fixed-recipient vs. genuine 2D grid).

## 2026-06-11 — Rewrote `LEARNING_JOURNEY.md` (v2): acquisition order replaces grammar order; `zu` becomes the default "you", `hi` deferred to the allocutive unit

**Decision:** Replaced v1's 17-stage grammar-ordered sequence with an
acquisition-ordered one (per an external proposal), keeping v1's "usefulness
over implementation-ease" tiebreaker. Key changes: a **3-person horizon**
(every verb's first lesson covers only `ni`/`zu`/`hura`, with
`gu`/`zuek`/`haiek` unlocked together in a later "Expansion" Refresh Gate),
**functional grouping** (units named for communicative goals, not grammar
categories), and a **Refresh Gate** ending each phase.

**Resolved differently than the proposal:** rather than keep a 7-person model
with `hi` reappearing only in the hitanoa unit, this revision **defers `hi`
entirely** to that one unit and uses `zu` as the sole 2nd-person-singular
throughout — a 6-person core grid (`ni`/`zu`/`hura`/`gu`/`zuek`/`haiek`),
resolving v1's "Stage 11: zu retrofit" problem by making `zu` foundational
from the start.

**Concrete prerequisite surfaced:** `izan`/`ukan`'s citation tables (§1/§3)
were missing `zu` rows — fixed in the entry above. Also corrected the
proposal's Unit 14 mislabeling of `joan`/`etorri`/`ibili`'s imperfective "Past"
forms (those are progressive "I was going", not simple past) and moved
simple-past forms into Unit 13.

Two engine-level proposals (periodic flash drills; ergative-drift error
detection) were recorded as design notes but not folded into the sequence —
real feature work deserving their own design pass.

## 2026-06-11 — Added `LEARNING_JOURNEY.md`: a ~50-unit/17-stage curriculum sequence, ordered by usefulness rather than implementation effort

**Decision:** Added a content-design roadmap sequencing `VERB_COVERAGE.md`'s
open items into a linear unit-by-unit order (no exercises/`VERBS` data yet) —
"Unit" = one verb (or invariant-construction group) gaining one or more
tenses, mapping onto the existing `LESSONS` derivation. Largely superseded by
the v2 rewrite above, kept for history.

**Key ordering choices:** high-value invariant constructions
(`nahi`/`behar`/`ari`/`ahal`/`ezin`) and the future tense are pulled forward
since they reuse existing `izan`/`ukan` tables; `gustatu`/`iruditu`
(high-frequency periphrastic NOR-NORI) lead the dative stage over `jario` (per
`CONJUGATIONS.md`'s "very limited use" flag) — usefulness over
implementation-ease, the doc's stated tiebreaker; `zu` (Stage 11) is placed
after a solid core verb set but before the tense/mood explosion, the cheapest
point to retrofit a 7th person; not-yet-documented verbs/moods (`egin`, etc.)
are left out pending a `CONJUGATIONS.md` pass.

## 2026-06-08 — "Spot the error" is a sixth question kind that bundles four sentences instead of testing one person

**Decision:** Added `kind: 'spot-error'`: shows four filled-in example
sentences (one person's own plus three random companions) and asks the learner
to pick the one whose verb form was swapped for a different person's. Reuses
`verb.sentences[tense][person]` data, storing the wrong sentence as `correct`
and all four as `options` so existing grading/rendering work unchanged —
`QuestionPrompt` only needed one branch for when `question.items` is present.
Gated on `personsWithSentences.length >= 4`. It's an intentional narrow
exception to "one question tests one person" (still consumes one slot in the
per-person loop) — generalizing `generateQuestions` for variable-width
questions would be a much bigger change for one kind.

**Why:** the other five kinds only ever show correct forms to recognize/recall;
framing this as "find the one wrong sentence among four" gives error-*detection*
practice at the same ~25% guess rate as the other kinds. Distractors are picked
uniformly at random rather than biased toward near-miss persons, to avoid extra
data-shape complexity.

## 2026-06-07 — The itinerary now ramps up in three stages: bare forms → richer framings → cross-lesson reviews

**Decision:**
1. **Bare forms first** — `generateQuestions` gained `onlyBareForm`,
   suppressing sentence/pronoun/typed framings; `createExerciseState` sets it
   whenever `attempts === 0` for a non-review lesson.
2. **Richer framings on repeat** — the existing sentence/pronoun/typed mix,
   now held back until after the first attempt.
3. **Cross-lesson review checkpoints** — `LESSONS` now appends review lessons
   (`{ id, review: true, sources: [...] }`) once a verb has multiple tenses
   (interleaving them) or multiple verbs exist (a final mixed review).
   `createExerciseState` runs `generateQuestions` per source and shuffles
   results together; every question carries its source `verbId`/`tense` so
   `ExerciseScreen` can derive context per-question. `describeLesson`
   centralizes practice-vs-review display copy; `groupLessonsByVerb` splits
   lessons into per-verb groups plus a trailing `mixedLessons` bucket.

**Why:** gating on `attempts` keeps the existing per-lesson progress model as
the single source of truth; making reviews *lessons* (not bonus questions
mixed into existing ones) keeps each lesson's score meaning unchanged.

## 2026-06-07 — `izan`'s example sentences must stick to identity/characteristic predicates, not location/state ones (that's `egon`'s job)

**Decision:** Reworded several of `izan`'s past-tense example sentences that
predicated location ("etxean", "hemen") or temporary state ("pozik") — in
Basque those call for `egon`, a verb the app doesn't model, so pairing them
with `izan`'s forms taught a non-existent paradigm. New sentences predicate
identity/role/inherent characteristics ("nire laguna", "irakasle ona"),
matching the present-tense sentences.

**Why:** found alongside a related bug (a `nork`-agreement question showing
the absolutive pronoun "ni" instead of ergative "nik", fixed in
`QuestionPrompt` by reading from `verb.pronouns`) — both are the same class of
bug: content that looks grammatical but tests the wrong paradigm. Recorded as
a general rule for adding example sentences.

## 2026-06-07 — Typing exercises are two more question kinds, not a separate mode, and reuse the sentence data

**Decision:** Added `kind: 'type-verb'`/`'type-pronoun'`, typed-answer siblings
of `sentence`/`pronoun`, reusing the same blanked-sentence data and rolling
into the same `availableKinds` pool — a verb supporting one framing
automatically supports its typed sibling. `ExerciseScreen` (renamed from
`MultipleChoiceScreen`) picks between an option grid and a new
`TypedAnswerInput` via `Boolean(question.options)`; `QuestionPrompt` keys off
`Boolean(question.sentence)` instead of an explicit kind list. New
`isAnswerCorrect` (trim + case-fold) is used for all answers.
`rollQuestionKind` was simplified from two `Math.random` calls to one roll
partitioning `[0, SPECIAL_QUESTION_CHANCE)` into equal slices per kind — same
distribution, and makes every kind individually reachable by mocking
`Math.random`, unblocking deterministic tests.

**Why:** folding into existing lessons as more question kinds keeps lesson
identity/unlocking/progress untouched. Requiring sentence context for both
typed kinds avoids ambiguity (a declined pronoun depends on the sentence's
argument/case) and keeps the two framings consistent with each other.

## 2026-06-07 — Pronoun-fill questions reuse the sentence-completion machinery as a third question kind

**Decision:** Added `kind: 'pronoun'` — the verb is already spelled out and the
learner picks the correctly-declined pronoun ("___ etxe bat du." → "Hark").
Verbs can carry `pronouns` (declined form per person, in whatever case that
verb's subject takes) and `pronounSentences` (mirroring `sentences` but
blanking the pronoun). `generateQuestions` rolls one "framing" per question
from whichever of `sentence`/`pronoun` have data for that person/tense
(`SPECIAL_QUESTION_CHANCE = 0.5`, split evenly), and a new `buildOptions`
helper builds same-kind multiple choice from the matching lookup table.

**Why:** folding into existing (verb × tense) lessons as a third question kind
avoids a new lesson type. Storing `pronouns` per-verb (rather than a global
declension table) lets each verb state just the forms its own sentences need,
mirroring `conjugations`. Splitting the roll evenly across available special
kinds means adding a future kind won't shrink existing ones' frequency.

## 2026-06-07 — "Complete the sentence" questions are mixed into existing lessons, not a separate lesson type

**Decision:** Added an optional `sentences` field to `VERBS` (tense → person →
sentence with `___`). `generateQuestions` rolls, per question and only where a
sentence exists (`SENTENCE_QUESTION_CHANCE = 0.5`), between `kind: 'form'`
(bare form) and `kind: 'sentence'` (fill the blank). `MultipleChoiceScreen`
picks prompt/layout via `question.kind`/`QUESTION_PROMPTS`, rendering a dashed
blank (`SentenceWithBlank`). Distractors, scoring, retry queue, persistence,
and unlocking are all untouched, since both kinds resolve to "pick the right
conjugated form".

**Why:** folding into existing lessons as a second question style avoids
touching lesson identity/unlocking/progress, and per-question (not per-lesson)
rolling keeps lessons feeling mixed. `Boolean(sentence)` gating means verbs
without example sentences fall back to bare-form questions automatically.

## 2026-06-07 — Streak nudges are throttled: a session-level cooldown plus a chance check

**Decision:** `App` now tracks `streakNudgeCooldown` (lessons to wait), passed
down as `canShowStreakNudge`; showing a nudge resets it to a random 2-4 lessons
(`randomStreakNudgeCooldown`), ticking down per completed lesson. Even when
eligible, `MultipleChoiceScreen.handleSelect` shows the nudge only ~60% of the
time (`rollStreakNudgeChance`). Both random calls live in their own top-level
functions invoked from the answer-time event handler, since
`react-hooks/purity` forbids `Math.random` calls inside component bodies (even
nested in event-handler closures).

**Why:** asked to make the nudge feel less mechanical with cooldown +
randomness. Cooldown lives in `App` (not the per-lesson-remounted screen) since
it persists across lessons for the session; rolling the chance in the event
handler keeps the decision stable for that answer's feedback without a purity
violation or post-render flicker.

## 2026-06-07 — Mid-lesson streak encouragement lives in the feedback bar, not a new screen

**Decision:** Added a `streak` counter to exercise state (incremented on
correct, reset on miss) and `getStreakEncouragement(streak)` returning `{
icon, headline, message }` for milestone streaks (5/10/20), shown in
`FeedbackBar` in place of the usual message exactly when the streak lands on a
milestone.

**Why:** a full extra screen would interrupt flow; reusing the existing
feedback bar keeps the nudge lightweight. Resetting on a miss keeps "in a row"
meaning an unbroken run, matching the learner's lived experience.

## 2026-06-07 — Failed questions are requeued and hidden, not revealed and skipped

**Decision:** Reworked `exerciseReducer`/`createExerciseState` around a
`queue` (plus fixed `total`) instead of linear `questions`/`index`. A correct
answer drops the question; an incorrect one pushes it to the back marked
`retry: true`, so it resurfaces — the lesson ends only when the queue is
empty. `correctCount` (and the star rating) only credits *first*-attempt
correct answers. `getOptionStatus`/`FeedbackBar` now only flag the learner's
incorrect pick — the correct answer is no longer revealed on a miss.

**Why:** explicit request — don't reveal answers, requeue missed items until
answered correctly unaided. Pushing to the back of the queue is the simplest
semantics that still guarantees spacing before a retry.

## 2026-06-07 — End-of-lesson encouragement screen keyed off `computeStars` bands

**Decision:** Added `LessonResultsScreen`, shown when the exercise finishes
(local `finished` state) instead of calling `onComplete` immediately.
`getEncouragement(correctCount, total)` returns `{ icon, headline, message }`
selected by the same star band as `computeStars` (3/2/1/0 → Bikain!/Oso
ondo!/Ondo!/Ez etsi!).

**Why:** reusing `computeStars`' bands keeps the message, star rating, and
`Stars` badges elsewhere telling the same story. `finished` stays local
component state since it's a screen-transition concern, not part of the scored
exercise — `onComplete`/`recordResult` still only fire once the learner
dismisses the results screen.

## 2026-06-07 — Use `dvh` instead of `vh`/`screen` for full-height screens

**Decision:** Switched `HomeScreen`/`MultipleChoiceScreen` from `min-h-screen`
(`100vh`) to `min-h-dvh`/`h-dvh`, and restructured the latter so the
question/options area scrolls internally inside a fixed `h-dvh` container,
keeping the close button, progress bar, and `FeedbackBar` always pinned in
view.

**Why:** on mobile, `100vh` includes space hidden by browser chrome, pushing
the Continue/Finish button below the visible fold. `dvh` tracks the actual
visible viewport, and internal scrolling guarantees the action button stays
reachable.

## 2026-06-07 — Deploy to GitHub Pages via Actions, with hardcoded `base`

**Decision:** Set `base: '/testapp005/'` in `vite.config.js` and added
`.github/workflows/deploy.yml`, building on push to `main` and publishing
`dist/` via `actions/upload-pages-artifact` + `actions/deploy-pages` (requires
Pages source set to "GitHub Actions" in repo settings).

**Why:** GitHub Pages serves project sites from `/<repo>/`, so asset URLs need
the repo-name prefix. Hardcoded rather than derived since the app isn't
expected to be renamed/forked — update `base` if that changes.

## 2026-06-07 — Extracted pure lesson logic into `src/lessonLogic.js`

**Decision:** Moved `computeStars`, `recordResult`, `getUnlockedLessonIds`,
`shuffle`, `generateQuestions`, and `exerciseReducer` out of `App.jsx` into
`src/lessonLogic.js`.

**Why:** wanted to unit-test these pure functions directly, but exporting
non-component functions from `App.jsx` trips `react-refresh/only-export-components`
(breaks Fast Refresh). Splitting also keeps `App.jsx` focused on
components/screens.

## 2026-06-07 — Added unit/component tests (Vitest + RTL), held off on e2e

**Decision:** Set up Vitest + React Testing Library (`src/logic.test.js`,
`src/App.test.jsx`). No end-to-end suite (e.g. Playwright) yet.

**Why:** the riskiest logic (scoring, unlocking, persistence, question
generation, the exercise state machine) is pure and cheap to unit test
directly. E2e is the slowest, most maintenance-heavy layer — worth adding once
the app has more complex multi-screen flows worth protecting end-to-end.
Playwright + Chromium are already available in the dev container if/when
revisited.

## 2026-06-07 — Added CI (GitHub Actions: lint, test, build)

**Decision:** `.github/workflows/ci.yml` runs `npm run lint`, `npm test`, and
`npm run build` on every push and PR.

**Why:** an automated gate is what actually prevents regressions, since
relying on remembering to run checks locally doesn't scale as more changes
land via agents.

## 2026-06-07 — SessionStart hook installs deps synchronously

**Decision:** `.claude/hooks/session-start.sh` runs `npm install`
synchronously (not async) on Claude Code web sessions, gated on
`$CLAUDE_CODE_REMOTE`.

**Why:** guarantees dependencies are installed before the agent starts
working, avoiding race conditions. Tradeoff: session start waits on `npm
install`. Can switch to async later if startup latency becomes annoying — see
the `session-start-hook` skill.
