import components, {
  MNotes,
  MButton,
  MP,
  MMenu,
  MMenuItem,
  MPoppup,
  MDrop,
  MSlider,
  MForm,
  MInput,
  MSection,
} from "./components";

const install = (Vue: any) => {
  for (let componentName in components) {
    Vue.component(componentName, (components as any)[componentName]);
  }
};

export {
  install,
  MNotes,
  MButton,
  MP,
  MMenu,
  MMenuItem,
  MPoppup,
  MDrop,
  MSlider,
  MForm,
  MInput,
  MSection,
};
