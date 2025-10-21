/**
 * Smooth scroll utilities for enhanced user experience
 */

export const scrollToElement = (
  elementId: string,
  options: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'start',
  }
): boolean => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView(options);
    return true;
  }
  return false;
};

export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    behavior,
  });
};

export const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior,
  });
};

export const scrollToPosition = (
  position: number,
  behavior: ScrollBehavior = 'smooth'
) => {
  window.scrollTo({
    top: position,
    behavior,
  });
};

export const getScrollPosition = (): number => {
  return window.pageYOffset || document.documentElement.scrollTop;
};

export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const getElementCenterPosition = (elementId: string): number | null => {
  const element = document.getElementById(elementId);
  if (!element) return null;

  const rect = element.getBoundingClientRect();
  return rect.top + window.pageYOffset + rect.height / 2;
};

export const scrollToElementCenter = (elementId: string): boolean => {
  const centerPosition = getElementCenterPosition(elementId);
  if (centerPosition !== null) {
    scrollToPosition(centerPosition - window.innerHeight / 2);
    return true;
  }
  return false;
};
