<script>
// h => hyperscript
import { h } from "vue";

export default {
  props: {
    level: {
      default: 1
    }
  },

  setup({level}) {
    // params: html element, attrs, "children"
    return () => h(`h${level}`, {}, `Dynamic Heading! h${level}`);
  }
};
</script>