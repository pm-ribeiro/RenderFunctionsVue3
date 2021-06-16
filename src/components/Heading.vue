<script>
// h => hyperscript
import { h } from "vue";

export default {
  props: {
    level: {
      default: 1,
    },
  },

  setup({ level }, { slots }) {
    const slot = slots.default ? slots.default() : [];

    console.log("slot =", slot);

    const modifiedSlot = slot.map(({ children }) => {
      return h("div", { style: "color : blue; font-weight: bold" }, children);
    });

    // params: html element, attrs, "children"
    return () => h(`h${level}`, modifiedSlot);
  },
};
</script>