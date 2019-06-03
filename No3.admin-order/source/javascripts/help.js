/*
 * @param node el: 當前 element 
 * @param string tagName: 想追蹤的 tagName
 * @output node el: 有特定 tagName 的 parentNode
 */
function upTo(el, tagName) {
  tagName = tagName.toLowerCase();

  while (el && el.parentNode) {
    el = el.parentNode;
    if (el.tagName && el.tagName.toLowerCase() == tagName) {
      return el;
    }
  }

  return null;
}