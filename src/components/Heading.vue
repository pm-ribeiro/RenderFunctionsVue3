<script>
// h => hyperscript
import { h } from "vue";

export default {
  props: {
    level: {
      default: 1
    }
  },

  setup({level}, {slots}) {
    const slot = slots.default ? slots.default() : [];

    const modifiedSlot = slot.map(({children}) => {
      return h(
        "div",
        { style: "color : purple"},
        children
      );
    })

    // params: html element, attrs, "children"
    return () => h(`h${level}`, {}, modifiedSlot);
  }
};
</script>