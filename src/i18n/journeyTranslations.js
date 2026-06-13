export const JOURNEY_TRANSLATIONS = {
  phases: {
    'phase-1': {
      title: { es: 'Fase I', eu: 'I. fasea' },
      subtitle: {
        es: 'Presente de supervivencia (Yo, tú y ello)',
        eu: 'Oraina, lehen urratsak (Ni, hi eta hura)',
      },
    },
    'phase-2': {
      title: { es: 'Fase II', eu: 'II. fasea' },
      subtitle: {
        es: 'Transitividad y vida cotidiana',
        eu: 'Iragankortasuna eta eguneroko bizitza',
      },
    },
    'phase-3': {
      title: { es: 'Fase III', eu: 'III. fasea' },
      subtitle: {
        es: 'El paso al pasado',
        eu: 'Iraganera salto',
      },
    },
    'phase-4': {
      title: { es: 'Fase IV', eu: 'IV. fasea' },
      subtitle: {
        es: 'Dinámicas interpersonales y de relación',
        eu: 'Harremanak eta pertsonen arteko dinamikak',
      },
    },
    'phase-5': {
      title: { es: 'Fase V', eu: 'V. fasea' },
      subtitle: {
        es: 'Matices, modalidad y contexto social',
        eu: 'Ñabardurak, modalitatea eta testuinguru soziala',
      },
    },
  },
  stages: {
    'phase-1-stage-1': {
      title: { es: 'Etapa 1 — Fundamentos absolutos', eu: '1. atala — Oinarri-oinarrizkoak' },
    },
    'phase-1-stage-2': {
      title: {
        es: 'Etapa 2 — Operaciones básicas y movimiento',
        eu: '2. atala — Oinarrizko ekintzak eta mugimendua',
      },
    },
    'phase-1-gate-a': {
      title: {
        es: 'Puerta de Repaso A — La trampa del "ez"',
        eu: 'A Berrikuspen Atea — "Ez"-aren tranpa',
      },
    },
    'phase-2-stage-3': {
      title: { es: 'Etapa 3 — Acciones del mundo real', eu: '3. atala — Eguneroko ekintzak' },
    },
    'phase-2-stage-4': {
      title: {
        es: 'Etapa 4 — Hablando del futuro (Geroa)',
        eu: '4. atala — Geroaz hizketan (Geroa)',
      },
    },
    'phase-2-gate-b': {
      title: {
        es: 'Puerta de Repaso B — El control del presente básico',
        eu: 'B Berrikuspen Atea — Oraineko oinarrien azterketa',
      },
    },
    'phase-3-stage-5': {
      title: { es: 'Etapa 5 — Bases para contar historias', eu: '5. atala — Kontaketaren oinarriak' },
    },
    'phase-4-stage-6': {
      title: {
        es: 'Etapa 6 — El giro dativo ("a mí / para mí")',
        eu: '6. atala — Datiboaren bira ("niri")',
      },
    },
    'phase-4-gate-c': {
      title: {
        es: 'Puerta de Repaso C — La auditoría multiargumental',
        eu: 'C Berrikuspen Atea — Argumentu anitzen azterketa',
      },
    },
    'phase-5-stage-7': {
      title: { es: 'Etapa 7 — Hipótesis y posibilidades', eu: '7. atala — Hipotesiak eta gaitasunak' },
    },
    'phase-5-stage-8': {
      title: {
        es: 'Etapa 8 — Registros sociales e integración nativa completa',
        eu: '8. atala — Erregistro sozialak eta erabateko integrazioa',
      },
    },
  },
  units: {
    1: {
      title: { es: 'Quién y dónde', eu: 'Nor eta non' },
      focus: { es: 'izan + egon, presente', eu: 'izan + egon, oraina' },
      payload: {
        es: '"Soy estudiante." · "¿Dónde estás?" · "Está en casa."',
        eu: '"Ikaslea naiz" (Soy estudiante) · "Non zaude?" (¿Dónde estás?) · "Etxean dago" (Está en casa)',
      },
    },
    2: {
      title: { es: 'Tener, querer y saber', eu: 'Izan, nahi eta jakin' },
      focus: {
        es: 'presente de ukan (objeto fijado en hura) + nahi + jakin',
        eu: 'ukan oraina (objektua hura-n finkatuta) + nahi + jakin',
      },
      payload: {
        es: '"Tengo un coche." · "Quiero un café." · "¿Quieres venir?" · "No lo sé."',
        eu: '"Autoa dut" (Tengo un coche) · "Kafe bat nahi dut" (Quiero un café) · "Etorri nahi duzu?" (¿Quieres venir?) · "Ez dakit" (No lo sé)',
      },
    },
    3: {
      title: { es: 'Moviéndose', eu: 'Mugitzen' },
      focus: { es: 'joan + etorri, presente', eu: 'joan + etorri, oraina' },
      payload: {
        es: '"Voy a la playa." · "Ella viene mañana."',
        eu: '"Hondartzara noa" (Voy a la playa) · "Bihar dator" (Ella viene mañana)',
      },
    },
    4: {
      title: { es: 'Ampliación — Incorporando el plural', eu: 'Zabalpena — Plurala sartzen' },
      focus: {
        es: 'Añade gu/zuek/haiek a izan, egon, ukan, joan, etorri e ikusi — sin verbos nuevos',
        eu: 'gu/zuek/haiek gehitzen dizkie izan, egon, ukan, joan, etorri eta ikusi aditzei — aditz berririk gabe',
      },
    },
    5: {
      title: { es: 'El continuo inmediato', eu: 'Oraingo jarduera (ari + izan)' },
      focus: { es: 'ari + izan', eu: 'ari + izan' },
      payload: {
        es: '"¿Qué estás haciendo?" (Zer ari zara?) · "Estoy comiendo." (Jaten ari naiz)',
        eu: '"Zer ari zara?" (¿Qué estás haciendo?) · "Jaten ari naiz" (Estoy comiendo)',
      },
    },
    6: {
      title: { es: 'REPASO — La matriz de inversión', eu: 'BERRIKUSPENA — Aldrebeskeriaren matrizea' },
      focus: {
        es: 'Ejercicios de negación sobre las unidades 1–6 — sin verbos nuevos',
        eu: '1–6 unitateetako ezeztapen-ariketak — aditz berririk gabe',
      },
    },
    7: {
      title: { es: 'Rutina diaria (transitiva)', eu: 'Eguneroko ohitura (iragankorra)' },
      focus: {
        es: 'jan, edan, erosi (perifrastiko + ukan), ikusi',
        eu: 'jan, edan, erosi (aditz perifrastikoa + ukan), ikusi',
      },
      payload: {
        es: '"Comí." · "Bebes agua." · "Compré un libro." · "¿Lo ves?"',
        eu: '"Jan dut" (Comí) · "Ura edaten duzu" (Bebes agua) · "Liburu bat erosi dut" (Compré un libro) · "Ikusten duzu?" (¿Lo ves?)',
      },
    },
    8: {
      title: { es: 'Estados físicos y posesiones', eu: 'Egoera fisikoak eta edukitzea' },
      focus: {
        es: 'eduki, ibili — tablas completas de 6 personas',
        eu: 'eduki, ibili — 6 pertsonen taula osoa',
      },
      payload: {
        es: '"Tengo las llaves en el bolsillo." · "Andan dando vueltas por el pueblo."',
        eu: '"Giltzak poltsikoan ditut" (Tengo las llaves en el bolsillo) · "Herrian ibiltzen dira" (Andan dando vueltas por el pueblo)',
      },
    },
    9: {
      title: { es: 'Intenciones y acciones futuras', eu: 'Asmoak eta etorkizuneko ekintzak' },
      focus: {
        es: '-ko/-go + auxiliares de presente, aplicado a todos los verbos vistos hasta ahora',
        eu: '-ko/-go + oraineko laguntzaileak, orain arteko aditz guztiei aplikatuta',
      },
      payload: {
        es: '"Iré mañana" (joango naiz) · "Compraremos una casa" (erosiko dugu)',
        eu: '"Joango naiz" (bihar — Iré mañana) · "Erosiko dugu" (etxe bat — Compraremos una casa)',
      },
    },
    10: {
      title: { es: 'Necesidades y obligaciones', eu: 'Beharrak eta betebeharrak' },
      focus: { es: 'behar + ukan, presente y futuro', eu: 'behar + ukan, oraina eta geroa' },
      payload: {
        es: '"Tengo que ir." (Joan behar dut) · "Tendrás que venir." (Etorri beharko duzu)',
        eu: '"Joan behar dut" (Tengo que ir) · "Etorri beharko duzu" (Tendrás que venir)',
      },
    },
    11: {
      title: {
        es: 'REPASO — Mezcla acumulativa del presente',
        eu: 'BERRIKUSPENA — Oraina, dena nahasian',
      },
      focus: {
        es: 'Sintético + perifrástico, afirmativo + negativo, presente + futuro — sin verbos nuevos, hay que aprobarlo con muy buena precisión',
        eu: 'Aditz trinkoak + perifrastikoak, baiezkoak + ezezkoak, oraina + geroa — aditz berririk gabe, zehaztasun handiz gainditu beharrekoa',
      },
    },
    12: {
      title: { es: '"Yo era, yo tenía"', eu: '"Nintzen, nuen"' },
      focus: { es: 'pasado de izan/ukan, tabla completa', eu: 'izan/ukan iragana, taula osoa' },
      payload: {
        es: '"Yo era joven." · "Ella tenía un perro."',
        eu: '"Gaztea nintzen" (Yo era joven) · "Txakurra zuen" (Ella tenía un perro)',
      },
    },
    13: {
      title: { es: 'El hilo narrativo del pasado', eu: 'Iraganeko kontaketa' },
      focus: {
        es: 'pasado perifrástico (ikusi nuen), pasado imperfectivo/habitual (etortzen nintzen), y movimiento completado (joan nintzen, etorri nintzen)',
        eu: 'iragan perifrastikoa (ikusi nuen), iragan ohiturazkoa (etortzen nintzen) eta amaitutako mugimendua (joan nintzen, etorri nintzen)',
      },
      payload: {
        es: '"Lo vi." · "Solía venir (a menudo)." · "Fui." · "Ella vino."',
        eu: '"Ikusi nuen" (Lo vi) · "Etortzen nintzen" (Solía venir, a menudo) · "Joan nintzen" (Fui) · "Etorri zen" (Ella vino)',
      },
    },
    14: {
      title: { es: 'Movimiento en curso (pasado)', eu: 'Mugimendua gertatzen ari zen (iragana)' },
      focus: {
        es: 'formas pasadas propias de joan/etorri/ibili (nindoan, zetorren)',
        eu: 'joan/etorri/ibili-ren iraganeko forma trinkoak (nindoan, zetorren)',
      },
      payload: {
        es: '"Estaba de camino (cuando...)." · "Él venía (y entonces...)."',
        eu: '"Bidean nindoan (...zenean)" (Estaba de camino, cuando...) · "Etortzen zetorren (eta orduan...)" (Él venía, y entonces...)',
      },
    },
    15: {
      title: { es: 'Gustos, opiniones y sensaciones físicas', eu: 'Atseginak, iritziak eta sentsazio fisikoak' },
      focus: {
        es: 'presente NOR-NORI, sujetos de 3ª persona (zait/zaizu/zaio)',
        eu: 'oraina NOR-NORI, 3. pertsonako subjektuak (zait/zaizu/zaio)',
      },
      payload: {
        es: '"Me gusta." · "Me parece bien." · "Se me olvidó."',
        eu: '"Gustatzen zait" (Me gusta) · "Ondo iruditzen zait" (Me parece bien) · "Ahaztu zait" (Se me olvidó)',
      },
    },
    16: {
      title: { es: 'Comunicación y dar', eu: 'Komunikazioa eta ematea' },
      focus: { es: 'presente NOR-NORI-NORK (esan, eman)', eu: 'oraina NOR-NORI-NORK (esan, eman)' },
      payload: {
        es: '"Te lo doy" (ematen dizut) · "Se lo dices a él" (esaten diozu)',
        eu: '"Ematen dizut" (Te lo doy) · "Esaten diozu" (Se lo dices a él)',
      },
    },
    17: {
      title: { es: 'REPASO — La mezcladora de declinación', eu: 'BERRIKUSPENA — Kasu-marken nahasketa' },
      focus: {
        es: 'Practica los intercambios de papeles NOR/NORK/NORI — sin verbos nuevos',
        eu: 'NOR/NORK/NORI rolen txandaketa lantzen du — aditz berririk gabe',
      },
    },
    18: {
      title: { es: 'Permisos y capacidad (Ahalera)', eu: 'Baimenak eta gaitasuna (Ahalera)' },
      focus: {
        es: 'dezaket/naiteke contrastados con la forma perifrástica ahal izan',
        eu: 'dezaket/naiteke, ahal izan formaren aldean',
      },
      payload: {
        es: '"Puedo venir." · "Podría (haber)..."',
        eu: '"Etor naiteke" (Puedo venir) · "...ahal izan(go) nuen" (Podría haber...)',
      },
    },
    19: {
      title: { es: 'Condicionales (Baldintza eta Ondorioa)', eu: 'Baldintzazkoak (Baldintza eta Ondorioa)' },
      focus: { es: 'prótasis con ba- + apódosis con -ke', eu: 'ba- protasia + -ke ondorioa' },
      payload: {
        es: '"Si tuviera dinero, compraría eso" (Dirua banu, hori erosiko nuke)',
        eu: '"Dirua banu, hori erosiko nuke" (Si tuviera dinero, compraría eso)',
      },
    },
    20: {
      title: { es: 'Mandatos y subjuntivos (Agintera, Subjuntiboa)', eu: 'Agintera eta Subjuntiboa' },
      focus: {
        es: 'Órdenes directas; oraciones de finalidad ("para que...")',
        eu: 'Zuzeneko aginduak; helburuzko perpausak ("...-tzeko")',
      },
    },
    21: {
      title: {
        es: 'El registro social cercano (hi + Hitanoa/Hiketa)',
        eu: 'Hurbileko erregistro soziala (hi + Hitanoa/Hiketa)',
      },
      focus: {
        es: 'se introduce hi por primera vez, junto con la marca alocutiva toka/noka',
        eu: 'hi lehen aldiz aurkezten da, toka/noka tratamendu alokutiboarekin batera',
      },
    },
    22: {
      title: {
        es: 'Transformación pasiva y lectura de textos reales',
        eu: 'Pasibora aldatzea eta benetako testuak irakurtzea',
      },
      focus: {
        es: 'Formas no finitas, cambio de NOR (ireki dut → ireki da)',
        eu: 'Forma ez-finituak, NOR aldaketa (ireki dut → ireki da)',
      },
    },
  },
}
