import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import countItemsByScreen from "../../utils/countItemsByScreen";

const useCountItemsByScreen = () => {
  const [itemsByScreen, setItemsByScreen] = useState(0);
  useEffect(() => {
    const handlerResize = () => {
      setItemsByScreen(countItemsByScreen(95, 220));
    };
    window.addEventListener("resize", handlerResize);
    handlerResize();
    return () => window.removeEventListener("resize", handlerResize);
  }, []);
  return { itemsByScreen, setItemsByScreen };
};

export default useCountItemsByScreen;
