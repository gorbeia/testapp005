# Aditzak — Learning Journey

A curriculum design for the full Aditzak verb-conjugation course: the order in
which **units** (thematic chunks built around one or a few verbs/constructions)
and the **lessons** within them are introduced. This is content design only —
no exercises, no `VERBS` data, no code. It's meant as the roadmap
`VERB_COVERAGE.md` asked for ("a checklist for picking the next verb/tense"),
turned into an actual sequence with a pedagogical rationale, and grounded in
the grammar already written up in `CONJUGATIONS.md`.

## Principles

- **Most useful first.** Frequency and conversational payoff outrank
  grammatical "niceness" or how easy a paradigm is to model. Where this
  disagrees with `VERB_COVERAGE.md`'s *implementation-effort* ordering (e.g.
  `jario` vs. `gustatu` for `nor-nori`), usefulness wins — noted inline.
- **Reuse before new paradigms.** Constructions that cost zero new
  conjugation tables (`nahi`/`behar`/`ari`/`ahal`/`ezin`, future tense) are
  pulled forward, right after the verbs whose tables they reuse.
- **One new grammatical idea at a time.** Each stage introduces at most one
  structural novelty (a new agreement pattern, a new tense/mood, a new
  register) and lets the learner practice it across a small set of verbs
  before the next novelty arrives.
- **Maps onto the existing lesson model.** A "unit" below corresponds to one
  verb (or small invariant-construction group) gaining one or more tenses in
  `VERBS`. `LESSONS`'s existing auto-derivation already turns that into the
  right practice lessons (one per verb×tense) plus a review lesson once a verb
  has 2+ tenses, and the existing mixed-review mechanism still caps each
  stage. No changes to that derivation logic are assumed — the journey is a
  *content* sequence, expressed as "what order do entries get added to
  `VERBS`."
- **Linear unlocking stays linear.** `getUnlockedLessonIds` requires the
  previous lesson to have an attempt before the next unlocks, so the order
  below *is* the literal play order — there's no branching/parallel-track
  design here.

## At a glance

| Stage | Theme | New agreement/mood | Units | Status |
|---|---|---|---|---|
| 1 | Foundations — to be / to have | `nor`, `nor-nork` · present, past | `izan`, `ukan`, mixed review | ✅ done |
| 2 | Want, must, doing, can | (reuses `izan`/`ukan` present) | `nahi`, `behar`, `ari`, `ahal`/`ezin`, review | 🔲 |
| 3 | The other "to be" | `nor` · present, past | `egon`, izan-vs-egon review | 🔲 |
| 4 | Going, coming, moving about | `nor` · present, past | `joan`, `etorri`, `ibili`, motion review | 🔲 |
| 5 | Talking about the future | Geroa (future), all agreements so far | future-tense sweep, review | 🔲 |
| 6 | Everyday handling verbs | `nor-nork` · present, past, future | `eduki`, `ekarri`, `eraman`, `erabili`, `jakin`, review | 🔲 |
| 7 | "I'm at it" — unergative nork-only | `nork`-only · present, past | `iraun`, `jardun`, `irudi`, review | 🔲 |
| 8 | Most verbs work differently | periphrastic (participle+auxiliary), `nor-nork` | `ikusi`, `entzun`, `hitz egin`, review | 🔲 |
| 9 | "It pleases me" | `nor-nori` (synthetic + periphrastic) | `gustatu`, `iruditu`, `jario`, review | 🔲 |
| 10 | "I tell you / give it to you" | `nor-nori-nork` (ditransitive) | `esan`, `eman`, review | 🔲 |
| 11 | A fuller "you": `zu` | `zu` as a 7th person, all verbs so far | zu retrofit (3 units) | 🔲 |
| 12 | "If... / I would..." | Baldintza, Ondorioa | conditional (3 units) | 🔲 |
| 13 | "I can..." | Ahalera (potential) | potential (3 units) | 🔲 |
| 14 | Wishes & commands | Subjuntiboa, Agintera | subjunctive/imperative (2 units) | 🔲 |
| 15 | Speaking casually | Allocutive (hitanoa) | hitanoa (2 units) | 🔲 |
| 16 | Reading fluently | non-finite forms, passive/nor-shift | recognition (2 units) | 🔲 |
| 17 | Regional flavor | dialect variants, `etzan` | dialects (2 units) | 🔲 |

