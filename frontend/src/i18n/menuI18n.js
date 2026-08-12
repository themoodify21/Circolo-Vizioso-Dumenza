// Menu localization helpers. Dish proper names stay in Italian (culinary
// convention); section titles + ingredient descriptions are translated
// "as much as possible" via a focused glossary.

export const SECTION_LABELS = {
  Antipasti: { en: "Starters", de: "Vorspeisen", fr: "Entrées" },
  "Primi Piatti": { en: "First Courses", de: "Erste Gänge", fr: "Entrées de pâtes" },
  "Secondi Piatti": { en: "Main Courses", de: "Hauptgänge", fr: "Plats principaux" },
  Contorni: { en: "Sides", de: "Beilagen", fr: "Accompagnements" },
  Dolci: { en: "Desserts", de: "Desserts", fr: "Desserts" },
  "Le Speciali": { en: "The Specials", de: "Die Spezialitäten", fr: "Les Spéciales" },
  "Le Classiche": { en: "The Classics", de: "Die Klassiker", fr: "Les Classiques" },
  "Le Piccanti": { en: "The Spicy Ones", de: "Die Scharfen", fr: "Les Épicées" },
  "I Calzoni": { en: "Calzoni", de: "Calzoni", fr: "Calzoni" },
  "Le Focacce": { en: "Focaccie", de: "Focaccia", fr: "Focaccia" },
  Bollicine: { en: "Sparkling", de: "Schaumwein", fr: "Bulles" },
  "Vini Bianchi": { en: "White Wines", de: "Weißweine", fr: "Vins Blancs" },
  "Vini Rosati": { en: "Rosé Wines", de: "Roséweine", fr: "Vins Rosés" },
  "Vini Rossi": { en: "Red Wines", de: "Rotweine", fr: "Vins Rouges" },
  "Vini alla Spina": { en: "Wines on Tap", de: "Offene Weine", fr: "Vins à la Pression" },
};

// Full-description overrides for sentence-style descriptions.
const OVERRIDES = {
  "Scegli la pizza che preferisci in stile calzone": {
    en: "Choose your favourite pizza, calzone style",
    de: "Wähle deine Lieblingspizza im Calzone-Stil",
    fr: "Choisissez votre pizza préférée, façon calzone",
  },
  "Con gnocco fritto": { en: "With fried dough", de: "Mit frittiertem Teig", fr: "Avec pâte frite" },
  "Con verdure grigliate": { en: "With grilled vegetables", de: "Mit gegrilltem Gemüse", fr: "Avec légumes grillés" },
  "Con verdure": { en: "With vegetables", de: "Mit Gemüse", fr: "Avec légumes" },
  "Con patatine rustiche": { en: "With rustic fries", de: "Mit rustikalen Pommes", fr: "Avec frites rustiques" },
  Piccante: { en: "Spicy", de: "Scharf", fr: "Piquant" },
};

// Ingredient glossary. Multi-word phrases first (order matters).
const PHRASES = [
  ["glassa di aceto balsamico", { en: "balsamic vinegar glaze", de: "Balsamico-Glasur", fr: "glaçage au vinaigre balsamique" }],
  ["mozzarella di bufala", { en: "buffalo mozzarella", de: "Büffelmozzarella", fr: "mozzarella de bufflonne" }],
  ["crema di burrata", { en: "burrata cream", de: "Burrata-Creme", fr: "crème de burrata" }],
  ["granella di pistacchio", { en: "chopped pistachios", de: "Pistaziengranulat", fr: "éclats de pistache" }],
  ["olive taggiasche", { en: "Taggiasca olives", de: "Taggiasca-Oliven", fr: "olives taggiasche" }],
  ["olive nere", { en: "black olives", de: "schwarze Oliven", fr: "olives noires" }],
  ["pomodorini secchi", { en: "dried cherry tomatoes", de: "getrocknete Kirschtomaten", fr: "tomates cerises séchées" }],
  ["pomodori secchi", { en: "sun-dried tomatoes", de: "getrocknete Tomaten", fr: "tomates séchées" }],
  ["salame piccante", { en: "spicy salami", de: "scharfe Salami", fr: "salami piquant" }],
  ["prosciutto crudo", { en: "cured ham", de: "Rohschinken", fr: "jambon cru" }],
  ["prosciutto cotto", { en: "cooked ham", de: "Kochschinken", fr: "jambon cuit" }],
  ["olio all'aglio", { en: "garlic oil", de: "Knoblauchöl", fr: "huile à l'ail" }],
  ["verdure grigliate", { en: "grilled vegetables", de: "gegrilltes Gemüse", fr: "légumes grillés" }],
  ["zucchero a velo", { en: "icing sugar", de: "Puderzucker", fr: "sucre glace" }],
];

