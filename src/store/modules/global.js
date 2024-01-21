// initial state
const state = () => ({
  innerWidth: 0,
  innerHeight: 0,
});

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  setInnerScale(state, { width, height }) {
    state.innerWidth = width;
    state.innerHeight = height;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
