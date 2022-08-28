<template>
  <section :class="`MNOTES`" v-show="notes.length">
    <transition-group :name="animation ? animation : 'slide-right'">
      <div
        v-for="note in notes"
        :key="note.title"
        :class="`MNOTE ${note.accent ? 'accent' : ''}`"
        @click="goToLink(note.to)"
      >
        <b>
          <i v-if="note.iconStart" :class="note.iconStart"></i>
          {{ note.title }}
        </b>
        <MP autoDirection math>{{ note.message }}</MP>
        <a v-if="note.href" :href="note.href" ref="a"></a>
      </div>
    </transition-group>
  </section>
</template>

<script>
import MP from "./MP.vue";
export default {
  name: "MNotes",
  components: { MP },
  data() {
    return {
      notes: [],
    };
  },
  props: {
    animation: String,
    timeout: {
      type: [Number, String],
      default: 10000,
    },
  },
  methods: {
    add(note) {
      this.notes.push(note);
      setTimeout(() => {
        this.notes.shift();
      }, note.timeout || this.timeout);
    },
    goToLink(to) {
      if (to) {
        this.$router.push(to);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../m" as *;
@include m-animation-slide("slide-right", 100%, 0, 0.2s);
section {
  z-index: 100;
  position: fixed;
  right: 0;
  bottom: 0;
  height: fit-content;
  overflow: hidden;
  padding: 6px;
  width: 300px;
  max-width: 100%;
  display: flex;
  flex-flow: column-reverse;
  gap: 6px;

  div {
    cursor: pointer;
    border: 2px solid m-change-opacity("text", -0.9);
    background-color: m-change-opacity("main", -0.01);
    color: $color_text;
    &.accent {
      border: 2px solid m-change-opacity("accent", -0.9);
      background-color: m-change-opacity("accent", -0.01);
      color: $color_onAccent;
    }
    border-radius: min($ui_radius, 20px);
    padding: 16px 14px;
    max-width: 100%;
    max-height: 200px;
    b {
      i {
        @include margin-end(10px);
      }
    }
    a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    p {
      font-size: 0.94em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
