import { useCallback } from "react";
const useHooks = () => {
  const scene4 = useCallback(() => {}, []);
  const scene6 = useCallback(() => {}, []);
  // 一直到16

  const fn2 = useCallback((num: number) => {
    switch (num) {
      case 4:
        scene4;
        break;
      case 6:
        scene6;
        break;
      case 7:
        break;
      case 8:
        break;
      case 9:
        break;
      case 10:
        break;
      case 11:
        break;
      case 12:
        break;
      case 13:
        break;
      case 14:
        break;
      case 15:
        break;
      case 16:
        break;

      default:
        break;
    }
  }, []);

  return {
    scene4,
    scene6,
  };
};
