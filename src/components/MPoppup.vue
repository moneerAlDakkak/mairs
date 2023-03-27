<template>
  <div
    v-if="isOpen"
    @click.self="closeIfNotRequired"
    :class="`MPOPPUP ${blurred ? 'm-blurred' : ''}`"
  >
    <dialog open>
      <b v-if="poppupMsg.title">{{ poppupMsg.title }}</b>
      <m-p v-if="poppupMsg.message">
        {{ poppupMsg.message }}
      </m-p>
      <slot></slot>
      <section v-if="poppupMsg.cancel || poppupMsg.confirm">
        <m-button bordered v-if="poppupMsg.cancel" @click="respond(false)">
          {{ poppupMsg.cancel }}
        </m-button>
        <m-button v-if="poppupMsg.confirm" @click="respond(true)">
          {{ poppupMsg.confirm }}
        </m-button>
      </section>
    </dialog>
  </div>
</template>

<script lang="ts">
import MButton from "./MButton.vue";
import MP from "./MP.vue";
export default {
  name: "MPopup",
  components: { MButton, MP },
};
</script>
<script lang="ts" setup>
import { withDefaults, ref } from "vue";

export interface PoppupMsg {
  title?: string;
  message?: string;
  confirm?: string;
  cancel?: string;
}

// Defin props
const props = withDefaults(
  defineProps<{
    required?: boolean;
    blurred?: boolean;
  }>(),
  {}
);
// Component vars
let poppupMsg: PoppupMsg;

let resolvePromise: any = ref(undefined);
let rejectPromise: any = ref(undefined);
let isOpen = ref(false);

// Component Methods

function show(options?: PoppupMsg): Promise<boolean> {
  if (options) {
    poppupMsg = options;
  }
  isOpen.value = true;
  return new Promise((resolve, reject) => {
    resolvePromise.value = resolve;
    rejectPromise.value = reject;
  });
}
function respond(decision: boolean) {
  isOpen.value = false;
  resolvePromise.value(decision);
}
function closeIfNotRequired() {
  if (!props.required) {
    isOpen.value = false;
  }
}

defineExpose({
  show,
  respond,
});
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;
div {
  z-index: 10;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &.m-blurred {
    backdrop-filter: blur(6px);
  }
  dialog {
    background-color: $color_box;
    color: $color_text;
    padding: m-ui-grid(1.5);
    font-size: 1em;
    max-width: 100%;
    min-width: min(400px, 96%);
    border-radius: min($ui_radius, 20px);
    border: none;
    outline: none;
    display: flex;
    flex-flow: column nowrap;
    gap: m-ui-grid();
    b {
      font-size: 1.2em;
    }
    p {
      width: 2rem 0;
      margin: 0;
    }
    section {
      display: flex;
      flex-flow: row wrap;
      gap: m-ui-grid();
    }
  }
}
</style>
