# Sample sentences — a categorised bank

A staging ground for `VERBS`'s `sentences` (and, later, `pronounSentences`)
tables in `src/App.jsx`. Today each `verb.sentences[tense][person]` is a
single string, reused verbatim every time that person comes up — including
across the repeated `rounds` a lesson now does to reach
`TARGET_EXERCISE_COUNT` (see `docs/DECISIONS.md`, 2026-06-11). This doc
collects several sentence variants per person, grouped into everyday-life
**categories**, so that "rich and colourful" variety can be added by turning
each `sentences[tense][person]` cell into an array and picking one variant
per question — without inventing new vocabulary on the fly or risking
grammatically-broken combinations (Basque's case marking makes random
template mixing risky, see `docs/CONJUGATIONS.md`).

Each sentence keeps the existing `___` blank marking where the conjugated
verb form goes (`verb.conjugations[tense][person]` fills it in), exactly like
today's single-variant `sentences` tables.

## Categories

| Category | Theme |
|---|---|
| **Eskola** (School) | student/classroom life |
| **Familia eta etxea** (Family & home) | relatives, household |
| **Bidaiak** (Travel) | trips, places, transport |
| **Eguneroko bizitza** (Daily life & work) | errands, jobs, routine |

Using the same four categories across verbs keeps the variety predictable to
author and review, while still spanning enough real-world contexts to feel
"colourful" rather than repetitive.

---

## `izan` — "to be" (present)

| Person | Eskola | Familia eta etxea | Bidaiak | Eguneroko bizitza |
|---|---|---|---|---|
| ni | Ni ikaslea ___. | Ni aita ___. | Ni turista ___. | Ni langilea ___. |
| zu | Zu irakaslea ___. | Zu ama ___. | Zu gidaria ___. | Zu auzokidea ___. |
| hura | Hura zuzendaria ___. | Hura aitona ___. | Hura bidaiaria ___. | Hura saltzailea ___. |

(The current single-variant table uses "Ni irakaslea ___." / "Zu ikaslea
___." / "Hura medikua ___." — close cousins of the **Eskola** column above;
those can be folded in as a fifth variant or swapped for one of these.)

---

## `egon` — "to be (located / in a state)" (present)

| Person | Eskola | Familia eta etxea | Bidaiak | Eguneroko bizitza |
|---|---|---|---|---|
| ni | Ni ikasgelan ___. | Ni etxean ___. | Ni Bilbon ___. | Ni lanean ___. |
| zu | Zu liburutegian ___. | Zu sukaldean ___. | Zu Donostian ___. | Zu dendan ___. |
| hura | Hura patioan ___. | Hura logelan ___. | Hura Gasteizen ___. | Hura kalean ___. |

---

## `ukan` — "to have" (object fixed to `hura`, singular — every object below
takes the indefinite/singular `bat` or a mass noun, to match the `du`/`dut`/…
forms)

### Present

| Person | Eskola | Familia eta etxea | Bidaiak | Eguneroko bizitza |
|---|---|---|---|---|
| ni (Nik) | Nik liburu bat ___. | Nik arreba bat ___. | Nik txartel bat ___. | Nik bilera bat ___. |
| hi (Hik) | Hik koaderno bat ___. | Hik anaia bat ___. | Hik mapa bat ___. | Hik auto bat ___. |
| hura (Hark/Berak) | Hark arkatz bat ___. | Berak seme bat ___. | Hark pasaporte bat ___. | Berak etxe bat ___. |
| gu (Guk) | Guk azterketa bat ___. | Guk etxe handi bat ___. | Guk maleta bat ___. | Guk denbora ___. |
| zuek | Zuek azterketa bat ___. | Zuek lorategi bat ___. | Zuek hotel bat ___. | Zuek arazo bat ___. |
| haiek | Haiek liburutegi bat ___. | Haiek anaia bat ___. | Haiek hegazkin bat ___. | Haiek aukera bat ___. |

### Past

| Person | Eskola | Familia eta etxea | Bidaiak | Eguneroko bizitza |
|---|---|---|---|---|
| ni (Nik) | Nik azterketa bat ___. | Nik arazo bat ___. | Nik txartel bat ___. | Nik diru asko ___. |
| hi (Hik) | Hik liburu bat ___. | Hik etxe bat ___. | Hik mapa bat ___. | Hik lan bat ___. |
| hura (Hark/Berak) | Hark ideia on bat ___. | Berak seme bat ___. | Hark pasaporte bat ___. | Berak auto bat ___. |
| gu (Guk) | Guk azterketa bat ___. | Guk etxe handi bat ___. | Guk maleta bat ___. | Guk arrazoi ___. |
| zuek | Zuek galdera bat ___. | Zuek anaia bat ___. | Zuek hotel bat ___. | Zuek lan asko ___. |
| haiek | Haiek azterketa bat ___. | Haiek anaia bat ___. | Haiek hegazkin bat ___. | Haiek denbora gutxi ___. |

