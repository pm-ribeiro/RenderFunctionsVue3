<script >
// referencia: https://javascript.plainenglish.io/vue-3-more-complex-render-functions-6ebf177d8170
import { h } from "vue";

export default {
  props: ["modelValue"],
  render() {
    return h("input", {
      style: {
        border: "1px solid grey",
        "border-radius": "4px",
        padding: "14px",
        width: "300px",
      },
      placeholder: "type something...",
      modelValue: this.modelValue,
      onInput: (ev) => this.$emit("update:modelValue", ev.target.value),
    });
  },
};
</script>