import { Theme } from "../../domain/models";
import { DEFAULT_BACKGROUND } from "../../domain/constants";

export const getBackgroundStyle = (theme) => {
  const themeInstance = theme instanceof Theme ? theme : new Theme(theme);
  
  return {
    backgroundImage: `url(${themeInstance.fundo || DEFAULT_BACKGROUND})`,
    backgroundPosition: themeInstance.isDefault ? "right" : "center",
    backgroundSize: themeInstance.isDefault ? "inherit" : "cover",
  };
};

export const getTextColorClass = (theme, defaultClass = "text-white") => {
  const themeInstance = theme instanceof Theme ? theme : new Theme(theme);
  return themeInstance.isDefault ? "text-gray" : defaultClass;
};

