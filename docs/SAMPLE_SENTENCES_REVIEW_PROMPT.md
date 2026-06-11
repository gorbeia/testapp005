# Review prompt: doubtful sentences in `docs/SAMPLE_SENTENCES.md`

Copy everything below the line into a chat with a native Basque speaker (or
another Basque-grammar-capable session) to resolve the remaining open items
from `docs/DECISIONS.md`'s 2026-06-11 "Fixed 13 grammar/spelling errors..."
entry. For each sentence, say whether it's correct as written or give the
corrected form, with a one-line reason if it's not obvious.

---

I'm reviewing example sentences for a Basque (Euskara Batua) verb-conjugation
app. For each sentence below, I have the current Basque text, its intended
English translation, and a specific doubt about its grammar. Please tell me
for each one: (a) is it correct as written, and (b) if not, what's the
correct form?

1. **Sentence:** "Zuek autoan zeramatzazten dantzariak herriko jaietara
   joateko."
   **Translation:** "You all were carrying the dancers in the car to go to
   the town festivals."
   **Doubt:** Is `zeramatzazten` the correct synthetic past tense of
   `eraman` for `zuek` (you all) with a plural object (`dantzariak`)? I
   suspect it should be `zeneramatzaten`, by analogy with `ibili`'s
   `zenbiltzaten` (zuek past), but I'm not confident the `eraman` paradigm
   works the same way, or whether this synthetic past form is even natural —
   would `eraman zenituzten` (periphrastic) read better?

2. **Sentence:** "Ekar ezazu gazta eta Idiazabalgo ardoa mahaira, mesedez!"
   **Translation:** "Bring the cheese and the Idiazabal wine to the table,
   please!"
   **Doubt:** `ezazu` is the singular-object imperative of `ekarri`. With two
   coordinated objects (`gazta eta Idiazabalgo ardoa`), should this be the
   plural-object imperative `Ekar itzazu` instead? Does coordinating two
   singular nouns with `eta` count as a plural object for verb agreement
   here?

3. **Sentence:** "Zuk saski beteta perretxiko zekarzkigun atzo basotik
   bueltan."
   **Translation:** "You brought us a basket full of mushrooms yesterday
   returning from the forest."
   **Doubt:** `perretxiko` has no plural marker (`-ak`), but `zekarzkigun`
   uses the plural-object `-zki-` infix. Is a bare/mass-noun object like this
   compatible with a plural-marked verb, or should it be `perretxikoak
   zekarzkigun` (plural noun + plural verb), or `perretxikoz beteta
   zekarkigun` (instrumental "filled with mushrooms" + singular verb)?

4. **Sentence:** "Okinaren labe berriak euskal pastela azkarrago laberaraziko
   du."
   **Translation:** "The baker's new oven will make the Basque cake bake
   faster."
   **Doubt:** `laberazi`/`laberaraziko` is coined directly from the noun
   `labe` (oven) + `-arazi`, rather than from a verb radical. Is this a real
   causative formation, or should the base verb be something like
   `erre`/`labean sartu` (e.g. `errarazi` → "Okinaren labe berriak euskal
   pastela azkarrago erraraziko du")?

For context, all four sentences are in a "future units" sentence bank not yet
used by the live app — `docs/VERB_COVERAGE.md` §6 also separately notes that
the `-arazi`/`-erazi` conditioning rule (relevant to #4) hasn't been sourced
yet.
