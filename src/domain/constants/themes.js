import { Theme } from "../models";

export const THEMES = [
  new Theme({
    name: "Esperança",
    color: "#209441",
    buttoncolor: "#6BD476",
    image: "/button_dark/esperanca.png",
    fundo: "/screens/home_esperanca.png",
  }),
  new Theme({
    name: "Sabedoria",
    color: "#CB1E31",
    buttoncolor: "#6BD476",
    image: "/button_dark/sabedoria.png",
    fundo: "/screens/home_sabedoria.png",
  }),
  new Theme({
    name: "Confianca",
    color: "#7D4D8B",
    buttoncolor: "#CBAADE",
    image: "/button_dark/confianca.png",
    fundo: "/screens/home_confianca.png",
  }),
  new Theme({
    name: "Coragem",
    color: "#0580BB",
    buttoncolor: "#62B8DB",
    image: "/button_dark/coragem.png",
    fundo: "/screens/home_coragem.png",
  }),
  new Theme({
    name: "Amizade",
    color: "#E28C25",
    buttoncolor: "#78D1F1",
    image: "/button_dark/amizade.png",
    fundo: "/screens/home_amizade.png",
  }),
  new Theme({
    name: "Luz",
    color: "#EA7EB2",
    buttoncolor: "#CBAADE",
    image: "/button_dark/luz.png",
    fundo: "/screens/home_luz.png",
  }),
  new Theme({
    name: "Amor",
    color: "#62B8DB",
    buttoncolor: "#CBAADE",
    image: "/button_dark/amor.png",
    fundo: "/screens/home_amor.png",
  }),
  new Theme({
    name: "Sinceridade",
    color: "#F282B0",
    buttoncolor: "#CBAADE",
    image: "/button_dark/sinceridade.png",
    fundo: "/screens/home_sinceridade.png",
  }),
];

export const DEFAULT_THEME = new Theme({
  name: "sem_tema",
  color: "#34AC40",
  buttoncolor: "#34AC40",
  fundo: "/screens/sem_tema.png",
});

export const DEFAULT_BACKGROUND = "/screens/sem_tema.png";
export const DEFAULT_ICON = "/screens/theme.png";

