<script>
import { h } from "vue";

export default {
  props: {
    message: {
      type: String,
    },
  },
  render() {
    console.log("this.$slots.default()", this.$slots.default());
    return h(
      "div",
      this.$slots.default({
        text: this.message,
      })
    );
  },
};
</script>