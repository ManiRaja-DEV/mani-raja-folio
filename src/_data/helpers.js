export function getLinkActiveState(pageUrl, itemUrl = "/") {
  return itemUrl === pageUrl ? "aria-current='page'" : "";
}
