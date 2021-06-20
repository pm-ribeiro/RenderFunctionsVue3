<script>
// 1. Create Basic Div
// 2. create basic layout
// map through data
// click handlers
// v-if error
// default slots

import { h, ref } from "vue";

export default {
  setup(_, { slots }) {
    let inputValue = ref(null),
      shows = ref(null),
      error = ref(null);

    // API that searchs the shows...
    const searchText = async (search) => {
      if (!search) return;
      console.log("got here", search);

      const searchT = await fetch(
        `http://api.tvmaze.com/search/shows?q=${search}`
      ).catch((e) => {
        error.value = "error" + e;
        console.log("Got error: ", error.value);
        return;
      });

      shows.value = await searchT.json().catch((e) => (error.value = e));
      console.log("Show = ", shows.value);
    };

    const scopedSlot = (show) => (slots.sc ? slots.sc(show) : []);

    return () =>
      h(
        "form",
        {
          style: "max-width: 768px; margin: auto",
          onSubmit: (event) => event.preventDefault(),
        },
        // Children
        [
          // scoped slots
          scopedSlot({ shows: shows.value }),

          // The input field
          h("input", {
            style: {
              border: "1px solid grey",
              borderRadius: "4px",
              padding: "12px",
              width: "300px",
            },
            placeholder: "Type the show name...",
            onInput: (event) => {
              {
                inputValue = event.target.value;
                // console.log(inputValue); // Just a test
              }
            },
          }),
          // The search button
          h(
            "button",
            {
              class: "primary-button",
              onClick: async () => {
                searchText(inputValue);
              },
            },
            "search"
          ),

          // Display the shows or a error
          h("div", { class: "shows" }, [
            error.value
              ? h("div", error.value)
              : shows.value?.map((show) =>
                  h("div", { class: "show" }, [
                    h("h3", show.show.name),
                    h("img", { src: show.show.image?.medium }),
                  ])
                ),
          ]),
        ]
      );
  },
};
</script>

<style>
.show {
  margin: 10px;
  min-width: 210px;
}

.shows {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.primary-button {
  border: 1px solid grey;
  border-radius: 4px;
  padding: 12px 20px;
  margin-left: 24px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  cursor: pointer;
}
</style>