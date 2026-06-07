# Basque verb conjugations — a reference

A single place to look up conjugation forms — both the ones already powering
Aditzak's lessons (verified against `VERBS` in `src/App.jsx`) and ones surfaced
while researching `VERB_COVERAGE.md` as candidates for verbs the app doesn't
model yet. Useful when deciding what to add to `VERBS` next, and as a sanity
check against the kind of mistake `DECISIONS.md` warns about — content that
*looks* like correct Basque but actually belongs to a different paradigm.

Persons follow the app's six-person model (`ni / hi / hura / gu / zuek /
haiek` — `zu` isn't modeled yet, see `VERB_COVERAGE.md` §1).

**Confidence key:**
- ✅ — verified, copied straight from `VERBS` in `src/App.jsx`; exactly what
  learners are quizzed on today
- 📖 — standard Batua textbook paradigm, not yet in the app; before adding it
  to `VERBS`, cross-check it against a grammar reference (the project has
  twice had to correct "looks right but isn't" guesses — see `DECISIONS.md`
  and `VERB_COVERAGE.md`'s `irudi`/`etzan` corrections)
- 🔍 — partial forms only, as they surfaced while researching
  `VERB_COVERAGE.md`; the full paradigm isn't confirmed, so it's quoted
  verbatim rather than filled in

## 1. `izan` — "to be" · nor · ✅

| Person | Present (oraina) | Past (lehena) |
|---|---|---|
| ni | naiz | nintzen |
| hi | haiz | hintzen |
| hura | da | zen |
| gu | gara | ginen |
| zuek | zarete | zineten |
| haiek | dira | ziren |

## 2. `ukan` — "to have" (the `du` auxiliary) · nor-nork · ✅

Shown in its citation paradigm — fixed 3rd-person-singular absolutive object
("it/him/her"), as `VERBS` itself notes (`object: 'hura'`).

| Person | Present (oraina) | Past (lehena) |
|---|---|---|
| ni | dut | nuen |
| hi | duk | huen |
| hura | du | zuen |
| gu | dugu | genuen |
| zuek | duzue | zenuten |
| haiek | dute | zuten |

## 3. The other classic synthetic `nor` verbs · 📖

Together with `izan`, these four are the synthetic `nor` verbs every Batua
course introduces early — `CLAUDE.md` and `VERB_COVERAGE.md` both name them as
the natural next additions. Their `ni`-forms are exactly the ones
`VERB_COVERAGE.md` §3a already lists as the present/past indicative examples
("naiz, dut, **nago, nabil, noa, nator**" / "nintzen, nuen, **nengoen,
nenbilen**"), which is some independent confirmation for at least that column.

### `egon` — "to be (located / in a state)"

| Person | Present | Past |
|---|---|---|
| ni | nago | nengoen |
| hi | hago | hengoen |
| hura | dago | zegoen |
| gu | gaude | geunden |
| zuek | zaudete | zeundeten |
| haiek | daude | zeuden |

### `joan` — "to go"

| Person | Present | Past |
|---|---|---|
| ni | noa | nindoan |
| hi | hoa | hindoan |
| hura | doa | zihoan |
| gu | goaz | gindoazen |
| zuek | zoazte | zindoazten |
| haiek | doaz | zihoazen |

### `etorri` — "to come"

| Person | Present | Past |
|---|---|---|
| ni | nator | nentorren |
| hi | hator | hentorren |
| hura | dator | zetorren |
| gu | gatoz | gentozen |
| zuek | zatozte | zentozten |
| haiek | datoz | zetozen |

### `ibili` — "to walk around / be (in the process of) doing"

| Person | Present | Past |
|---|---|---|
| ni | nabil | nenbilen |
| hi | habil | henbilen |
| hura | dabil | zebilen |
| gu | gabiltza | genbiltzan |
| zuek | zabiltzate | zenbiltzaten |
| haiek | dabiltza | zebiltzan |

## 4. Other synthetic `nor-nork` verbs

### `iraun` — "to last / endure" · 🔍 (present only — sourced from `VERB_COVERAGE.md`)

`VERB_COVERAGE.md` quotes this paradigm directly from a teaching source —
including the `zu` row the app doesn't model — as evidence that `iraun`
"follows the *exact* `root + standard NORK suffix` shape `ukan`/`ekarri`/
`eraman`/`eduki` all use":

| Person | Present |
|---|---|
| ni | diraut |
| hi | dirauk / diraun *(masc./fem. addressee — see allocutive note in §1 of `VERB_COVERAGE.md`)* |
| hura | dirau |
| gu | diraugu |
| zu | dirauzu *(quoted alongside `hi` as a genuinely separate person)* |
| zuek | dirauzue |
| haiek | diraute |

Past forms aren't documented anywhere in the project yet — left blank rather
than guessed.

### `eduki`, `jakin`, `egin`, `ekarri`, `eraman`, `erabili` · — no forms documented yet

`VERB_COVERAGE.md` §4a lists these as `nor-nork` candidates worth adding, but
no actual conjugated forms for them have been sourced and written down in this
project. Rather than guess at roots from memory (exactly the trap
`DECISIONS.md` and `VERB_COVERAGE.md`'s `irudi`/`etzan` corrections describe),
they're left out of this reference until someone looks them up properly.

## 5. Toward `nor-nori` and `nor-nori-nork` — forms documented so far · 🔍

These two agreement patterns aren't in the app yet (`VERB_COVERAGE.md` §2).
The fragments below are quoted as-is from that research — not assembled into
full tables, since the full paradigms aren't confirmed.

### `jario` — "to flow / ooze" (nor-nori; defective, effectively fixed `nor`)

- Present, by `nori` person: `dari(zki)t/k/o/gu/zu/zue/e` → **dariot** (to me),
  **dario** (to him/her), **darizkio** (to him/her, plural object)…
- Past (standard Batua): **zeridan / zerion / zerigun**…
- Past (Bizkaian variant — not a separate verb, `jario`'s own past stem):
  **darie** (present-ish) / **erion**

### `esan` — "to say" (nor-nork, with nor-nori-nork ditransitive use)

- Ditransitive forms, on the same defective `*-io-` root `ukan` borrows for
  its own ditransitive auxiliary use: **dio / diot / diozu**…

### `irudi` — "to seem / give the impression of" (nor-nork — *not* `iruditu`'s nor-nori)

- **dirudi**, **dirudizu**… A false-friend pairing flagged in
  `VERB_COVERAGE.md`: don't confuse `iruditu` ("iruditzen zait" = "it seems to
  me", subjective opinion, nor-nori) with `irudi` ("dirudizu" = "you give the
  impression", external appearance, nor-nork). They drifted apart in both
  meaning *and* agreement.

## 6. Beyond present / past

The app currently covers the indicative present and past only. Per
`VERB_COVERAGE.md` §3, here's what the rest of the paradigm space looks like —
sketched, not tabulated, since none of it is in the app or sourced in detail
yet:

- **Future (geroa)** — periphrastic for these verbs: root + `-ko`/`-go` +
  auxiliary, e.g. *"etorriko naiz"* ("I will come"). Reuses the existing
  auxiliary conjugations as scaffolding — the cheapest tense to add next.
- **Conditional / hypothetical (baldintza / hipotetikoa)** — *"banintz"*,
  *"banu"*, *"banengo"* (if-clauses); *"nintzateke"*, *"nuke"*, *"nengoke"*
  (the "would" result).
- **Potential (ahalera)** — *"naiteke"*, *"dezaket"*, *"nagoke"* (present);
  *"nintekeen"*, *"nezakeen"*, *"nengokeen"* (past). A closed synthetic `-ke`
  set, available only to verbs that already have full synthetic paradigms.
- **Subjunctive (subjuntiboa)** — *"nadin"*, *"dezadan"*, *"nengoen"* — mostly
  embedded in subordinate clauses (*"Nahi dut etor dadin"* = "I want him/her
  to come").
- **Imperative (agintera)** — *"hadi"* / *"zaitez"* / *"zaitezte"* (be!),
  *"ezak"* / *"itzazu"* (have it!) — second-person only, so it can't fill the
  usual `ni`/`hi`/`hura`/`gu`/`zuek`/`haiek` table and would need its own
  lesson/question shape.

For periphrastic verbs, each of the above is actually a (non-finite verb form
× auxiliary tense) pair — e.g. *"ibiltzen naiz"* (present habitual), *"ibili
naiz"* (present perfect), *"ibiliko naiz"* (future) — a second axis of
complexity synthetic verbs don't have.
