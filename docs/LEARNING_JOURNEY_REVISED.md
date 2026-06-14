# Aditzak — Learning Journey, Revised Blueprint (acquisition order)

> **Status: proposed redesign / audit deliverable — not yet reflected in
> code.** This document is a heavily-optimized iteration of
> `docs/LEARNING_JOURNEY.md`. The original remains the source-of-truth kept in
> sync with the *implemented* `journey.js`/`LESSONS` (Units 1–17 live); this
> file proposes structural changes that would require corresponding
> `journey.js`/`LESSONS`/`VERBS` work before they ship. Where this blueprint
> and the implemented journey disagree, that disagreement is **intentional**
> and called out in §1 (Critical Pedagogical Audit). Adopt unit-by-unit; log
> each adoption in `docs/DECISIONS.md` as it lands.
>
> Linguistic forms here are grounded in `docs/CONJUGATIONS.md`,
> `docs/VERB_COVERAGE.md`, and `docs/LANGUAGE_DECISIONS.md`. Engine touch-points
> reference `docs/EXERCISE_ENGINE.md`.

---

## 1. Critical Pedagogical Audit

This section names every decision in the original journey that I challenged,
the cognitive or linguistic friction it would have caused, and how the revised
layout resolves it. Decisions I **endorsed** are listed too, so the audit reads
as a verdict on the whole spine, not just a complaint list.

### 1.1 ✅ Endorsed — the "Me, You, & It" 3-person horizon (Phase I)

**Kept.** Restricting every verb's first lesson to `ni`/`zu`/`hura` is correct
and well-motivated: it matches conversational frequency, holds working-memory
load at the "max 3 persons per exercise" ceiling the app already enforces, and
lets a learner *say something true* after Unit 1. No change to the principle.

**One refinement (see 1.2):** the horizon is sound; the *exit* from it (the
Expansion gate) is where the original spikes.

### 1.2 ⚠️ Challenged — Unit 5 "Expansion" collapses two distinct plural paradigms into one gate

**Original:** a single Unit 5 expands `gu`/`zuek`/`haiek` for **six verbs at
once** (`izan`, `egon`, `ukan`, `joan`, `etorri`, `ikusi`).

**Friction.** Those six verbs do **not** share one plural pattern. They split
across two morphologically unrelated paradigms:

- **Absolutive (`nor`) plurals** — `izan`/`egon`/`joan`/`etorri`: the plural is
  marked on the *subject-agreement prefix/stem* (`gara`/`zarete`/`dira`,
  `gaude`/`zaudete`/`daude`, `goaz`/`zoazte`/`doaz`, `gatoz`/`zatozte`/`datoz`).
- **Ergative (`nor-nork`) plurals** — `ukan`/`ikusi`: the plural is marked by a
  *suffix on a fixed `du-` stem* (`dugu`/`duzue`/`dute`).

Teaching both in one gate invites the single most predictable beginner error:
**paradigm-blending** — producing `†dugara`/`†garete` chimeras, or reaching for
the ergative `-gu/-zue/-te` suffix set on an intransitive subject. The original
doc's own "Ergative Suffix Drift Detection" note (its App-engine §2) is
essentially an admission that this confusion is coming; bundling the two plural
systems in one gate manufactures exactly the confusion the detector would later
have to catch.

**Resolution.** Split Unit 5 into two consecutive, internally-homogeneous
lesson-blocks (kept under the "Unit 5" umbrella to avoid cascading a 30-unit
renumber):

- **5·i — Absolutive Plurals** (`izan`/`egon`/`joan`/`etorri`): one shared
  drill, since `gara`/`gaude`/`goaz`/`gatoz` rhyme structurally.
- **5·ii — Ergative Plurals** (`ukan`/`ikusi`): the `-gu/-zue/-te` suffix set on
  the fixed `du-` stem, taught *as a contrast* to 5·i ("the plural lives in a
  different place now").

The original's good instinct — placing Expansion early (right after Unit 4,
not at the end of Gate A) so `zarete` is drilled one unit after `naiz` — is
**kept**. We are not moving the gate; we are de-interleaving the two paradigms
inside it.

### 1.3 ✅ Endorsed (with a fatigue valve) — the 2-lesson person split

**Original:** from Unit 8 on, every (verb × tense) is split into a
`ni`/`zu`/`hura` lesson + a `gu`/`zuek`/`haiek` `-plural` sibling, to respect
the "max 3 persons per exercise" rule.