That's **~50 units** across 17 stages — comfortably "dozens," and each stage
is small enough that a learner sees concrete payoff (a new thing they can
*say*) every few lessons rather than grinding a single paradigm to
completion before anything new happens.

---

## Stage 1 — Foundations: to be, to have *(✅ already built)*

The two auxiliaries everything else leans on. `izan` (`nor`) gives the
absolutive person endings; `ukan` (`nor-nork`) gives the ergative ones. Every
later periphrastic verb, every modal construction, and the entire ditransitive
system (§5) is `izan`/`ukan` wearing different participles — so these two
verbs' present and past tables are the alphabet for the rest of the course.

| Unit | Verb(s) | Tenses | Lessons generated | Ref |
|---|---|---|---|---|
| 1 | `izan` — "to be" | present, past | `izan-present`, `izan-past`, `izan-review` | §1 |
| 2 | `ukan` — "to have" | present, past | `ukan-present`, `ukan-past`, `ukan-review` | §3 |
| 3 | Mixed review | both | `mixed-review` | — |

---

## Stage 2 — Want, must, doing, can

The highest payoff-per-form-learned in the whole course, per `VERB_COVERAGE.md`
§5: **zero new conjugation tables**. Each of these is an invariant word placed
in front of a form the learner already knows from Stage 1. They unlock
"I want to...", "I have to...", "I'm doing...", and "I can/can't..." —
arguably the four most useful sentence openers in conversational Basque —
using only what's already in `VERBS`.

| Unit | Construction | Pattern | What's new | Ref |
|---|---|---|---|---|
| 4 | `nahi` + `ukan` — "I want (to)..." | `nahi dut/duk/du/dugu/duzue/dute` | `nahi` is invariant; `ukan`'s present table does all the work | §5 (coverage) |
| 5 | `behar` + `ukan` — "I have to / must..." | `behar dut/duk/du/...` | same `ukan` table, different invariant word — reinforces "construction head ≠ conjugated verb" | §5 (coverage) |
| 6 | `ari` + `izan` — "I'm doing... (right now)" | `ari naiz/haiz/da/gara/zarete/dira` | first time the *intransitive* `izan` table appears under a transitive-feeling gloss ("I'm reading") — sets up the next unit's contrast | §5 (coverage) |
| 7 | `ahal`/`ezin` — "I can / I can't..." | piggybacks on **whichever** auxiliary the main verb already uses | the payoff unit: `etorri ahal naiz` (izan) vs. `esan ahal dut` (ukan) — the construction itself doesn't fix an auxiliary, completing the "which auxiliary?" rule the previous three units set up | §5 (coverage) |
| 8 | Review — modal mix | all four | mixed review across `nahi`/`behar`/`ari`/`ahal`/`ezin`, both auxiliaries | — |

**Design note:** `ahal`/`ezin` is the unit that makes the other three
*teach* something rather than just being four similar-looking drills — keep
it last in the stage, not first, so the "aha" lands after the pattern it
breaks has been established.

---

## Stage 3 — The other "to be": `egon`

`egon` ("to be located / in a state") is `izan`'s near-twin and one of the
most common verbs in everyday Basque ("Nola zaude?" / "Ondo nago"). It's also
a prerequisite called out in `DECISIONS.md`/`VERB_COVERAGE.md` for writing
correct location/state example sentences for `izan` itself — so introducing it
early retroactively makes Stage 1's `izan` sentences easier to get right too.

