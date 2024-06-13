import { useCallback } from "react";
const useHooks = () => {
  const fn = useCallback(() => {}, []);
  const fn2 = useCallback(() => {}, []);
  return {
    fn,
    fn2,
  };
};

() => {
  const fn2 = useCallback(() => {
    switch (1) {
      case 1:
        break;

      default:
        break;
    }
  }, []);
};
