// Vue Imports :
import MNotes from "./components/MNotes.vue";
import MButton from "./components/MButton.vue";
import MP from "./components/MP.vue";
import MMenu from "./components/MMenu.vue";
import MMenuItem from "./components/MMenuItem.vue";
import MPoppup from "./components/MPoppup.vue";
import MDrop from "./components/MDrop.vue";
import MSlider from "./components/MSlider.vue";
import MForm from "./components/MForm.vue";
import MInput from "./components/MInput.vue";
import MSection from "./components/MSection.vue";

let components = {
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

function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj;
}

const install = (Vue: any) => {
  for (let componentName in components) {
    if (hasKey(components, componentName)) {
      Vue.component(componentName, components[componentName]);
    }
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
