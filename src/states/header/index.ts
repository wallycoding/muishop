import { useRouter } from "next/router";
import ThemesEntity from "../../domain/entities/ThemesEntity";
import { useThemeSelector } from "../../providers/ThemeSelectorProvider";
import useMenuNavigator from "./useMenuNavigator";

const useHeaderState = () => {
  const { currentTheme, setCurrentTheme } = useThemeSelector();
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === ThemesEntity.Dark ? ThemesEntity.Light : ThemesEntity.Dark);

  return {
    toggleTheme,
    currentTheme,
    setCurrentTheme,
    ...useMenuNavigator(),
  };
};

export default useHeaderState;
