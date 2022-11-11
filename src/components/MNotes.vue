<template>
  <section :class="`MNOTES`" v-show="notes.length">
    <transition-group :name="animation ? animation : 'slide-right'">
      <div
        v-for="note in notes"
        :key="note.title"
        :class="`MNOTE ${note.status ? 'm-' + note.status : ''}`"
        @click="note.handler()"
      >
        <b>
          <i v-if="note.icon" :class="note.icon"></i>
          {{ note.title }}
        </b>
        <MP autoDirection math>{{ note.message }}</MP>
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
  },
};
</script>

<style lang="scss" scoped>
@use "../../sass" as *;
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
    border: 2px solid m-adjust-color("text", $alpha: -90%);
    background-color: $color_box;
    color: $color_text;
    border-radius: min($ui_radius, 20px);
    padding: 17px 15px;
    max-width: 100%;
    max-height: 200px;
    box-shadow: 0 0 2px 0 m-adjust-color("text", $alpha: -0.8);
    b {
      display: flex;
      align-items: center;
      align-content: center;
      gap: 15px;
      &:is(.m-safe b) {
        color: $color_safe;
      }
      &:is(.m-warning b) {
        color: $color_warning;
      }
      &:is(.m-danger b) {
        color: $color_danger;
      }
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
