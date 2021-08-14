/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useLayoutEffect, useState } from 'react';

const getDimensions = (element: HTMLElement) => element.getBoundingClientRect();

export function useDimensions(
  responsive = true,
): [(el: any) => void, DOMRect, HTMLElement] {
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
  }, [element, responsive, hook]);

  return [
    hook as (el: any) => void,
    dimensions as DOMRect,
    element as HTMLElement,
  ];
}
