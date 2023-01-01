import { useCallback, useEffect, RefObject, MouseEvent } from "react";

type Handler = (event: MouseEvent) => void

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: Handler
): void => {
  const handler = useCallback((e) => {
    const path = e.composedPath && e.composedPath();
    
    if (path && ref.current && !path.includes(ref.current)) {
      callback(e);
    }
  }, [ref, callback]);

  useEffect(() => {
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [handler]);
}