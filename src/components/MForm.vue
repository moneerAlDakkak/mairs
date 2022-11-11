<template>
  <form class="MFORM">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "MForm",
  data() {
    return {
      invalids_IDs: [], // Only MInputs that support pattern
    };
  },
  methods: {
    registerToInvalids(inputId) {
      if (!this.invalids_IDs.includes(inputId)) {
        this.invalids_IDs.push(inputId);
      }
    },
    removeFromInvalids(inputId) {
      this.invalids_IDs.splice(
        this.invalids_IDs.findIndex((i) => i == inputId),
        1
      );
    },
    checkValidation() {
      if (this.invalids_IDs.length !== 0) {
        document.getElementById(this.invalids_IDs[0]).scrollIntoView();
      }
      return this.invalids_IDs.length === 0;
    },
  },
};
</script>
