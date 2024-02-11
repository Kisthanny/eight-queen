import { Store } from "./vuex";

export default new Store({
  state: {
    count: 0,
  },
  mutations: {
    addCount(state, payload = 1) {
      state.count += payload;
      document.getElementById("count").innerText = String(state.count);
    },
  },
  plugins: [
    function (store) {
      // eslint-disable-next-line
      store.subscribe((mutation, state) => {
        console.log(mutation);
      });
    },
  ],
});
