import { useCallback, useLayoutEffect, useState } from 'react';

const getDimensions = (element: HTMLElement) => element.getBoundingClientRect();

export function useDimensions(responsive = true) {
  const [dimensions, setDimensions] = useState<DOMRect | null>(null);
  const [element, setElement] = useState<HTMLElement | null>(null);

  const hook = useCallback((el) => setElement(el), [setElement]);

  useLayoutEffect(() => {
    if (element) {
      const updateDimensions = () => {
        window.requestAnimationFrame(() => {
          setDimensions(getDimensions(element));
        });
      };

      updateDimensions();

      if (responsive) {
        window.addEventListener('resize', updateDimensions);

        return () => {
          window.removeEventListener('resize', updateDimensions);
        };
      }
    }
  }, []);

  return [hook, dimensions, element];
}
