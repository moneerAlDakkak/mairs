<template>
  <form class="MFORM">
    <slot></slot>
  </form>
</template>

<script lang="ts">
export default {
  name: "MForm",
};
</script>

<script lang="ts" setup>
import { reactive } from "vue";

const invalids_IDs: string[] = reactive([]);

function registerToInvalids(inputId: string) {
  if (!invalids_IDs.includes(inputId)) {
    invalids_IDs.push(inputId);
  }
}
function removeFromInvalids(inputId: string) {
  invalids_IDs.splice(
    invalids_IDs.findIndex((i) => i == inputId),
    1
  );
}
function checkValidation() {
  if (invalids_IDs.length !== 0) {
    document.getElementById(invalids_IDs[0])?.scrollIntoView();
  }
  return invalids_IDs.length === 0;
}

defineExpose({
  registerToInvalids,
  removeFromInvalids,
  checkValidation,
});
</script>
