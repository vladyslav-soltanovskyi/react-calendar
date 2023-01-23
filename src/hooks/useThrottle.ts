import { useCallback, useRef } from "react";

export const useThrottle = <Callback extends Function>(callback: Callback, delay: number = 300) => {
  const isThrottled = useRef(null);

  const throttledCallback = useCallback((...args) => {
    if(isThrottled.current) {
      return;
    }
    callback(...args);
    isThrottled.current = true;
    setTimeout(() => isThrottled.current = false, delay);
  }, [callback, delay]);

  return throttledCallback;
}