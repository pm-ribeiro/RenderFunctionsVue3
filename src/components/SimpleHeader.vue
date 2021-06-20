<script>
import { h } from "vue";

export default {
  props: {
    level: {
      default: 1,
    },
  },

  setup(props) {
    console.log("props", props);
    // params: html element, attrs, "children"
    return () =>
      h(
        `h${props.level}`,
        { style: "border: 1px dashed grey; margin: 32px; padding: 16px 32px" },
        `A simple Header! <h${props.level}>`
      );
  },
};
</script>