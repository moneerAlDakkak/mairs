<template>
  <section :class="`MNOTES`" v-show="notes.length">
    <transition-group :name="animation ? animation : 'slide-right'">
      <div
        v-for="note in notes"
        :key="note.title"
        :class="`MNOTE ${note.status ? 'm-' + note.status : ''}`"
        @click="note.handler ? note.handler() : null"
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

<script lang="ts">
import MP from "./MP.vue";
export default {
  name: "MNotes",
  components: { MP },
};
</script>

<script lang="ts" setup>
import { ref, withDefaults } from "vue";

export interface Note {
  id?: number;
  title: string;
  message: string;
  icon?: string;
  status?: string;
  handler?: () => void;
  timeout?: number;
}

const notes = ref<Note[]>([]);

const props = withDefaults(
  defineProps<{
    animation?: string;
    timeout?: number;
  }>(),
  {}
);
const lastNoteId = ref(0);
function add(note: Note) {
  note.id = ++lastNoteId.value;
  notes.value.push(note);
  if (note.timeout || props.timeout) {
    setTimeout(() => {
      notes.value.splice(
        notes.value.findIndex((n) => n.id == note.id),
        1
      );
    }, note.timeout || props.timeout);
  }
}

defineExpose({
  add,
});
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;
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
  gap: m-ui-grid(0.5);
  div {
    cursor: pointer;
    border: 2px solid m-adjust-color("text", $alpha: -90%);
    background-color: $color_box;
    background-image: linear-gradient(
      0,
      m-change-color("accent", $alpha: 0.3) 0,
      m-change-color("accent", $alpha: 0.3) 100%
    );
    color: $color_text;
    border-radius: min($ui_radius, 20px);
    padding: m-ui-grid(1.5);
    max-width: 100%;
    max-height: 200px;
    &.m-safe {
      @include setColor("accent", $color_safe);
    }
    &.m-warning {
      @include setColor("accent", $color_warning);
      @include setColor("onAccent", #111);
    }
    &.m-danger {
      @include setColor("accent", $color_danger);
    }
    b {
      display: flex;
      align-items: center;
      align-content: center;
      gap: m-ui-grid();
      color: $color_accent;
    }
    p {
      font-size: 0.94em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: m-ui-grid() 0 0;
    }
  }
}
</style>
