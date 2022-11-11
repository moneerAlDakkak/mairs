export default {
  props: {
    safe: Boolean,
    warning: Boolean,
    danger: Boolean,
  },
  computed: {
    statusClass() {
      let status = "";
      if (this.safe) status = "m-safe";
      if (this.warning) status = "m-warning";
      if (this.danger) status = "m-danger";
      return status;
    },
  },
};