const WORDS = {
  pomodoro: { en: "tomato", de: "Tomate", fr: "tomate" },
  pomodorini: { en: "cherry tomatoes", de: "Kirschtomaten", fr: "tomates cerises" },
  cipolle: { en: "onions", de: "Zwiebeln", fr: "oignons" },
  cipolla: { en: "onion", de: "Zwiebel", fr: "oignon" },
  salsiccia: { en: "sausage", de: "Wurst", fr: "saucisse" },
  peperoni: { en: "peppers", de: "Paprika", fr: "poivrons" },
  peperoncino: { en: "chilli", de: "Chili", fr: "piment" },
  tonno: { en: "tuna", de: "Thunfisch", fr: "thon" },
  capperi: { en: "capers", de: "Kapern", fr: "câpres" },
  olive: { en: "olives", de: "Oliven", fr: "olives" },
  funghi: { en: "mushrooms", de: "Pilze", fr: "champignons" },
  carciofi: { en: "artichokes", de: "Artischocken", fr: "artichauts" },
  acciughe: { en: "anchovies", de: "Sardellen", fr: "anchois" },
  zucchine: { en: "courgettes", de: "Zucchini", fr: "courgettes" },
  melanzane: { en: "aubergines", de: "Auberginen", fr: "aubergines" },
  mais: { en: "sweetcorn", de: "Mais", fr: "maïs" },
  patatine: { en: "fries", de: "Pommes", fr: "frites" },
  rucola: { en: "rocket", de: "Rucola", fr: "roquette" },
  miele: { en: "honey", de: "Honig", fr: "miel" },
  origano: { en: "oregano", de: "Oregano", fr: "origan" },
  basilico: { en: "basil", de: "Basilikum", fr: "basilic" },
  melone: { en: "melon", de: "Melone", fr: "melon" },
  verdure: { en: "vegetables", de: "Gemüse", fr: "légumes" },
  pere: { en: "pears", de: "Birnen", fr: "poires" },
  noci: { en: "walnuts", de: "Walnüsse", fr: "noix" },
  crema: { en: "cream", de: "Creme", fr: "crème" },
  salumi: { en: "cured meats", de: "Aufschnitt", fr: "charcuterie" },
  formaggi: { en: "cheeses", de: "Käse", fr: "fromages" },
  cozze: { en: "mussels", de: "Muscheln", fr: "moules" },
  vongole: { en: "clams", de: "Venusmuscheln", fr: "palourdes" },
  scoglio: { en: "seafood", de: "Meeresfrüchte", fr: "fruits de mer" },
  polpo: { en: "octopus", de: "Krake", fr: "poulpe" },
  manzo: { en: "beef", de: "Rind", fr: "bœuf" },
  carne: { en: "meat", de: "Fleisch", fr: "viande" },
  bufala: { en: "buffalo mozzarella", de: "Büffelmozzarella", fr: "mozzarella de bufflonne" },
  zola: { en: "gorgonzola", de: "Gorgonzola", fr: "gorgonzola" },
  // connectors
  e: { en: "and", de: "und", fr: "et" },
  con: { en: "with", de: "mit", fr: "avec" },
};

function cap(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

export function translateDesc(desc, lang) {
  if (!desc || lang === "it") return desc;
  if (OVERRIDES[desc] && OVERRIDES[desc][lang]) return OVERRIDES[desc][lang];

  let s = " " + desc.toLowerCase() + " ";
  for (const [it, tr] of PHRASES) {
    s = s.split(it).join(tr[lang]);
  }
  for (const [it, tr] of Object.entries(WORDS)) {
    const re = new RegExp(`(?<=[\\s,])${it}(?=[\\s,])`, "g");
    s = s.replace(re, tr[lang]);
  }
  return cap(s.trim());
}
