// Full menu data. Dish names & descriptions kept in Italian (culinary convention).
// Section titles are localized in translations via `sectionKey`.
// takeaway: true where relevant.

export const cucina = [
  {
    section: "Antipasti",
    items: [
      { n: "Carpaccio di manzo", d: "Rucola, grana e glassa di aceto balsamico", p: "14,00", star: true },
      { n: "Tagliere di salumi e formaggi", d: "Con gnocco fritto", p: "18,00", star: true },
      { n: "Prosciutto e melone", d: "", p: "12,00", star: true },
      { n: "Caprese", d: "Pomodoro, mozzarella e basilico", p: "10,00", star: true },
      { n: "Soutè di cozze e vongole", d: "Piccante", p: "15,00", star: true },
    ],
  },
  {
    section: "Primi Piatti",
    items: [
      { n: "Linguine alle vongole", d: "", p: "18,00", star: true },
      { n: "Scialatielli allo scoglio", d: "", p: "20,00", star: true },
      { n: "Paccheri alla norma", d: "Con burrata e basilico", p: "16,00", star: true },
      { n: "Rigatoni alla carbonara", d: "", p: "12,00", star: true },
      { n: "Tagliatelle ai funghi porcini", d: "", p: "16,00", star: true },
      { n: "Risotto taleggio, pere e noci", d: "", p: "18,00", star: true },
    ],
  },
  {
    section: "Secondi Piatti",
    items: [
      { n: "Tagliata di fassona", d: "Rucola e grana", p: "20,00", star: true },
      { n: "Grigliata di carne", d: "Con verdure grigliate", p: "18,00", star: true },
      { n: "Fritto misto", d: "Con verdure", p: "18,00", star: true },
      { n: "Carpaccio di polpo", d: "Pomodorini, rucola e olive taggiasche", p: "14,00" },
      { n: "Tomahawk", d: "Con patatine rustiche", p: "24,00", star: true },
    ],
  },
  {
    section: "Contorni",
    items: [
      { n: "Verdure miste grigliate", d: "", p: "6,00" },
      { n: "Patatine fritte", d: "", p: "5,00" },
      { n: "Insalata mista", d: "", p: "8,00" },
      { n: "Onion rings", d: "", p: "7,00" },
    ],
  },
  {
    section: "Dolci",
    items: [
      { n: "Tortino cuore morbido al cioccolato", d: "", p: "6,00", star: true },
      { n: "Tartufo bianco o nero", d: "", p: "5,00", star: true },
      { n: "Tiramisù della casa", d: "", p: "6,00", star: true },
      { n: "Crema Catalana", d: "", p: "6,00", star: true },
      { n: "Panna cotta", d: "", p: "5,00", star: true },
      { n: "Seadas sarda", d: "Miele e zucchero a velo", p: "6,00", star: true },
    ],
  },
];

