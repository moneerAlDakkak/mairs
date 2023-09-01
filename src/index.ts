import * as components from "./components";

export const install = (Vue: any) => {
  for (let componentName in components) {
    Vue.component(componentName, (components as any)[componentName]);
  }
};

export const MNotes = components.MNotes;
export const MButton = components.MButton;
export const MP = components.MP;
export const MMenu = components.MMenu;
export const MPoppup = components.MPoppup;
export const MDrop = components.MDrop;
export const MSlider = components.MSlider;
export const MForm = components.MForm;
export const MInput = components.MInput;
export const MSection = components.MSection;
export const MText = components.MText;
export const MSelect = components.MSelect;
