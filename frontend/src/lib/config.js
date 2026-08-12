// Central contact + brand configuration.
// NOTE: WhatsApp number derived from the number on the brand material
// (+39 0332 1313 742). Update `whatsappNumber` with the correct mobile
// WhatsApp line when available.
export const CONTACT = {
  name: "Circolo Vizioso di Dumenza",
  since: "1910",
  address: "Via XX Settembre 3, 21010 Dumenza (VA)",
  phoneDisplay: "+39 0332 1313 742",
  whatsappNumber: "393899074966",
  email: "primeasrl@gmail.com",
  instagram: "circoloviziosodm",
  instagramUrl: "https://instagram.com/circoloviziosodm",
  facebook: "circoloviziosodm",
  facebookUrl: "https://facebook.com/circoloviziosodm",
  website: "www.ilcircolovizioso.it",
  mapsUrl: "https://maps.google.com/?q=Via+XX+Settembre+3+21010+Dumenza",
};

export function phoneTel() {
  return `tel:${CONTACT.phoneDisplay.replace(/\s/g, "")}`;
}

// Event gallery photos (uploaded). Rendered black & white via `color:false`.
// Set `color:true` on the one photo that should stay in colour.
export const EVENT_IMAGES = [
  { id: 1, src: "/events/ev1.jpeg", imageSrc: "/events/ev1.jpeg", color: false, label: "Al bancone", title: "Serate al Circolo", description: "Il paese che si ritrova, un bicchiere alla volta." },
  { id: 2, src: "/events/ev2.jpeg", imageSrc: "/events/ev2.jpeg", color: false, label: "Spillatura", title: "Birra alla spina", description: "Selezione artigianale, sempre fresca." },
  { id: 3, src: "/events/ev3.jpeg", imageSrc: "/events/ev3.jpeg", color: false, label: "Grigliata", title: "Grigliate & feste", description: "Il profumo della brace nelle serate a tema." },
  { id: 4, src: "/events/ev4.jpeg", imageSrc: "/events/ev4.jpeg", color: false, label: "Le spine", title: "Convivialità", description: "Musica, risate e buona compagnia." },
  { id: 5, src: "/events/ev5.jpeg", imageSrc: "/events/ev5.jpeg", color: false, label: "Sulla piastra", title: "Cucina dal vivo", description: "Piatti preparati al momento, davanti a te." },
];

// Seating capacity limits used by the reservation form.
export const CAPACITY = { interno: 41, esterno: 20 };

export function whatsappLink(message) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const IMAGES = {
  heroVillage: "/hero-flame.webp",
  buildingWindows:
    "https://images.unsplash.com/photo-1651004314442-653e46dfc43c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  villageSquare:
    "https://images.unsplash.com/photo-1739193578627-cd49af05cd07?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  ovenFlame:
    "https://images.unsplash.com/photo-1606152196365-d1ce5ea838b5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  pizzaOven:
    "https://images.unsplash.com/photo-1607018244619-dab6235709dd?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  pizzaMargherita:
    "https://images.unsplash.com/photo-1680798671233-a6823e6e9a1e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  dishFlame: "/dish-flame.jpg",
  mountains:
    "https://images.unsplash.com/photo-1763981355481-b13d98e01b9a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  interiorKitchen:
    "https://images.unsplash.com/photo-1764253414255-2f5b3511a08a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  interiorTables:
    "https://images.unsplash.com/photo-1712630514718-3830cc6c0d0a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  steak:
    "https://images.pexels.com/photos/17615602/pexels-photo-17615602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  steakFries:
    "https://images.pexels.com/photos/27643017/pexels-photo-27643017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  stringLights:
    "https://images.pexels.com/photos/6861129/pexels-photo-6861129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  stringLights2:
    "https://images.pexels.com/photos/20670160/pexels-photo-20670160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  liveGuitar:
    "https://images.unsplash.com/photo-1553819282-f334e59ec713?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  acousticGuitar:
    "https://images.unsplash.com/photo-1621574277467-b3a8dce857f9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
};
