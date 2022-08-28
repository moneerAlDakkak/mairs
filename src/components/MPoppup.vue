<template>
  <div
    v-if="isOpen"
    @click.self="closeIfNotRequired"
    :class="`MPOPPUP ${blurred ? 'm-blurred' : ''}`"
  >
    <dialog open>
      <h3>{{ title }}</h3>
      <p>
        {{ message }}
      </p>
      <slot></slot>
      <section>
        <m-button bordered v-if="cancel" @click="respond(false)">
          {{ cancel }}
        </m-button>
        <m-button v-if="confirm" @click="respond(true)">
          {{ confirm }}
        </m-button>
      </section>
    </dialog>
  </div>
</template>

<script>
import MButton from "./MButton.vue";
export default {
  name: "popup",
  components: { MButton },
  props: {
    notRequired: {
      type: Boolean,
      default: false,
    },
    blurred: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      resolvePromise: undefined,
      rejectPromise: undefined,
      isOpen: false,
      title: "",
      message: "",
      confirm: "",
      cancel: "",
    };
  },
  methods: {
    show({ title, message, confirm, cancel }) {
      this.title = title ? title : "";
      this.message = message ? message : "";
      this.confirm = confirm ? confirm : "";
      this.cancel = cancel ? cancel : "";

      this.isOpen = true;
      return new Promise((resolve, reject) => {
        this.resolvePromise = resolve;
        this.rejectPromise = reject;
      });
    },
    respond(decision) {
      this.isOpen = false;
      this.resolvePromise(decision);
    },
    closeIfNotRequired() {
      if (this.notRequired) {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../m" as *;
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
    background-color: $color_main;
    color: $color_text;
    padding: 20px 26px;
    font-size: 1em;
    max-width: 100%;
    min-width: min(400px, 96%);
    border-radius: min($ui_radius, 20px);
    border: none;
    outline: none;
    box-shadow: 0 1px 4px 0 m-change-opacity("text", -0.8);
    p {
      width: 2rem 0;
    }
    section {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      margin: 20px 0 0;
    }
  }
}
</style>
