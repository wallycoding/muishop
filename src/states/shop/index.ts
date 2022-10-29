import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import countItemsByScreen from "../../utils/countItemsByScreen";
import useCountItemsByScreen from "./useCountItemsByScreen";

const useShopState = () => {
  const router = useRouter();
  const [showBackdrop, setShowBackdrop] = useState(false);
  return {
    router,
    showBackdrop, setShowBackdrop,
    ...useCountItemsByScreen(),
  };
};

export default useShopState;
