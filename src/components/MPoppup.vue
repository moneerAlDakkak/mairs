<template>
  <dialog
    :class="{
      MPOPPUP: !unstyled,
      'm-blurred': blurred,
      'm-mobile': mobile,
      'm-hiding': isHiding,
    }"
    ref="MPOP"
    @click.self="close()"
    v-show="isOpen"
  >
    <div>
      <!-- Template for show with options - upper section -->
      <b v-if="poppupMsg.title">{{ poppupMsg.title }}</b>
      <MP v-if="poppupMsg.message">
        {{ poppupMsg.message }}
      </MP>

      <slot></slot>
      <!-- Template for show with options - lower section -->
      <section v-if="poppupMsg.cancel || poppupMsg.confirm">
        <MButton bordered v-if="poppupMsg.cancel" @click="respond(false)">
          {{ poppupMsg.cancel }}
        </MButton>
        <MButton v-if="poppupMsg.confirm" @click="respond(true)">
          {{ poppupMsg.confirm }}
        </MButton>
      </section>
    </div>
  </dialog>
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
import { withDefaults, ref, onMounted, onUnmounted } from "vue";

export interface PoppupMsg {
  title?: string;
  message?: string;
  confirm?: string;
  cancel?: string;
}

// Define props
const props = withDefaults(
  defineProps<{
    required?: boolean;
    blurred?: boolean;
    mobile?: boolean;
    unstyled?: boolean;
  }>(),
  {}
);
// Component vars
let poppupMsg = ref<PoppupMsg>({});
const MPOP = ref<HTMLDialogElement>();
const isOpen = ref(false);
const isHiding = ref(false);
let observer: MutationObserver;
let resolvePromise: any = ref(undefined);
let rejectPromise: any = ref(undefined);
// Component Methods

onMounted(() => {
  observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "attributes" && mutation.attributeName === "open") {
        isOpen.value = MPOP.value?.hasAttribute("open") || false;
      }
    }
  });
  if (MPOP.value) observer.observe(MPOP.value, { attributes: true });
});

onUnmounted(() => {
  observer.disconnect();
});

function show(options?: PoppupMsg): Promise<boolean> {
  if (options) poppupMsg.value = options;
  MPOP.value?.showModal();
  isOpen.value = true;
  return new Promise((resolve, reject) => {
    resolvePromise.value = resolve;
    rejectPromise.value = reject;
  });
}
function close() {
  if (!props.required) return respond(false);
}

function respond(decision: boolean) {
  resolvePromise.value(decision);
  isHiding.value = true;
  if (MPOP.value) MPOP.value.open = false;
  setTimeout(() => {
    if (MPOP.value) MPOP.value.open = true;
    MPOP.value?.close();
    isHiding.value = false;
  }, 500);
}

defineExpose({
  show,
  close,
  respond,
});
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;
dialog.MPOPPUP {
  background-color: $color_box;
  color: $color_text;
  font-size: 1em;
  max-width: 100%;
  min-width: min(400px, 96%);
  border-radius: min($ui_radius, 20px);
  border: none;
  outline: none;
  padding: 0;
  overflow: auto;
  display: block;
  inset: 0;
  z-index: 99;
  // Backdrop styles
  &.m-hiding::backdrop {
    animation: fade-out 0.5s ease;
  }
  &::backdrop {
    background: rgba(0, 0, 0, 0.6);
    animation: fade-in 0.5s ease;
  }
  &.m-blurred::backdrop {
    backdrop-filter: blur(6px);
  }
  // Template styles
  div {
    padding: 1.5rem;
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    overflow: auto;
    b {
      font-size: 1.4em;
    }
    p {
      width: 2rem 0;
      margin: 0;
    }
    section {
      display: flex;
      flex-flow: row wrap;
      gap: 1rem;
    }
  }
}
// Mobile Style
@media (max-width: 768px) {
  dialog.m-mobile {
    width: 100%;
    bottom: 0;
    margin: 0;
    inset-block-start: auto;
    border-radius: min($ui_radius, 20px) min($ui_radius, 20px) 0 0;
  }
}
// Backdrop Animation
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
