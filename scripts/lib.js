/**
 * Checks if an element with the given ID could be found
 */
export function assertThatFound(element, id) {
  if (!element)
    throw new Error("Element with ID '"+id+"' not found.");
}
