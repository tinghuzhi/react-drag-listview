const closest = function(el, selector, rootNode) {
  let element = el;
  const matchesSelector = element.matches
                          || element.webkitMatchesSelector
                          || element.mozMatchesSelector
                          || element.msMatchesSelector;
  while (element) {
    const isRoot = element === rootNode || element === document.body;
    if (isRoot || matchesSelector.call(element, selector)) {
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

const getDomIndex = function(el) {
  return Array.from(el.parentNode.children).indexOf(el);
};

export { getScrollElement, closest, getDomIndex };