| Unit | Verb | Tenses | Lessons | What's new | Ref |
|---|---|---|---|---|---|
| 9 | `egon` | present, past | `egon-present`, `egon-past`, `egon-review` | a second `nor` paradigm — same agreement, new forms | §6 |
| 10 | Review — `izan` vs. `egon` | both | mixed review | the "ser vs. estar" moment: identity/permanent (`izan`) vs. location/state (`egon`), same person endings, different roots | — |

---

## Stage 4 — Going, coming, moving about

Three more `nor` verbs, chosen as a set because they're the core motion
vocabulary a learner needs almost immediately ("I'm going", "I'm coming",
"I walk/I'm doing fine") and because — per Stage 5 — their future-tense forms
("I will go/come") are some of the most natural future-tense examples to
build.

| Unit | Verb | Tenses | Lessons | Ref |
|---|---|---|---|---|
| 11 | `joan` — "to go" | present, past | `joan-present`, `joan-past`, `joan-review` | §6 |
| 12 | `etorri` — "to come" | present, past | `etorri-present`, `etorri-past`, `etorri-review` | §6 |
| 13 | `ibili` — "to walk around / be doing" | present, past | `ibili-present`, `ibili-past`, `ibili-review` | §6 |
| 14 | Review — motion verbs mixed | all three + `izan`/`egon` | mixed review | — |

---

## Stage 5 — Talking about the future (Geroa)

Per `CONJUGATIONS.md` §11 and `VERB_COVERAGE.md` §3a, the future is formed
periphrastically for *every* verb introduced so far — root + `-ko`/`-go` +
the **same** present-tense `izan`/`ukan`/`egon` auxiliary tables already
learned (e.g. `joango naiz`, `etorriko naiz`, `egongo naiz`, `izango naiz`,
`ukango/edukiko dut`). This stage costs almost no new *conjugation* data —
only the future participle for each verb already in the course — but unlocks
an enormous amount of conversational range ("I'll go tomorrow", "I'll be
there"), so it's pulled forward rather than left until after every verb is
covered.

| Unit | Verbs | What's new | Lessons | Ref |
|---|---|---|---|---|
| 15 | Future — `izan`/`egon`/`joan`/`etorri`/`ibili` | one new participle suffix per verb (`izango`, `egongo`, `joango`, `etorriko`, `ibiliko`) + the already-known `izan` present table as auxiliary | one practice lesson per verb (`<verb>-future`), interleaved into each verb's existing section | §11 |
| 16 | Future — `ukan` | `ukango`/participle + `ukan` present table | `ukan-future` | §11 |
| 17 | Review — future mixed | all of the above | mixed review across present/past/future for every verb so far | — |

**Design note:** because future reuses tables the learner already has 100%
correct, these lessons can lean harder on *production* (typing/choosing the
participle) than on the auxiliary, which should already feel automatic.

---

## Stage 6 — Everyday handling verbs (`nor-nork`)

The first wave of "real" transitive verbs beyond `ukan` itself — the verbs a
beginner reaches for constantly: have/hold, bring, carry, use, know (a fact).
All five are fully regular `nor-nork` synthetic paradigms already documented
in §7, sharing `ukan`'s ergative suffix family (`-t`/`-k`/`-∅`/`-gu`/`-zu`/
`-zue`/`-te`), so the *agreement pattern* isn't new — only the roots and, for
`jakin`, the fact that "to know" doesn't need an auxiliary at all.

| Unit | Verb | Tenses | Lessons | Ref |
|---|---|---|---|---|
| 18 | `eduki` — "to have/hold (physically)" | present, past, future | `eduki-present`, `eduki-past`, `eduki-future`, `eduki-review` | §7 |
| 19 | `ekarri` — "to bring" | present, past, future | same pattern | §7 |
| 20 | `eraman` — "to carry/take" | present, past, future | same pattern | §7 |
| 21 | `erabili` — "to use" | present, past, future | same pattern | §7 |
| 22 | `jakin` — "to know (a fact)" | present, past, future | same pattern | §7 |
| 23 | Review — handling verbs mixed | all five + `ukan` | mixed review | — |

