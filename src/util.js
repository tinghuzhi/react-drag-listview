/* global Element */

if (typeof Element !== 'undefined' && !Element.prototype.matches) {
  var proto = Element.prototype;
  proto.matches = proto.matchesSelector ||
      proto.mozMatchesSelector || proto.msMatchesSelector ||
      proto.oMatchesSelector || proto.webkitMatchesSelector;
}

const closest = function(el, selector, rootNode) {
  let element = el;
  while (element) {
    const isRoot = element === rootNode || element === document.body;
    if (isRoot || (element.nodeType === 1 && element.matches(selector))) {
      if (isRoot) {
        element = null;
      }
      break;
    }
    element = element.parentNode;
  }
  return element;
};

const getScrollElement = function(el) {
  let element = el;
  do {
    const { overflow } = window.getComputedStyle(element);
    if ((overflow === 'auto' || overflow === 'scroll')
        && (element && element.nodeType
            && (element.offsetWidth < element.scrollWidth
                || element.offsetHeight < element.scrollHeight))) {
      break;
    }
    if (!element || !element.nodeType || element === document.body) {
      element = null;
      break;
    }
    element = element.parentNode;
  } while (element);
  return element;
};

const getDomIndex = function(el, ignoreSelectors) {
  return Array.from(el.parentNode.children)
    .filter(e => (ignoreSelectors === '' ? true : !e.matches(ignoreSelectors)))
    .indexOf(el);
};

const isTouchScreen = function() {
  return window.navigator.maxTouchPoints > 0;
};

export { getScrollElement, closest, getDomIndex, isTouchScreen };
