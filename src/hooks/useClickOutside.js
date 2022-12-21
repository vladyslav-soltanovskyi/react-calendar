import { useCallback, useEffect } from "react";

export const useClickOutside = (ref, callback) => {
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