import { useEffect, useState } from "react";
import stepList from "./stepList";
import useStepController from "./useStepController";

const useAboutState = () => {

  return {
    stepList,
    ...useStepController(stepList.length)
  };
};

export default useAboutState;