export const pizza = [
  {
    section: "Le Speciali",
    items: [
      { n: "Prosciutto crudo e bufala", d: "Pomodoro, mozzarella di bufala, prosciutto crudo", p: "11,00" },
      { n: "Rustica", d: "Pomodoro, mozzarella, pancetta e cipolle", p: "8,50", star: true },
      { n: "Salsiccia e peperoni", d: "Pomodoro, mozzarella, salsiccia e peperoni", p: "9,50", star: true },
      { n: "Salentina", d: "Pomodoro, tonno, pomodori secchi, olive nere, capperi e cipolle", p: "10,00" },
      { n: "Porcini e guanciale", d: "Pomodoro, mozzarella, porcini e guanciale", p: "10,00", star: true },
      { n: "Salsiccia e friarielli", d: "Mozzarella, salsiccia e friarielli", p: "10,00", star: true },
      { n: "Nanetta", d: "Mozzarella, taleggio, brie, zola e salame piccante", p: "12,00", star: true },
      { n: "Nene", d: "Mozzarella, prosciutto cotto e mais", p: "8,50", star: true },
      { n: "Wolka", d: "Pomodoro, mozzarella, salsiccia, porcini, zola e cipolla", p: "12,00" },
      { n: "Trilly", d: "Pomodoro, mozzarella, tonno e zucchine", p: "8,50", star: true },
      { n: "CEO", d: "Pomodoro, mozzarella, nduja, rucola, pomodorini e burrata", p: "11,00", star: true },
      { n: "Yaya", d: "Mozzarella, brie, guanciale e miele", p: "10,50", star: true },
    ],
  },
  {
    section: "Le Classiche",
    items: [
      { n: "Marinara", d: "Pomodoro, olio all'aglio e origano", p: "5,00", star: true },
      { n: "Margherita", d: "Pomodoro e mozzarella", p: "6,00", star: true },
      { n: "Prosciutto cotto", d: "Pomodoro, mozzarella e prosciutto cotto", p: "7,00", star: true },
      { n: "Prosciutto e funghi", d: "Pomodoro, mozzarella, prosciutto cotto e funghi", p: "8,00", star: true },
      { n: "Tonno e cipolle", d: "Pomodoro, mozzarella, tonno e cipolle", p: "8,50", star: true },
      { n: "Speck e zola", d: "Pomodoro, mozzarella, speck e zola", p: "8,50", star: true },
      { n: "Capricciosa", d: "Pomodoro, mozzarella, cotto, funghi, carciofi e olive", p: "9,50", star: true },
      { n: "Vegetariana", d: "Pomodoro, mozzarella, zucchine, melanzane, peperoni", p: "9,00", star: true },
      { n: "Prosciutto crudo", d: "Pomodoro, mozzarella e prosciutto crudo", p: "9,00", star: true },
      { n: "Würstel e patatine", d: "Pomodoro, mozzarella, würstel e patatine", p: "8,50", star: true },
      { n: "Napoli", d: "Pomodoro, mozzarella e acciughe", p: "8,00", star: true },
      { n: "Quattro formaggi", d: "Mozzarella, taleggio, gorgonzola e brie", p: "9,00", star: true },
      { n: "Romana", d: "Pomodoro, mozzarella, olive, acciughe e capperi", p: "8,50", star: true },
      { n: "Primavera", d: "Pomodoro, mozzarella, rucola e pomodorini", p: "9,00", star: true },
    ],
  },
  {
    section: "Le Piccanti",
    items: [
      { n: "Diavola", d: "Pomodoro, mozzarella e salame piccante", p: "8,00", star: true },
      { n: "Inferno", d: "Pomodoro, mozzarella, salame piccante, zola, cipolle e peperoncino", p: "11,00", star: true },
      { n: "Tre Porcellini", d: "Pomodoro, mozzarella, cotto, salsiccia e salame piccante", p: "10,00", star: true },
      { n: "San Luca", d: "Pomodoro, mozzarella, nduja, cipolle e olive nere", p: "9,00", star: true },
    ],
  },
  {
    section: "I Calzoni",
    items: [
      { n: "Calzone liscio", d: "Pomodoro, mozzarella e prosciutto cotto", p: "7,00", star: true },
      { n: "Calzone farcito", d: "Pomodoro, mozzarella, cotto, funghi e carciofi", p: "8,50", star: true },
      { n: "Calzone a scelta", d: "Scegli la pizza che preferisci in stile calzone", p: "—" },
    ],
  },
  {
    section: "Le Focacce",
    items: [
      { n: "Cunzata", d: "Rucola, tonno, acciughe, pomodorini secchi, capperi, olive e bufala", p: "12,00", star: true },
      { n: "Golosa", d: "Prosciutto crudo, pomodorini, rucola e grana", p: "10,00", star: true },
      { n: "Mortazza", d: "Mortadella, crema di burrata e granella di pistacchio", p: "12,00", star: true },
      { n: "Nutella", d: "Nutella e zucchero a velo", p: "6,50", star: true },
    ],
  },
];

export const vini = [
  {
    section: "Bollicine",
    wine: true,
    items: [{ n: "Montelliana DOC", bottle: "22,00", glass: "3,50" }],
  },
  {
    section: "Vini Bianchi",
    wine: true,
    items: [
      { n: "Pinot Grigio", bottle: "19,00", glass: "3,00" },
      { n: "Vermentino IGP del Salento", bottle: "19,00", glass: "3,00" },
      { n: "Chardonnay Versante", bottle: "20,00", glass: "3,50" },
      { n: "Ribolla Gialla", bottle: "20,00", glass: "3,50" },
      { n: "Falanghina Beneventano", bottle: "24,00", glass: "4,00" },
    ],
  },
  {
    section: "Vini Rosati",
    wine: true,
    items: [{ n: "Corte delle Rose", bottle: "22,00", glass: "3,50" }],
  },
  {
    section: "Vini Rossi",
    wine: true,
    items: [
      { n: "Barbera del Piemonte", bottle: "18,00", glass: "2,50" },
      { n: "Nero d'Avola Sicilia DOC", bottle: "22,00", glass: "3,50" },
      { n: "Primitivo di Puglia IGP", bottle: "22,00", glass: "3,50" },
      { n: "Negroamaro IGP del Salento", bottle: "22,00", glass: "3,50" },
      { n: "Chianti Superiore", bottle: "24,00", glass: "4,00" },
      { n: "Morellino di Scansano", bottle: "24,00", glass: "4,00" },
      { n: "Valpolicella Ripasso", bottle: "39,00", glass: "6,00" },
    ],
  },
  {
    section: "Vini alla Spina",
    wine: true,
    items: [
      { n: "Bianco frizzante", bottle: "16,00 / L", glass: "2,50" },
      { n: "Rosso Merlot", bottle: "16,00 / L", glass: "2,50" },
    ],
  },
];