**Design note:** from this stage on, every new verb gets present + past +
future together (rather than future as a separate later pass) — the future
participle costs one extra fact per verb at this point, and folding it in
keeps each verb's "verb section" in the UI feeling complete rather than
perpetually "to be continued."

---

## Stage 7 — "I'm at it": unergative nork-only verbs

A genuinely new (if subtle) idea, and one `DECISIONS.md` spent real effort
getting consistent: `iraun`, `jardun`, and `irudi` *look* like `nor` verbs —
one argument, person endings on the verb itself — but the endings are actually
the **`nork`** (ergative) suffix family, not the absolutive one. "Hik dirauk"
is "you (m.) last/endure", with the `-k` belonging to the same family as
`ukan`'s `duk`. This stage exists specifically so a learner internalizes that
*synthetic morphology doesn't telegraph a verb's transitivity* — a recurring
theme `CONJUGATIONS.md` flags for exactly these three verbs.

| Unit | Verb | Tenses | What's new | Ref |
|---|---|---|---|---|
| 24 | `iraun` — "to last/endure" | present, past | the unergative-nork-only pattern, introduced via the most semantically obvious example ("the film lasted three hours") | §8 |
| 25 | `jardun` — "to be engaged in / at it" | present, past | same suffix family, different stem — and a nice callback to Stage 2's `ari` ("ari naiz" / "dihardut" express the same idea two different ways) | §6 |
| 26 | `irudi` — "to seem / give the impression" | present, past | same suffix family again — and an explicit *contrast* with `iruditu` (Stage 9), a false-friend pair that means something different and uses a different agreement pattern entirely | §8 |
| 27 | Review — unergative mixed | all three | mixed review, plus a couple of "spot the `nork` suffix" style questions reusing forms from `ukan`/the Stage 6 verbs | — |

---

## Stage 8 — Most verbs actually work like this: periphrastic verbs

Up to now every verb has been synthetic (conjugated directly). But the
*majority* of Basque verbs are periphrastic: a non-finite participle that
never changes, plus `izan` or `ukan` doing 100% of the agreement work — which
the learner already knows cold by this point. This stage's whole job is the
"oh, *that's* how it works" moment, using the two simplest, most common
examples plus one compound verb built from `egin` (Stage 6's "to know" cousin
for actions: "hitz egin" = "to speak", lit. "to do word").

| Unit | Verb | Pattern | Tenses | What's new | Ref |
|---|---|---|---|---|---|
| 28 | `ikusi` — "to see" | `ikusten/ikusi` + `ukan` | present, past, future | the participle/auxiliary split itself — `ukan`'s table is *already known*, only the invariant participle is new | §7 |
| 29 | `entzun` — "to hear/listen" | `entzuten/entzun` + `ukan` | present, past, future | reinforcement — different participle shape (`-n`-final), same structure | §7 |
| 30 | `hitz egin` — "to speak" | `hitz egiten/hitz egin` + `ukan` | present, past, future | a *compound* periphrastic verb (noun + `egin`) — the productive pattern behind dozens of everyday verbs (`lan egin`, `negar egin`, ...) | §6 (`mintzatu`) |
| 31 | Review — periphrastic mixed | all three | — | side-by-side with a Stage 6 synthetic verb, to drill "same auxiliary table, different verb shape" | — |

---

## Stage 9 — "It pleases me": NOR-NORI psych verbs

