import {useState } from "react";

const useStepController = (size: number) => {
  const [currentStep, setCurrentStep] = useState(0);

  const toggleNextStep = () =>
    size > currentStep && setCurrentStep(currentStep + 1);

  const toggleBackStep = () =>
    currentStep > 0 && setCurrentStep(currentStep - 1);

  const toggleResetStep = () => setCurrentStep(0);

  return {
    currentStep,
    toggleNextStep,
    toggleBackStep,
    toggleResetStep
  };
};

export default useStepController;
