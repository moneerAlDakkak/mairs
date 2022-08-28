import { parseColors } from "./helpers/color_converting";
import { COLORS, COLORS_PARSED, FONTS, NEW_THEME } from "./helpers/interfaces";

interface ALL_THEMES {
  [propName: string]: MTheme;
}

class MTheme {
  static #styleTag: HTMLElement;
  static #allThemes: ALL_THEMES = {};
  name: string;
  radius: number;
  fonts: FONTS;
  #colors: COLORS_PARSED = { main: [], accent: [], onAccent: [], text: [] };

  constructor(newTheme: NEW_THEME) {
    this.name = newTheme.name;
    this.radius = newTheme.radius || 0;
    this.fonts = newTheme.fonts || { en: "", ar: "" };
    // parse colors to number arrays :
    this.#colors = parseColors(newTheme.colors);
    // add the new created theme to allThemes :
    MTheme.#allThemes[newTheme.name] = this;
    // create a style tag if there is not any
    let styleTag = document.getElementById("M_THEME");
    if (!styleTag) {
      let newStyleTag = document.createElement("style");
      newStyleTag.id = "M_THEME";
      document.body.appendChild(newStyleTag);
    }
    MTheme.#styleTag = document.getElementById("M_THEME") as HTMLElement;
  }

  static apply(themeName: string): void {
    MTheme.#allThemes[themeName].apply();
  }

  apply(): void {
    // Remove previous themes
    MTheme.#styleTag.innerHTML = "";
    document.body.className = document.body.className
      .split(" ")
      .filter((n) => !n.includes("m-theme"))
      .join(" ");
    // Add the new one
    document.body.classList.add(`m-theme-${this.name}`);

    MTheme.#styleTag.innerHTML += `.m-theme-${this.name}{ --m-ui-radius: ${this.radius}px }`;
    MTheme.#styleTag.innerHTML += `.m-theme-${this.name}{ --m-font-en: ${this.fonts.en} }`;

    this.fonts.ar
      ? (MTheme.#styleTag.innerHTML += `.m-theme-${this.name}{ --m-font-ar: ${this.fonts.ar} }`)
      : null;

    for (let colorName in this.#colors) {
      MTheme.#styleTag.innerHTML += `.m-theme-${this.name}{
         --m-color-${colorName}-h: ${this.#colors[colorName][0]};
         --m-color-${colorName}-s: ${this.#colors[colorName][1]}%;
         --m-color-${colorName}-l: ${this.#colors[colorName][2]}%;
         --m-color-${colorName}-a: ${this.#colors[colorName][3]};
         --m-color-${colorName}: hsla(${this.#colors[colorName][0]},
          ${this.#colors[colorName][1]}%,
          ${this.#colors[colorName][2]}%,
          ${this.#colors[colorName][3]});
       }`;
    }
  }
}

const install = (Vue: any) => {
  Vue.config.globalProperties.$MTheme = MTheme;
};

// Vue Imports :
import {
  MSlider,
  MNotes,
  MButton,
  MP,
  MMenu,
  MMenuItem,
  MPoppup,
  MDrop,
  MForm,
  MInput,
} from "./components";

export {
  MTheme,
  install,
  MSlider,
  MNotes,
  MButton,
  MP,
  MMenu,
  MMenuItem,
  MPoppup,
  MDrop,
  MForm,
  MInput,
};
