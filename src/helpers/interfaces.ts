export interface COLORS {
  // Library's essential colors :
  main: string;
  accent: string;
  text: string;
  onAccent: string;
  // Theme object can have other colors that the user might want to add
  [propName: string]: string;
}

export interface COLORS_PARSED {
  main: number[];
  accent: number[];
  text: number[];
  onAccent: number[];
  [propName: string]: number[];
}

export interface FONTS {
  en: string;
  ar?: string;
}

export interface NEW_THEME {
  name: string;
  colors: COLORS;
  radius?: number;
  fonts?: FONTS;
}
