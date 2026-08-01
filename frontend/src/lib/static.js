// When the URL carries ?static=1 we render final (post-entrance) states so the
// page can be captured/verified without waiting for motion. No effect in prod.
export const IS_STATIC =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("static");
