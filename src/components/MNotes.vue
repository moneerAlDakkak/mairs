<template>
  <aside
    :class="`MNOTES m-${position}`"
    :style="notes.length ? '' : 'pointer-events: none'"
  >
    <transition-group :name="animation ? animation : `slide-${position}`">
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
        <MP :autoDirection="autoDirection" :math="math">{{ note.message }}</MP>
      </div>
    </transition-group>
  </aside>
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
    position: "top" | "right" | "bottom" | "left";
    autoDirection?: boolean;
    math?: boolean;
  }>(),
  {
    position: "right",
  }
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
@include m-animation-slide("slide-left", -100%, 0, 0.2s);
@include m-animation-slide("slide-top", 0, -100%, 0.2s);
@include m-animation-slide("slide-bottom", 0, 100%, 0.2s);
aside {
  z-index: 100;
  position: fixed;
  height: fit-content;
  overflow: hidden;
  padding: 0.5rem;
  width: 300px;
  max-width: 600px;
  display: flex;
  flex-flow: column-reverse;
  gap: 0.5rem;
  &.m-right {
    @include m-horizon-end(0);
    bottom: 0;
  }
  &.m-left {
    @include m-horizon-start(0);
    bottom: 0;
  }
  &.m-top {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
  &.m-bottom {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
  div {
    cursor: pointer;
    background-color: $color_box;
    box-shadow: 0 0 1px 0 $color_accent inset;
    color: $color_text;
    border-radius: min($ui_radius, 20px);
    padding: 1.2rem;
    max-width: 100%;
    max-height: 200px;
    &.m-safe {
      @include setColor("accent", $color_safe);
    }
    &.m-warning {
      @include setColor("accent", $color_warning);
    }
    &.m-danger {
      @include setColor("accent", $color_danger);
    }
    b {
      font-size: 0.92em;
      display: flex;
      align-items: center;
      align-content: center;
      gap: 1rem;
      color: $color_accent;
    }
    p {
      font-size: 0.8em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 1rem 0 0;
    }
  }
}
</style>