(Cells matching the current single-variant `sentences` tables verbatim —
e.g. "Nik liburu bat ___.", "Hark ideia on bat ___.", "Guk denbora ___.",
"Zuek arazo bat ___.", "Haiek aukera bat ___.", "Nik diru asko ___.", "Hik
liburu bat ___.", "Guk arrazoi ___.", "Zuek galdera bat ___.", "Haiek
denbora gutxi ___." — can simply become one variant in their cell's array.)

---

## Cultural sentence bank — by argument structure (future units)

The sentences below were drafted to give the eventual `joan`/`etorri`/`ibili`/
`eman`/`esan`/`prestatu`/etc. lessons (per `docs/EXERCISE_ENGINE.md`'s Tier
1/3 verbs and `docs/LEARNING_JOURNEY.md`'s later units) a strong dose of real
Basque culture, geography, food, and tradition — grouped by **argument
structure** (NOR / NOR-NORK / NOR-NORI / NOR-NORI-NORK) and **tense**, rather
than by the School/Family/Travel/Daily-life themes above.

These are full sentences, not yet in the `___`-blanked `sentences[tense][person]`
shape — see "Mapping to `VERBS`'s shape" below for how to adapt one once its
verb is implemented.

### 1. NOR (Intransitive)
*Used for actions with just a subject, using the auxiliary **izan** (to be) or
synthetic forms.*

#### Present Tense (Oraina)
- **Zuberoako dantzariak gure herrira etortzen dira.**
  - *Translation:* The dancers from Soule come to our town.
  - *Cultural touch:* Highlights *Zuberoa* (Soule), famous for its complex,
    athletic traditional dances.
- **Gaur goizean mendizaleak azkar igotzen ari dira Gorbeiako gurutzeraino.**
  - *Translation:* This morning, the mountaineers are quickly climbing up to
    the Gorbeia cross.
  - *Cultural touch:* Mountaineering (*mendizaletasuna*) is almost a religion
    in the Basque Country; Mount Gorbeia is an iconic peak.

#### Past Tense (Lehena)
- **Iaz, nire lagunak Donostiako Danborradan ibili ziren gau osoan.**
  - *Translation:* Last year, my friends wandered through San Sebastian's
    Drum Festival all night long.
  - *Cultural touch:* Mentions the *Danborrada*, a massive, loud festival held
    every January 20th.

#### Synthetic Present (Trinko Oraina — no auxiliary)
- **Gaur gurasoak Bilboko Guggenheim museora doaz.**
  - *Translation:* Today, the parents are going to the Guggenheim Museum in
    Bilbao.
  - *Verb focus:* Uses **doaz** (they go), the synthetic form of *joan*.

### 2. NOR-NORK (Transitive)
*Used when a subject (**Nork**, marked with `-k`) does something to a direct
object (**Nor**). Uses the auxiliary **edun** (to have).*

#### Present Tense (Oraina)
- **Sustraiak eta Uxuek bertso politak abesten dituzte plazan.**
  - *Translation:* Sustrai and Uxue sing beautiful improvised verses in the
    square.
  - *Cultural touch:* *Bertsolaritza* is the Basque art of singing
    improvised, rhyming verses. Note the plural-object auxiliary **dituzte**
    (they have them).
- **Amonak marmitako epela prestatu du gaurko bazkarirako.**
  - *Translation:* Grandmother has prepared warm tuna stew for today's lunch.
  - *Cultural touch:* *Marmitako* is a classic Basque fishermen's potato and
    tuna stew.

#### Past Tense (Lehena)
- **Atzo arratsaldean, pilotariek partida zirraragarria jokatu zuten
  pilotalekuan.**
  - *Translation:* Yesterday afternoon, the pelota players played an exciting
    match in the fronton court.
  - *Cultural touch:* *Pilota* (Basque pelota) played in a *pilotaleku*
    (fronton) is the traditional national sport.

#### Future Tense (Geroaldia)
- **Zuk udan Euskal Herriko Kostaldea bisitatuko duzu.**
  - *Translation:* You will visit the Basque Coast in the summer.
  - *Grammar tip:* Notice the future suffix **-ko** on the main verb
    *bisitatuko*.

### 3. NOR-NORI (Intransitive with indirect object)
*Used when something happens **to** someone/something. Tracks the subject
(**Nor**) and the recipient (**Nori**). Uses the auxiliary **izan**.*

#### Present Tense (Oraina)
- **Niri asko gustatzen zaizkit Tolosako babarrun gorriak.**
  - *Translation:* I like Tolosa's red beans a lot. (Literally: Tolosa's red
    beans are pleasing to me.)
  - *Cultural touch:* Tolosa is famous throughout Spain for its high-quality
    black/red beans. Note that **zaizkit** is plural because *babarrunak* is
    plural.
- **Umeei beldurra zaie basoan dabilen Basajaun mitologikoa.**
  - *Translation:* The children are afraid of the mythological Basajaun
    walking in the woods.
  - *Cultural touch:* *Basajaun* (The Lord of the Woods) is a popular hairy
    giant from Basque mythology.

#### Past Tense (Lehena)
- **Zuri ahaztu zitzaizkizun etxeko giltzak San Fermin jaietan.**
  - *Translation:* You forgot the house keys during the San Fermin festivals.
  - *Cultural touch:* *San Fermin* is the world-famous Running of the Bulls
    festival in Pamplona (*Iruñea*).

### 4. NOR-NORI-NORK (Three-argument transitive)
*Tracks the subject (**Nork**), direct object (**Nor**), and indirect object
(**Nori**) — typically the **die**-type auxiliary.*

#### Present Tense (Oraina)
- **Nik zuri gaztelerazko liburua euskaratu dizut.**
  - *Translation:* I have translated the Spanish book into Basque for you.
  - *Auxiliary:* **dizut** = it (`d-`) + to you (`-izu-`) + I (`-t`).
- **Goizaneik lagunei opari politak ekarri dizkie Baionako dendatik.**
  - *Translation:* Goizane has brought nice gifts to her friends from the shop
    in Bayonne.
  - *Cultural touch:* Features *Baiona* (Bayonne), the cultural capital of the
    Northern Basque Country in France.

#### Past Tense (Lehena)
- **Gurasoek niri txikitan Olentzeroren ipuinak kontatzen zizkidaten.**
  - *Translation:* When I was little, my parents used to tell me stories about
    Olentzero.
  - *Cultural touch:* *Olentzero* is the mythical, coal-mining Basque
    gift-giver who comes down from the mountains on Christmas Eve.
- **Arrantzaleek jatetxeari goizeko legatz freskoa saldu zioten.**
  - *Translation:* The fishermen sold the fresh morning hake to the
    restaurant.
  - *Cultural touch:* *Arrantzaleak* (fishermen) and *legatza* (hake)
    represent the deep maritime roots of Basque gastronomy.

### Mapping to `VERBS`'s shape

The current data model doesn't store sentences with a separate
structure/aspect/auxiliary breakdown — `sentences[tense][person]` is just a
`___`-blanked string, with the translation/cultural note kept as a nearby
comment rather than stored data (see `izan`/`egon`/`ukan` above for the
pattern). When a sentence above gets adopted:

1. Identify which `person` it belongs to (the `Nork`/`Nor` argument that
   matches `conjugations[tense][person]`'s key).
2. Replace the drilled finite form with `___`. For periphrastic verbs
   (`type: 'periphrastic'`, participle + auxiliary), only the auxiliary is
   blanked — the participle stays fixed.
3. Carry the translation/cultural note over as a comment above the entry.

e.g. "Amonak marmitako epela prestatu du gaurko bazkarirako." → once
`prestatu` exists in `VERBS` as `periphrastic`, its NOR-NORK present `hura`
entry becomes `sentences.present.hura = 'Amonak marmitako epela prestatu ___
gaurko bazkarirako.'` (blanking the auxiliary `du`, per `CLAUDE.md`'s
`periphrastic` type).

---

## Next steps (not yet done)

1. Review/edit these for naturalness and any missing vocabulary gaps.
2. Turn each `sentences[tense][person]` cell into an array of these variants
   in `src/App.jsx`'s `VERBS`, and update `generateQuestions`/
   `buildSpotErrorQuestion` (`src/lessonLogic.js`) to pick one variant at
   random per question.
3. `pronounSentences` (verb filled in, pronoun blanked) can reuse the same
   sentences with the blank repositioned — a follow-up pass once the
   `sentences` variants above are settled.
4. As new verbs/tenses are added (per `docs/EXERCISE_ENGINE.md`'s Tier 1
   list), extend this doc with the same four categories before writing their
   `VERBS` entries.
5. The cultural sentence bank above pairs argument structures with specific
   verbs/tenses for future units — pull individual sentences from it, blank
   the drilled form, and fold them into that verb's `sentences`/
   `pronounSentences` tables (plus a theme from the categories above) as each
   unit is implemented.