The dative (`nori`) agreement pattern, via the constructions a learner will
*actually* reach for: `gustatu` ("to like" — "Liburua gustatzen zait" = "I
like the book", lit. "the book pleases to-me") and `iruditu` ("to seem [to
me]"). Both are periphrastic, riding `izan`'s NOR-NORI auxiliary paradigm
(§4 — `zait`/`zaio`/`natzaio`/...). `jario` ("to flow/ooze") is included as a
*synthetic* `nor-nori` curiosity — useful for showing the dative markers
without an auxiliary — but kept short, since `CONJUGATIONS.md` itself flags it
as low-frequency ("oso erabilpen mugatua").

This is a deliberate **reorder vs. `VERB_COVERAGE.md`'s suggested sequence**,
which leads with `jario` as the lower-friction *implementation*. For the
*learner*, "gustatzen zait" is one of the most-used sentence patterns in the
language and `jario` is genuinely rare — usefulness wins per this document's
principles, so `gustatu`/`iruditu` lead and `jario` is the short coda.

| Unit | Verb | Pattern | Tenses | What's new | Ref |
|---|---|---|---|---|---|
| 32 | `gustatu` — "to like" | `gustatzen` + `izan`'s NOR-NORI table | present, past | the dative person markers (`zait`/`zaio`/`zaigu`/...) — a brand-new conjugation table, but built on `izan`, the very first verb learned | §4 |
| 33 | `iruditu` — "to seem (to me)" | `iruditzen` + `izan`'s NOR-NORI table | present, past | same table, different participle — consolidation, plus sets up the `irudi`/`iruditu` false-friend contrast from Stage 7 | §4 |
| 34 | `jario` — "to flow/ooze" *(short, optional-feeling)* | synthetic, `nor` fixed, varies by `nori` | present, past | the *same* dative markers as units 32–33, but synthetic (no auxiliary) — "you've already learned this paradigm, here's its native-verb form" | §8 |
| 35 | Review — NOR-NORI mixed | all three | — | — | — |

---

## Stage 10 — "I tell you / I give it to you": ditransitive verbs

The fullest expression of the agreement system: `nor` + `nori` + `nork` all
marked at once. `esan` ("to say") is the natural lead — everyday, synthetic,
and (per `DECISIONS.md`'s most recent entries) its `dio`/`diot`/`diozu`...
forms are *exactly* the `hari`/`NOR`=hura row of §5's already-fully-tabulated
ditransitive grid, so this stage has unusually complete reference material to
draw on. `eman` ("to give") follows as the periphrastic route to the same
agreement pattern, and is the construction most learners are actually trying
to reach ("I gave it to him/her").

| Unit | Verb | Pattern | Tenses | What's new | Ref |
|---|---|---|---|---|---|
| 36 | `esan` — "to say (to someone)" | synthetic ditransitive (`diot`/`diozu`/`dio`/...) | present, past | the third agreement marker (`nori`) layered onto the already-familiar `nork` suffixes — "diozu" = `di-` (nori=hari) + `-zu` (nork=zuk), both pieces individually familiar | §5 / §8 |
| 37 | `eman` — "to give" | `ematen/eman` + `ukan`'s ditransitive table | present, past | periphrastic route to the same table — reuses unit 36's conjugations under a new participle | §5 (coverage) |
| 38 | Review — ditransitive mixed | both | — | the most demanding checkpoint so far: three-way agreement, two verbs, two tenses | — |

---

## Stage 11 — A fuller "you": `zu`

`VERB_COVERAGE.md` §1 flags this as a real gap, not a stylistic simplification:
`zu` is the everyday neutral "you" in spoken/written Batua, and several
sourced tables (`iraun`, `jario`) list it as a distinct person *alongside*
`hi`, with its own forms. Retrofitting it earlier would mean redoing every
verb's table as new tenses are added; doing it here — once a solid core of
verbs exists but before the mood/tense explosion of Stages 12–15 — is the
cheapest point in the curriculum to do it once and have it apply everywhere
after.

| Unit | Scope | What's new | Lessons | Ref |
|---|---|---|---|---|
| 39 | `zu` — `izan`/`ukan`/`egon` | the new person column for the three most-used verbs; explicit `hi`-vs-`zu` register contrast (familiar vs. neutral/formal) | one "meet `zu`" lesson per verb, reusing existing tenses with the new column | §3 (`NOR`=1st/2nd person grids), §12 |
| 40 | `zu` — motion & handling verbs | same column, `joan`/`etorri`/`ibili`/`eduki`/`ekarri`/`eraman`/`erabili`/`jakin` | one lesson per verb, or a combined "sweep" lesson | §7 |
| 41 | `zu` — dative/ditransitive verbs + review | `gustatu`/`iruditu`/`esan`/`eman` get their `zuri`/`zuek` rows (already tabulated in §5/§16.1); full mixed review across **everything** learned so far, now with 7 persons | — | §5, §16.1 |

---

## Stage 12 — "If... / I would..." (Baldintza & Ondorioa)

The conditional system: "if I were/had..." (Baldintza, the protasis) and
"I would (be/have)..." (Ondorioa, the apodosis). Both are fully tabulated for
`izan`/`ukan` in §2/§3 and for the dative/ditransitive systems in §4/§5, so the
grammar groundwork is already done — this stage is about introducing the
*mood* (hypothetical framing) rather than new vocabulary.

| Unit | Scope | What's new | Ref |
|---|---|---|---|---|
| 42 | Baldintza & Ondorioa — `izan`/`ukan` | `banintz`/`banu` ("if I were/had"), `nintzateke`/`nuke` ("I would be/have") | §2, §3 |
| 43 | Baldintza & Ondorioa — `egon` + handling verbs | same two moods, more roots (`banengo`, `banu` family extended to `eduki`/`ekarri`/etc.) | §3 |
| 44 | Review — conditional mixed, plus dative/ditransitive (`gustatzaidake`-type forms) | ties the two moods together across the broadest verb set so far | §4, §5 |

---

## Stage 13 — "I can..." (Ahalera)

The potential mood — "I can/could (verb)". A *closed set*: only verbs with
full synthetic conjugations (`izan`, `ukan`/`eduki`, `egon`, `ibili`, `joan`,
`etorri`, `jakin`, ...) get a synthetic `-ke-` potential; everything else
(including every periphrastic verb from Stages 8–10) expresses "can" via
Stage 2's `ahal`/`ezin` instead. This stage's first job is teaching that
boundary explicitly, not just the new forms.

| Unit | Scope | What's new | Ref |
|---|---|---|---|---|
| 45 | Ahalera Orainaldia (present potential) — `izan`/`ukan`/`egon`/motion verbs | `naiteke`, `dezaket`, `nagoke`, ... — and the explicit "this verb has a synthetic `-ke` form, that one doesn't (use `ahal`)" rule | §2, §3 |
| 46 | Ahalera Lehenaldia/Alegiazkoa (past/hypothetical potential) | `nintekeen`/`nezakeen` family; ditransitive `diezaioke`-type forms for `esan`/`eman` (§5) | §3, §5 |
| 47 | Review — potential mixed, including the synthetic-vs-`ahal` boundary | a "which verbs get `-ke-`?" sorting-style review | — |

---

## Stage 14 — Wishes & commands (Subjuntiboa, Agintera)

Subjunctive ("...so that I may...") appears mostly in subordinate clauses;
imperative is the one mood that's inherently second-person-only (`hi`/`zu`/
`zuek`), so it can't fill the usual six/seven-person grid and needs its own
exercise shape (flagged already in `VERB_COVERAGE.md` §3e). §16 already
consolidates both moods across `nor`/`nor-nori`/`nor-nork`/`nor-nori-nork`.

| Unit | Scope | What's new | Ref |
|---|---|---|---|---|
| 48 | Subjuntiboa — `izan`/`ukan`/`egon` + dative/ditransitive (`hari`/`haiei` rows) | the `-n`-family subordinate-clause endings, framed via "Nahi dut..." (wants from Stage 2) | §16.1 |
| 49 | Agintera — synthetic imperatives + `nor-nork`/ditransitive imperatives | a **new lesson shape**: only `hi`/`zu`/`zuek` rows, framed as direct commands ("Etorri hadi!", "Esan iezadazu!") | §9, §16.2 |

---

## Stage 15 — Speaking casually: the allocutive register (hitanoa)

`hi`-addressed speech carries *additional* agreement with the addressee
(toka `-k` for a male addressee, noka `-n` for a female one), independent of
the sentence's actual subject — "Etorri duk"/"Etorri dun" both just mean
"(s)he came." `VERB_COVERAGE.md` calls this "the genuine ceiling of full
mastery" and explicitly fine to defer — it sits here as a late, optional-
feeling "now you're speaking like a local" capstone rather than a hard gate.

| Unit | Scope | What's new | Ref |
|---|---|---|---|---|
| 50 | Allocutive core forms — `izan`/`ukan` 3rd person | toka/noka `-k`/`-n` marking layered onto forms already known, with explicit "this isn't about who did it" framing | §10 |
| 51 | Allocutive — extended to motion/handling verbs + review | same marking, broader verb set; review contrasts plain `hi`-forms (Stage 1+) with their allocutive counterparts | §10 |

---

## Stage 16 — Reading fluently: non-finite forms & passive

Recognition-oriented, not production-oriented — these sections of
`CONJUGATIONS.md` describe how the forms already learned get repurposed as
nouns/adjectives/adverbials, and how Basque expresses passive/impersonal
meaning by *dropping* `nork` and swapping `ukan`→`izan` on the same
participle. Framed as "things you'll see in real text," likely a different
exercise style (e.g. matching/translation rather than fill-in-the-conjugation).

| Unit | Scope | What's new | Ref |
|---|---|---|---|---|
| 52 | Non-finite forms — verbal nouns (`-tea`/`-tzen`), participles as adjectives (`-tako`), modal adverbials (`-z`) | recognizing familiar stems in noun/adjective roles | §14 |
| 53 | Passive & impersonal ("nor-shift") | `Nik atea ireki dut` → `Atea ireki da` — drop `nork`, swap `ukan`→`izan`, same participle; anticausative vs. impersonal reading | §15 |

---

## Stage 17 — Regional flavor: dialect variants & curiosities

The `dialectVariants` field (already anticipated in `CLAUDE.md`'s data shape)
gets its first real use: three Batua/regional pairs surfaced while researching
the rest of the course, plus `etzan` — a grammatically real but
actively-discouraged-by-native-teaching-materials `nor` verb, included as a
"recognize it, don't reach for it" closer.

| Unit | Scope | What's new | Ref |
|---|---|---|---|---|
| 54 | Western (Bizkaian) variants | `eraman`/`eroan`, `ukan`/`euki`-style forms — same meaning, different surface forms for verbs already mastered | §4c (coverage) |
| 55 | Northern (Lapurdian/Zuberoan) variants + `etzan` | `esan`/`erran`, `jarraitu`/`jarraiki`, `mintzatu`'s literary `mintzo + izan` paradigm; `etzan` as a "you'll see this in old texts, prefer `egon`/`izan`" curiosity | §4c (coverage), §6, §9 |

---

## Open questions for whoever implements this

- **Stage 11 (`zu`)** is the one structural change that touches *every* verb
  table added before it — worth confirming the `STORAGE_KEY` version bump
  (`v1`→`v2`, per `CLAUDE.md`) happens alongside it, since adding a 7th person
  changes `generateQuestions`'s distractor pool shape for every existing
  lesson.
- **Stage 14's imperative** needs its own exercise/question shape
  (`hi`/`zu`/`zuek` only) — flagged in `VERB_COVERAGE.md` §3e and worth
  resolving before this stage's content is built, not during.
- **Stage 16** (non-finite/passive) may not fit the multiple-choice
  "conjugate this" question format at all — may need a new `kind` (cf.
  `DECISIONS.md`'s `spot-error` precedent) before this stage can ship lessons
  rather than just being a reading list.
- Verbs flagged in `VERB_COVERAGE.md` but **not yet in `CONJUGATIONS.md`**
  (e.g. `egin` as a standalone verb, beyond the `hitz egin` compound in Stage
  8) aren't placed in this journey — they'd need a `CONJUGATIONS.md` pass
  first, per this repo's "verify before teaching" norm.