**Kept** — the rule is right and the split honors it. **But** for
mechanically-trivial verbs (a new `-tu` verb in an already-mastered `nor-nork`
pattern), a standalone plural lesson is low-value drill that risks the exact
"repetitive low-value drill fatigue" the brief warns against. **Refinement:**
gate the *standalone* plural sibling behind a difficulty flag. High-difficulty
paradigms (any unit in §1.4's hard list) keep the full 2-lesson split; easy
"just-new-vocabulary" verbs fold their plural persons into the **trailing mixer
review** instead of a dedicated lesson — same 6-person coverage, fewer
dead-feeling single-verb plural drills. This is a sizing decision, not an
engine change.

### 1.4 ⚠️⚠️ Strongly challenged — Unit 26 introduces `hi` + toka + noka simultaneously

This is the original journey's single largest cognitive cliff, and the brief
explicitly invites restructuring it.

**Original:** one Unit 26 introduces `hi` (a brand-new 7th person, *deferred the
entire course*) **and** allocutive agreement (hitanoa) **and** both gender
registers (toka `-k` / noka `-n`) at once, "as one register, not two facts."

**Friction.** This conflates three independent novelties into one unit:

1. `hi` as a **referential person** — new pronoun, new subject/object agreement
   slots across every paradigm the learner knows (`haiz`, `hago`, `hator`,
   `duk`-as-object…).
2. **Allocutive agreement itself** — the genuinely alien idea that a verb with
   *no `hi` argument at all* changes shape because of *who you're talking to*
   (`lan egiten du` → `lan egiten dik`). Nothing earlier in Basque prepares a
   learner for addressee-agreement; it is the steepest *conceptual* jump in the
   language, not just a new ending.
3. **A gender bifurcation** — every allocutive form exists in a masculine
   (toka) and feminine (noka) variant, doubling the table the instant it
   appears.

Presenting all three together means the learner cannot tell *which* novelty is
responsible for a wrong answer (is `dik` wrong because I confused the person,
the register, or the gender?). The "one register, not two facts" framing is
linguistically elegant but pedagogically backwards: allocutivity is hard
*precisely because* it is several facts, and collapsing them removes the
scaffolding.

**Resolution — stage Unit 26 into four ordered lesson-blocks** (umbrella "Unit
26", four internal stages + dedicated extra practice; see the Phase V table):

- **26·a — Meet `hi`** (no allocutivity yet): `hi` purely as a *subject* in
  paradigms already mastered — `hi haiz` / `hago` / `hator` / `hik duk`. This
  isolates novelty (1) and reuses existing `nor`/`nor-nork` machinery; `hi`'s
  rows already exist in `§6`/`§3` data, so it is Tier-1 cheap.
- **26·b — Toka (masculine allocutive only)**: addressee-agreement introduced
  on *third-person* statements only (`etorri da` → `etorri duk`, `lan egiten du`
  → `lan egiten dik`), one gender. This isolates novelty (2) with novelty (3)
  held constant.
- **26·c — Noka (feminine allocutive)**: the `-n` mirror, taught *as a
  systematic transform of 26·b* (`duk`→`dun`, `dik`→`din`, `nauk`→`naun`), so
  gender is learned as a rule, not a second vocabulary set.
- **26·d — Recombine & register-switch**: mixed toka/noka, and the social rule
  that hitanoa is banned in subordinate clauses and clashes with formal `-ke-`
  moods (per `LANGUAGE_DECISIONS.md`, 2026-06-11) — i.e. *when not to use it*.

This is the redesign's most consequential change and the one most worth
adopting first among the Phase V items.

### 1.5 ✅ Endorsed, scope-tightened — Unit 20 (NOR-NORI) and Unit 21 (NOR-NORI-NORK) as the paradigm steep-jumps

The original correctly flags these as the steepest jumps and gives Unit 21 two
extra lessons. **Kept.** Two reinforcements:

- **Spacing.** NOR-NORI (Unit 20) and NOR-NORI-NORK (Unit 21) must not be
  adjacent without a buffer — back-to-back, the dative-experiencer frame
  (`zait`) and the ditransitive frame (`dizut`) interfere. The original already
  separates them only by their own extra-practice lessons; I make **Refresh
  Gate C (Unit 22) mandatory and score-gated** *between* the dative system
  consolidating and Phase V opening, and add a **mini-consolidation lesson at
  the tail of Unit 20** before Unit 21 starts, so the learner over-learns the
  2-argument frame before the 3-argument frame lands.
- **Scaffolding the 2D grid (Unit 21).** The engine can't vary both NORK and
  NORI axes in one `[tense][person]` cell (`EXERCISE_ENGINE.md` Tier 3).
  Pedagogically this constraint is a *gift*: fix NORI first, vary NORK
  (`diot`/`diozu`/`dio`… "I/you/he tell *it to him*"), master that, *then* a
  second lesson fixes NORK and varies NORI (`dizut`/`diot`/`diet`… "I tell it
  *to you/him/them*"). Never both axes live in a learner's first exposure. See
  the enumerated Unit 21 lessons.

### 1.6 ✅ Endorsed — future-tense compression into a macro-mixer

The original compressing four per-verb future drill groups into Unit 14 (rule
once) + Unit 15 (cross-verb mixer) is exactly the "compress mechanically simple
concepts" mandate. **Kept and reinforced** by the Distractor Matrix (§2):
because the future is morphologically trivial, the mixer earns its keep only if
its *distractors* target the one real difficulty — the `-ko`/`-go` voicing
alternation and the `naiz`-vs-`dut` auxiliary choice — rather than re-drilling
person.

### 1.7 ⚠️ Challenged — morphophonology arriving as accidental surprise

**Original:** verb vocabulary is chosen by communicative theme; the
`-tzen`/`-ten` and `-ko`/`-go` alternations fall out wherever the chosen verbs
happen to land.

**Friction.** A learner who meets `jaten`, `edaten`, `erosten` (all `-ten`)
before ever meeting `hartzen`, `saltzen` (`-tzen`) will silently induce the
*wrong* rule ("the suffix is `-ten`") and then mis-produce the first `-tzen`
verb. The same trap exists for `-ko`/`-go`. The original never sequences these
deliberately.

**Resolution — a Morphophonological Pacing Schedule (§3 intro + per-unit
"MP" tags).** Each alternation is introduced with a *minimal pair* the same
unit, so the conditioning environment is visible, not inferred:

- **Imperfective `-t(z)en`:** **`-ten`** after radical-final **/n/ and
  sibilants/affricates** (`jan→jaten`, `egin→egiten`, `eros→erosten`,
  `ikus→ikusten`, `idatz→idazten`, `utz→uzten`, `itx→ixten`); **`-tzen`** after
  **vowels, liquids /l r/, and oral stops** (`har→hartzen`, `sal→saltzen`,
  `irakur→irakurtzen`, `bila→bilatzen`, `zabal→zabaltzen`). First minimal pair
  due in Unit 10: `jaten` (-ten) vs `hartzen` (-tzen).
- **Future `-ko`/`-go`:** **`-go`** after a participle ending in **/n/** (voicing
  assimilation: `izan→izango`, `joan→joango`, `jan→jango`, `edan→edango`,
  `egon→egongo`, `jakin→jakingo`); **`-ko`** elsewhere (`etorri→etorriko`,
  `ibili→ibiliko`, `erosi→erosiko`, `ikusi→ikusiko`, `hartu→hartuko`). First
  minimal pair due in Unit 14: `izango` (-go) vs `etorriko` (-ko).

These are content-authoring constraints on *verb ordering within a unit*, not
engine changes — but they convert a latent trap into a taught contrast.

### 1.8 ✅ Endorsed — Refresh Gates as structural consolidation; score-gating made concrete

Gates with zero new verbs are kept. The original left "score-gating" (Unit 17
and beyond) as an open product question; I **resolve** it (§4.4): gate lessons
flag `gate: true`, unlock requires `bestStars >= 2` (≥80%, per `computeStars`),
and failure leaves the next lesson locked with a replayable "needs 80% to
continue" state — not a hard wall. This is the minimal predicate change to
`getUnlockedLessonIds` the original itself scoped.

### 1.9 Summary of structural deltas vs. the original

| # | Original | Revised | Type |
|---|---|---|---|
| 1 | Unit 5 expands 6 verbs in one block | Split into 5·i (absolutive plurals) + 5·ii (ergative plurals) | De-interleave interfering paradigms |
| 2 | 2-lesson split for *every* verb | Full split for hard units; easy verbs fold plurals into mixer | Fatigue valve |
| 3 | Unit 26 = `hi`+toka+noka at once | Staged 26·a→d (person → toka → noka → recombine) | Decompose triple-novelty cliff |
| 4 | Units 20/21 adjacent | Buffer lesson + mandatory score-gated Gate C between frames | Anti-interference spacing |
| 5 | Morphophonology incidental | Deliberate minimal-pair pacing schedule | Remove accidental traps |
| 6 | Score-gating left open | Concrete `bestStars>=2` predicate | Resolve product question |
| 7 | Pronoun handling implicit | Explicit 4-stage Pronoun Fading Matrix (§3) | Make pro-drop a taught progression |

---

## 2. Distractor Engine Matrix

Lookup table of **Distractor Generation Rules** for the automated
multiple-choice engine (`generateQuestions`/`buildOptions`, `lessonLogic.js`).
The principle throughout: **a distractor is only pedagogically valuable if a
learner who picked it reveals a *specific, named* slippage.** Random wrong
strings teach nothing; these rules engineer each wrong option to catch one
diagnosable error class. "Slot 1/2/3" are the three distractor positions
`buildOptions` fills alongside the correct answer.

| Phase / paradigm | Correct-answer axis | Slot 1 (primary trap) | Slot 2 (secondary trap) | Slot 3 (lure) | Error class each catches |
|---|---|---|---|---|---|
| **I — NOR present** (`naiz`/`zara`/`da`) | subject person | other in-scope person form | second in-scope person form | (3-person table: borrow one plural form once Unit 5 exists, else a near-homophone) | **subject-agreement person** confusion |
| **I — NOR-NORK present** (`dut`/`duzu`/`du`) | ergative person | other ergative-subject form | second ergative form | a `nor`-pattern form of same gloss (`naiz` for `dut`) | **ergative person** + **intransitive/transitive auxiliary** drift |
| **II — past pools** (`nintzen…`, `nuen…`) | person, past aux | other person, *same* past aux | cross-pool same-person past aux (`nintzen` vs `nuen`) | **present**-tense same-person form (`naiz` for `nintzen`) | **tense (pres/past)** + **`izan`/`ukan` auxiliary** drift |
| **II — future** (`izango naiz`) | participle + aux | **wrong voicing** of suffix (`†izanko`/`†etorrigo`) | **wrong auxiliary** (`izango dut` for `izango naiz`) | other-person same-aux | **`-ko`/`-go` morphophonology** + **`naiz`/`dut`** choice |
| **III — imperfective vs simple past** | aspect | **simple-past** counterpart (`etorri nintzen` for `etortzen nintzen`) | other-person imperfective | present imperfective (`etortzen naiz`) | **aspect (habitual vs completed)** + tense |
| **IV — NOR-NORI** (`zait`/`zaizu`/`zaio`) | NORI (dative) person | other NORI-person form | **plural-NOR** form (`zaizkit` for `zait`) — *number* | an **ergative** form (`dut`) — wrong case frame | **dative person** vs **NOR number** vs **case-frame** (treating `gustatu` like a transitive) |
| **IV — NOR-NORI-NORK** (`dizut`) | NORK×NORI cell (one axis fixed per lesson) | **wrong NORK** (`dizu` for `dizut`) | **wrong NORI** (`diot` for `dizut`) | **wrong object number** (`dizkizut` for `dizut`) | isolates **ergative drift** vs **dative drift** vs **number** — the three independent failure modes of the ditransitive |
| **V — Ahalera/Baldintza** (`dezaket`/`banu`) | mood stem | indicative counterpart (`dut` for `dezaket`) | other-person same mood | wrong mood (`nuke` for `dezaket`) | **mood** (can/would/do) confusion |
| **V — Imperative** (small 2nd-person table) | imperative person | other imperative person | **borrowed sibling-verb imperative** (distractor-floor fix, `EXERCISE_ENGINE.md` Tier 2) | indicative form of same person | **register** (command vs statement); 3-option floor handled by borrow |
| **V — hi / hitanoa** (`dik`/`dun`) | allocutive form | **wrong gender** (`dik` vs `din`) — toka/noka | **neutral** non-allocutive form (`du`) — register leak | other-person allocutive | **toka/noka gender** vs **register leakage** vs person |
| **VI — Causative** (`itzularazi zituen`) | post-causative agreement | **non-causative auxiliary** (`itzuli ziren` — wrong valency) | wrong NORI on `nor-nori-nork` causatives (`die` for `dizkie`) | wrong tense of correct aux | **valency-agreement** (did the causation shift the frame?) + number |

**Engine notes for implementation**

- Slots are filled in priority order; if a small table can't supply a slot
  (e.g. the imperative's 3-person table), `buildOptions` **borrows the
  same-slot form from a sibling verb's table** rather than dropping to 3
  options (resolves the distractor-floor landmine, `EXERCISE_ENGINE.md` Tier 2).
- The "wrong-number" and "wrong-case-frame" slots (Phases IV/VI) require the
  *sibling* forms (`zaizkit`, `dizkizut`, `ziren`) to exist in the verb's table
  even when they aren't the drilled axis — author them as inert distractor
  fodder. This is the data prerequisite that makes "number confusion vs.
  case-marker drift" separable in scoring, and is the hook the optional
  "Ergative Suffix Drift Detection" feature (original App-engine §2) would later
  read if per-distractor error-tagging is added.
- Distractors must always be **real Basque forms from a real paradigm**, never
  invented strings — except the two explicitly-illegal "voicing" traps
  (`†izanko`, `†etorrigo`) in the future row, which are *intentional*
  non-words flagged as such, because the only way to test the `-ko`/`-go` rule
  is to offer the form that violates it.

---

## 3. The Full Revised Journey (Phases I–VI)

**Pronoun Fading Matrix** (applied to every Payload below). The same sentence is
shown with shrinking pronoun support as the learner advances — explicit
pronouns build the case-frame, then fade to native pro-drop, reappearing only
for contrast:

| Stage | Phases | Subject pronoun | Example (same gloss, "I'm going home") |
|---|---|---|---|
| **A — Explicit** | I | always present | **Ni** etxera **noa**. |
| **B — Optional** | II–III | shown parenthesized; reviews drop it | **(Ni)** etxera noa. |
| **C — Pro-drop default** | III–IV | dropped; pronoun only for emphasis | Etxera noa. *(contrast: **NIK** dakit, ez zuk.)* |
| **D — Full null-anaphora** | IV–VI | all arguments droppable incl. dative/ergative | Gustatzen **zait**. *(not "Hura niri gustatzen zait")* |

**Morphophonology (MP) tags** mark where a minimal pair is deliberately staged.

### Phase I — Survival Present (Me, You, & It)

Persons in scope: **`ni` / `zu` / `hura`** only. Pronoun stage: **A (explicit)**.

#### Stage 1: Absolute Foundations

| Unit | Focus | Payload (Pronoun Fading: Stage A) | Persons | Ref | Status |
|---|---|---|---|---|---|
| 1 | **Who and Where** — `izan` + `egon` present | **Ni** ikaslea **naiz**. / **Zu** non **zaude**? / **Hura** etxean **dago**. | ni/zu/hura: `naiz`/`zara`/`da`, `nago`/`zaude`/`dago` | §1, §6 | ✅ |
| 2 | **Having, Wanting, Knowing** — `ukan` (object `hura`) + `nahi` + `jakin` | **Nik** auto bat **dut**. / **Zuk** kafea **nahi duzu**? / **Nik** ez **dakit**. | ni/zu/hura: `dut`/`duzu`/`du`, `nahi dut…`, `dakit`/`dakizu`/`daki` | §3, VC §5, §7 | ✅ |
| 3 | **Seeing** — `ikusi` (first periphrastic) | **Nik** mendia **ikusten dut**. / **Zuk ikusten duzu**? | ni/zu/hura: `ikusten dut/duzu/du` | §7 | ✅ |

#### Stage 2: Basic Operations & Movement

| Unit | Focus | Payload (Stage A) | Persons | Ref | Status |
|---|---|---|---|---|---|
| 4 | **Moving Around** — `joan` + `etorri` present | **Ni** hondartzara **noa**. / **Hura** bihar **dator**. | ni/zu/hura: `noa`/`zoaz`/`doa`, `nator`/`zatoz`/`dator` | §6 | ✅ |
| **5** | 🛡️ **Expansion — Bringing in the Plural (SPLIT)** | see 5·i / 5·ii | gu/zuek/haiek | §1/§3/§6/§7 | ⚠️ revised |
| 5·i | **Absolutive plurals** — `izan`/`egon`/`joan`/`etorri` | Irakasleak **gara**. / Etxean **zaudete**. / Hondartzara **goaz**. | gu/zuek/haiek (`nor`) | §1/§6 | ⚠️ split from orig. Unit 5 |
| 5·ii | **Ergative plurals** — `ukan`/`ikusi` (contrast) | Auto bat **dugu**. / Filma **ikusten dute**. | gu/zuek/haiek (`nor-nork`) | §3/§7 | ⚠️ split from orig. Unit 5 |
| 6 | **The Immediate Continuous** — `ari` + `izan` | Zer **ari zara**? / **Jaten ari naiz**. | reuses Unit 1 `izan` under `ari` | VC §5 | ✅ — `jaten` seeded |

> **5·i / 5·ii rationale (audit §1.2):** the absolutive plural (`gara`/`goaz` —
> marked on the stem) and the ergative plural (`dugu`/`dute` — a suffix on the
> fixed `du-` stem) are different paradigms; teaching them as one block breeds
> `†dugara` chimeras. 5·ii is explicitly framed as "the plural moved — now it's
> a suffix." Early placement (right after Unit 4) is kept from the original.

#### 🛡️ Refresh Gate A — The "Ez" Trap

| Unit | Focus | Constraint | Notes |
|---|---|---|---|
| 7 | **REFRESH — The Inversion Matrix** | zero new verbs; negation only | `ez` + auxiliary-fronting across Units 1–6 (`Mutila etorri da` → `Mutila ez da etorri`). Reuses `negativeSentences` + `spot-error`-style kind. `ikusi`/`nahi`/`ari` excluded (split auxiliary). **MP note:** introduce the word-order shift on `nor` verbs first (cleaner), `nor-nork` second. |

### Phase II — Transitivity & Everyday Life

Persons: full 6-person grid from each verb's first lesson. Pronoun stage: **B
(optional — reviews drop the pronoun)**.

#### Stage 3: Looking Back I (simple past, pooled by shared auxiliary)

| Unit | Focus | Payload (Stage B) | Ref | Status |
|---|---|---|---|---|
| 8 | **Looking Back I — the `izan` past pool** (`nintzen`/`zinen`/`zen`/`ginen`/`zineten`/`ziren`), mixed across `izan`/`joan`/`etorri`/`ibili` | **(Ni)** gaztea **nintzen**. / **(Ni)** hondartzara **joan nintzen**. / **(Hura)** atzo **etorri zen**. | §1; §11+§1 | ✅ |
| 9 | **Looking Back I — the `ukan` past pool** (`nuen`/`zenuen`/`zuen`/`genuen`/`zenuten`/`zuten`), mixed across `ukan`/`jan`/`edan`/`erosi`/`ikusi` | **(Nik)** auto bat **nuen**. / Sagarra **jan nuen**. / Etxe bat **erosi genuen**. | §3; §7 | ✅ |

> **Extra-practice (hard-unit flagging):** Units 8–9 are **not** flagged hard —
> they reuse the `nor`/`nor-nork` shapes already drilled, only swapping the
> auxiliary's tense. Standard treatment (one pooled practice + mixer review).

#### Stage 4: Real-World Actions

| Unit | Focus | Payload (Stage B) | Ref | Status |
|---|---|---|---|---|
| 10 | **Daily Routine (Transitive)** — `ukan` present aux pooled across `jan`/`edan`/`erosi`/`ikusi` | **(Nik)** ogia **jaten dut**. / Ura **edaten duzu**. **MP: `jaten` (-ten) vs `hartzen` (-tzen)** introduced as a minimal pair here. | §7 | ✅ |
| 11 | **Physical States & Possessions** — `eduki`, `ibili` full grids | Giltzak poltsikoan **dauzkat**. / Herrian zehar **dabiltza**. | §7, §6 | ✅ |

#### Stage 5: Looking Back II (the two synthetic-past "odd ones out")

| Unit | Focus | Payload (Stage B) | Ref | Status |
|---|---|---|---|---|
| 12 | **"I Was There"** — `egon` simple past (`nengoen`/`zeunden`/`zegoen`/`geunden`/`zeundeten`/`zeuden`) | **(Ni)** etxean **nengoen**. / Hondartzan **geunden**. | §6 | ✅ |
| 13 | **"I Had It"** — `eduki` simple past (`neukan`/`zeneukan`/`zeukan`/`geneukan`/`zeneukaten`/`zeukaten`) | Giltzak **neuzkan**. / Denbora **geneukan**. | §7 | ✅ |

#### Stage 6: Talking About the Future (*Geroa*)

| Unit | Focus | Payload (Stage B→C) | Ref | Status |
|---|---|---|---|---|
| 14 | **The Future Rule** — `-ko`/`-go` + present aux, on a 3-verb core (`izan`/`ukan`/`joan`, both aux patterns) | Irakasle **izango naiz**. / Autoa **izango dugu**. / Bihar **joango naiz**. **MP: `izango` (-go, after -n) vs `etorriko` (-ko)** as the staged minimal pair. | §11 | ✅ |
| 15 | **The Future, Across Every Verb** — same rule, cross-verb *mixer reviews* (no per-verb tables) | Hori **ikusiko duzu**. / Etxe bat **erosiko dugu**. / **Jakingo duzu**? | §11 | ✅ |
| 16 | **Requirements & Obligations** — `behar` + `ukan`, present + future | **Joan behar dut**. / **Etorri beharko duzu**. (note: `behar` *always* takes `ukan`, even on intransitive `joan`) | VC §5 | pending |

#### 🛡️ Refresh Gate B — The Core Tense Checkpoint

| Unit | Focus | Constraint | Notes |
|---|---|---|---|
| 17 | **REFRESH — Cumulative Present/Past/Future Mixer** | zero new verbs; **score-gated** | Mixes synthetic+periphrastic, positive+negative, present+past+future. **Resolved gating:** `gate: true`, unlock at `bestStars >= 2`; on fail, next lesson stays locked with a replayable prompt (§4.4). |

### Phase III — Shifting to the Past (aspect)

Pronoun stage: **C (pro-drop default)**.

| Unit | Focus | Payload (Stage C) | Ref | Status |
|---|---|---|---|---|
| 18 | **"I Used To…" — the Imperfective Past** | Hona egunero **etortzen nintzen**. / Lanean **ari nintzen** deitu zuenean. (habitual/ongoing — *distinct* from Unit 8/9's completed past) | §11 imperfective | pending |
| 19 | **Motion in Progress (Past)** — `joan`/`etorri`/`ibili` native imperfective (`nindoan`/`zetorren`/`nenbilen`) | Bidean **nindoan**… / **Zetorren**, eta orduan… (contrast w/ Unit 9/13's `joan nintzen`) | §6 | pending |

> **Distractor focus (Phase III, §2):** every question pits the imperfective
> against its *simple-past* counterpart, so the only diagnostic error is
> **aspect**, not person.

### Phase IV — Interpersonal & Relationship Dynamics

Pronoun stage: **D (full null-anaphora; dative/ergative arguments droppable)**.

#### Stage 8: The Dative Shift ("To Me / For Me")

| Unit | Focus | Payload (Stage D) | Ref | Status |
|---|---|---|---|---|
| 20 | **Pleasures, Opinions, Feelings** — present NOR-NORI, `zait`/`zaizu`/`zaio`/`zaigu`/`zaizue`/`zaie` | Hau **gustatzen zait**. / Ongi **iruditzen zaio**. / Liburua **ahaztu zait**. (plural NOR: Giltzak **ahaztu zaizkit**.) | §4 | pending — **`ahaztu` resolved in §4.1** |
| 21 | **Communication & Giving** — present NOR-NORI-NORK (`esan`/`eman`), **axis-scaffolded** | **(Nik, zuri)** **ematen dizut**. / **(Zuk, hari)** **esaten diozu**. | §5, §8 | pending |

**Unit 20 — enumerated extra-practice lessons** (first dative-subject forms — a
brand-new case frame, the original's flagged hard unit):

1. **20·L1 — "It pleases me" (recognition)**: `gustatu` present, NORI varies
   (`zait`→`zaie`), NOR fixed `hura`. Multiple-choice, recognition-ramped.
2. **20·L2 — "It pleases me" (production)**: same grid, production; distractors
   per §2 (wrong NORI person + plural-NOR `zaizkit` + ergative lure `dut`).
3. **20·L3 — Number split**: NOR=`hura` (`zait`) vs NOR=`haiek` (`zaizkit`) —
   isolates the singular/plural-stimulus `-zki-` contrast on its own.
4. **20·L4 — Case-frame buffer (anti-interference, audit §1.5)**: mixed
   `gustatu`/`iruditu`/`ahaztu`, all NOR-NORI, drilled to over-learning
   *before* Unit 21's third argument lands.

**Unit 21 — enumerated extra-practice lessons** (first ditransitive — the
steepest jump; original assigns two extra, kept and made axis-explicit):

1. **21·L1 — Fix NORI, vary NORK** (`diot`/`diozu`/`dio`/`diogu`/`diozue`/`diote`
   — "… *it to him*"): only the ergative subject moves. Distractor slot =
   wrong NORK.
2. **21·L2 — Fix NORK, vary NORI** (`dizut`/`diot`/`diet`… — "I tell it *to
   you/him/them*"): only the dative recipient moves. Distractor slot = wrong
   NORI.
3. **21·L3 — Object number** (`dizut` vs `dizkizut`): the `-zki-` plural-object
   infix in isolation.
4. **21·L4 — Two-axis recombination** (recognition-first): both axes vary, but
   only after L1–L3 made each axis legible alone. Engine: if the 2D table shape
   (`EXERCISE_ENGINE.md` Tier 3 option b) isn't built, L4 is a `spot-error`-style
   "which sentence assigns the roles correctly?" lesson over pre-built pairs.

#### 🛡️ Refresh Gate C — The Multi-Argument Audit

| Unit | Focus | Constraint | Notes |
|---|---|---|---|
| 22 | **REFRESH — The Case-Ending Mixer** | zero new verbs; **score-gated** | Isolates NOR/NORK/NORI by swapping which argument is absolutive/ergative/dative — heads off the classic "`-k` drift" error. Reuses `case-mixer`/`spot-error` machinery (Delivery 3 shipped the NOR-vs-NOR-NORK piece). **Mandatory pass before Phase V** (audit §1.5). |

### Phase V — Nuance, Modality, & Social Context

#### Stage 9: Hypotheticals and Potentials

| Unit | Focus | Payload | Ref | Status |
|---|---|---|---|---|
| 23 | **Permissions & Capability (Ahalera)** — `dezaket`/`naiteke` vs periphrastic `ahal izan` | **Etor naiteke**. / Hori **esan dezaket**. / **Ezin dut** etorri. | §2/§3, VC §5 | pending |
| 24 | **Conditionals (Baldintza & Ondorioa)** — `ba-` protasis + `-ke` apodosis | Dirua **banu**, hori **erosiko nuke**. | §2/§3 | pending |

#### Stage 10: Social Registers & Native Integration

| Unit | Focus | Payload | Ref | Status |
|---|---|---|---|---|
| 25 | **Command & Subjunctive (Agintera, Subjuntiboa)** | **Etorri!** / **Esan iezadazu**. / Nahi dut **etor dadin**. | §9/§16 | pending — distractor-floor fix needed |
| **26** | **The Intimate Register (`hi` + Hitanoa) — STAGED** | see 26·a–d | §10 | ⚠️ restructured |
| 26·a | **Meet `hi`** (no allocutivity) | **Hi** ikaslea **haiz**. / **Hago** lasai. / **Hator** hona. / **Hik** badakik? | §3/§6 | new stage |
| 26·b | **Toka (masculine allocutive)** | Lanean **dik**. / Etorri **duk**. / Ez **nauk** ondo. | §10 | new stage |
| 26·c | **Noka (feminine allocutive)** — taught as `-k`→`-n` transform | Lanean **din**. / Etorri **dun**. / Ez **naun** ondo. | §10 | new stage |
| 26·d | **Recombine + when *not* to use it** | mixed toka/noka; banned in subordinates / clashes w/ `-ke-` moods | §10, LD 2026-06-11 | new stage |
| 27 | **Passive & Reading Real Text** — non-finite, nor-shift (`ireki dut` → `ireki da`) | recognition-oriented comprehension | §14/§15 | pending — new `reading` kind |

**Unit 26 — enumerated extra-practice lessons** (audit §1.4):

1. **26·a·L1 — `hi` subject recognition** across known `nor`/`nor-nork` tables.
2. **26·b·L1 — Toka on 3rd-person statements**: `du`→`dik`, `da`→`duk`,
   single gender; distractor = neutral `du`/`da` (register-leak trap).
3. **26·c·L1 — Noka transform drill**: present each toka form, produce its noka
   mirror; distractor = the toka form (gender trap).
4. **26·d·L1 — Mixed register switch**: choose toka/noka by stated addressee
   gender, and *suppress* allocutivity in a subordinate clause (the "when not
   to" rule).

### Phase VI — Making Things Happen (Causatives)

Persons: full 6-person grid + `hi` (since Unit 26). The causative is a
*morphological operation* recombining everything prior, placed last so every
piece it recombines already exists.

#### Stage 11: The Causative Suffix (`-arazi`/`-erazi`)

| Unit | Focus | Payload | Ref | Status |
|---|---|---|---|---|
| 28 | **Making Someone Do It** — `-arazi` on intransitives (`nor`→`nor-nork`) | Ekaitzak mendizaleak **itzularazi zituen**. / Musikak umeak **dantzarazi ditu**. | VC §6 | pending |
| 29 | **Making Someone Do Something to Someone** — `-arazi` on transitives (`nor-nork`→`nor-nori-nork`) | Amonak umeei babarrunak **janarazi zizkien**. / Irakasleak ikasleei hori **idatzarazi die**. | VC §6 | pending |

**Unit 28 — enumerated extra-practice** (first valency-*increasing* derivation —
a new morphological operation, original-flagged hard):

1. **28·L1 — Spot the valency shift (recognition)**: pairs `nor` base vs
   `nor-nork` causative (`itzuli ziren` vs `itzularazi zituen`); learner picks
   the causative. Distractor = the non-causative auxiliary (the §2 valency trap).
2. **28·L2 — Produce the causer**: given the base event, produce the
   causativized auxiliary across persons.
3. **28·L3 — Causative across tense**: present/past/future of one causativized
   verb (the aux just inflects).

**Unit 29 — enumerated extra-practice** (extends causative to `nor-nori-nork` —
"steepest jump" character, two extra like Unit 21):

1. **29·L1 — The new NORI slot**: show how the original `nork` becomes `nori`
   (`umeek jan` → `umeei janarazi`); recognition.
2. **29·L2 — Fix NORI, vary NORK** then **29·L3 — object number** (`die` vs
   `dizkie`) — same axis-isolation discipline as Unit 21.

#### 🛡️ Refresh Gate D — The Causative Recombination

| Unit | Focus | Constraint | Notes |
|---|---|---|---|
| 30 | **REFRESH — Causatives Across Tenses & Moods** | zero new verbs; score-gated | Recombines Units 28–29's `-arazi` with future (14–15), conditional (24), imperative (25): makes/made/will make/would make/make-them-do-X. |

---

## 4. Architectural Resolutions (pending / sourcing items closed)

Finalized linguistic-data solutions for everything the original left `pending`
or "needs sourcing." Each is written to be directly transcribable into `VERBS`.

### 4.1 `ahaztu` — the Unit 20 NOR-NORI paradigm (resolved)

`ahaztu` ("to forget", lit. "to slip from one's mind") is a regular NOR-NORI
psych-verb: it rides **`izan`'s dative auxiliary** (`CONJUGATIONS.md` §4), like
`gustatu`/`iruditu`. The forgotten thing is **NOR** (fixed `hura` for the
drilled lesson, exactly like `ukan`'s `object: 'hura'`); the forgetter is
**NORI** (the varied axis). `agreement: ['nor','nori']`, `object: 'hura'`,
`type: 'periphrastic'`.

**Drilled grid — `person` = NORI ("to whom"), NOR fixed `hura`:**

| `person` (NORI) | Present | Past | Gloss |
|---|---|---|---|
| ni | `ahaztu zait` | `ahaztu zitzaidan` | I forgot it |
| zu | `ahaztu zaizu` | `ahaztu zitzaizun` | you forgot it |
| hura | `ahaztu zaio` | `ahaztu zitzaion` | he/she forgot it |
| gu | `ahaztu zaigu` | `ahaztu zitzaigun` | we forgot it |
| zuek | `ahaztu zaizue` | `ahaztu zitzaizuen` | you-all forgot it |
| haiek | `ahaztu zaie` | `ahaztu zitzaien` | they forgot it |

**Distractor fodder (author but don't drill):** the **plural-NOR** column
(`ahaztu zaizkit`/`zaizkizu`/`zaizkio`/`zaizkigu`/`zaizkizue`/`zaizkie`, "I/you/…
forgot *them*") supplies the §2 "number" distractor slot, and is itself a real
sentence (`Giltzak ahaztu zaizkit` = "I forgot the keys"). This makes "number
confusion vs. dative-person confusion" diagnostically separable.

`sentences`/`pronounSentences` reuse the `gustatu` frames with dative-declined
pronouns (`niri`/`zuri`/`hari`/`guri`/`zuei`/`haiei`). No engine change — Tier 1
(`EXERCISE_ENGINE.md`).

### 4.2 `esan`/`eman` — Unit 21 ditransitive (resolved, axis-fixed)

Per `CONJUGATIONS.md` §5, these are 2D (NORK × NORI) grids. The
**deployment-ready** path (avoiding the Tier-3 2D-table engine work) fixes one
axis per lesson, per audit §1.5 and the enumerated Unit 21 lessons:

- **21·L1 lesson data** — fix **NORI = `hari`** ("to him"), `person` = NORK:
  `diot`/`diok`-`n`/`dio`/`diogu`/`diozu(e)`/`diote`. Add `recipient: 'hura'`
  metadata alongside the existing `object` field.
- **21·L2 lesson data** — fix **NORK = `nik`** ("I"), `person` = NORI:
  `dizut`/`diot`/`diogu`?→`diot`/`diet` (NORI ∈ zu/hura/haiek; `niri`/`guri`
  are `*(refl.)*`). Add `agent: 'ni'` metadata.
- **Object number** (21·L3): the `-zki-` infix forms (`dizkizut`/`dizkiot`…)
  supply the number-distractor slot and a real "give *them*" reading.

If/when the richer 2D drilling is wanted, `EXERCISE_ENGINE.md` Tier-3 option (b)
(`conjugations[tense] = { [nork]: { [nori]: form } }`) is the upgrade path; the
axis-fixed lessons above are forward-compatible (they're slices of that grid).

### 4.3 `-arazi` / `-erazi` — phonetic conditioning for Phase VI (resolved)

The original flags the `-arazi`/`-erazi` alternation as "needs sourcing." Resolution:

**Batua standard (what the app teaches): `-arazi`, universally, on the verbal
radical.** Euskaltzaindia's standardization settled the historical variation
(`-arazi` / `-erazi` / `-erazo` / `-arazo` / `-azo`, which differed by author,
dialect, and period) onto a single recommended form, **`-arazi`**, attached to
the *aditzoina* (bare radical = participle minus `-tu`/`-i`/`-n`, with
consonant restored). So:

| Base | Radical | Causative | Note |
|---|---|---|---|
| jan | jan | **jan**arazi | radical-final `-n` retained |
| edan | edan | **edan**arazi | |
| ikusi | ikus | **ikus**arazi | |
| etorri | etor | **etorr**arazi | `-r` → `-rr-` before the vowel-initial suffix |
| idatzi | idatz | **idatz**arazi | |
| sinetsi | sinets | **sinets**arazi | |
| itzuli | itzul | **itzul**arazi | |
| joan | joan | **joan**arazi | |

**Junction rules (the only "phonetic conditioning" that remains live in Batua):**

1. **Radical-final `-r` doubles to `-rr-`** before the vowel-initial `-arazi`
   (`etor` → `etorrarazi`), the regular Basque intervocalic-tap/trill contrast.
2. **The suffix-initial `/a/` is stable** — it does *not* assimilate to or elide
   against the radical's final vowel; a radical-final vowel simply abuts it
   (no `-arazi` → `-razi` reduction in the standard).
3. **No voicing/aspiration changes** at the seam (unlike the `-ko`/`-go` future,
   whose `/k/` voices after `-n`; `-arazi` has no such alternation in Batua).

**`-erazi` as recognized variant (recognition-only, late Phase V/VI reading):**
the `-erazi` alternant is genuine in the central/eastern literary tradition
(`ikuserazi`, `janerazi`) and worth a single recognition note — but **not
drilled for production**, to avoid teaching two forms where the standard offers
one. Treat it the way Unit 27 treats other non-standard reading material:
recognize it, don't produce it.

**Data shape:** zero new shapes (VC §6). A causativized verb is a
`type: 'periphrastic'` entry whose fixed participle is `[radical]+arazi` and
whose drilled auxiliary is `ukan` (for the `nor-nork` result, Unit 28) or
`ukan`'s ditransitive `*-io-` paradigm (for `nor-nori-nork`, Unit 29). Tier 1
of `EXERCISE_ENGINE.md` applies unchanged.

### 4.4 Score-gating predicate (resolved — Units 17, 22, 30, Phase-V wrap)

The original left threshold and retry behavior open. Resolution, requiring only
a predicate change in `getUnlockedLessonIds` (no stored-shape change —
`bestStars` is already recorded):

- **Flag:** gate lessons carry `gate: true` (already in `JOURNEY`).
- **Threshold:** the next lesson unlocks when the gate's `bestStars >= 2`
  (≥80%, per `computeStars`). 2 stars, not 3, so a strong-but-imperfect pass
  proceeds; perfectionism isn't required to advance.
- **Retry behavior:** on a sub-threshold attempt the next lesson **stays
  locked** and the gate is replayable, with an explicit
  "needs 80% to continue" state — a soft wall (retry freely), not a hard fail
  (no lockout, no lost progress).

### 4.5 `behar` (Unit 16) and modal particles (resolved)

`behar`/`nahi` are invariant particles + `ukan` (VC §5) — zero new conjugation
data, identical shape to Unit 2's `nahi`. `behar`'s teaching value is the
auxiliary-selection "aha": it takes `ukan` even on intransitive `joan`
(`joan behar dut`, not `†joan behar naiz`). `ari` takes `izan`; `ahal`/`ezin`
(Unit 23) take *whichever* aux the lexical verb already uses — the trio
`behar`/`ari` (fixed aux) vs `ahal` (pass-through) is the complete "which
auxiliary?" lesson. No `future` table for `ari` (per LD 2026-06-12).

---

## 5. Adoption order (cheapest-first, dependency-aware)

1. **Morphophonological pacing schedule** (§3 intro) + **Pronoun Fading tags** —
   pure content-ordering; adopt immediately, no code.
2. **Unit 5 split (5·i/5·ii)** — lesson-level reorganization of existing data;
   no new `VERBS`, no engine change.
3. **Score-gating predicate (§4.4)** — small `getUnlockedLessonIds` change;
   unblocks Gate B.
4. **`ahaztu` data (§4.1)** + **Unit 20 extra lessons** — Tier 1 data; unblocks
   the dative shift.
5. **Unit 21 axis-fixed lessons (§4.2)** — Tier 1 data + `recipient`/`agent`
   metadata; the ditransitive without 2D-engine work.
6. **Distractor-floor fix** — unblocks Unit 25 imperative and the small
   allocutive tables.
7. **Unit 26 staging (26·a–d)** — the highest-value Phase-V restructure;
   needs the allocutive data shape decision (`EXERCISE_ENGINE.md` Tier 3).
8. **`-arazi` data (§4.3)** + Phase VI — last, by design.

> Anything adopted from this blueprint should be mirrored back into the
> implemented `docs/LEARNING_JOURNEY.md`, `journey.js`, `LESSONS`, and `VERBS`
> together (per `CLAUDE.md`'s "files to keep in sync"), with a dated
> `docs/DECISIONS.md` entry — these proposals are not live until that happens.
