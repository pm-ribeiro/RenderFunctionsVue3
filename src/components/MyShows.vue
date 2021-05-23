<script>

import {h, ref} from "vue";

export default {
  setup(_, {slots}) {
    let inputValue = ref(null),
        shows = ref(null),
        error = ref(null);

    const searchText = async search => {
      if (!search) return;
      console.log('got here', search);

      const searchT = await fetch(
        `http://api.tvmaze.com/search/shows?q=${search}`
      ).catch(e => {
        error.value = "error" + e;
        console.log("Got error: ", error.value);
        return;
      });

      shows.value = await searchT.json().catch(e => (error.value = e));
      console.log('Show = ', shows.value);
    };

    const scopedSlot = show => (slots.sc ? slots.sc(show) : []);

    return () => h(
      "form",
      {
        style: "max-width: 768px; margin: auto",
        onSubmit: event => event.preventDefault()
      },
      // Children
      [
        // Slot
        scopedSlot({shows: shows.value }),
        // The input field
        h(
          "input",
          {
            onInput: event => {
              {
                inputValue = event.target.value;
                // console.log(inputValue); // Just a test
              }
            }
          }
        ),
        // The search button
        h(
          "button",
          {
            onClick: async () => { searchText(inputValue) }
          },
          "search"
        ),

        // Display the shows or a error
        h("div", { class: "shows" },[
          error.value
          ? h("div", error.value) :
          shows.value?.map((show) =>
            h("div", {class: "show"},
              [
                h("h3", show.show.name),
                h("img", { src: show.show.image?.medium })
              ]
            )
          )
        ])
      ]
    );
  }
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

</style>