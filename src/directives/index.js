const directiveMap = {
  resize: {
    mounted(el, binding) {
      const callback = binding.value;
      window.addEventListener("resize", () =>
        callback({ width: window.innerWidth, height: window.innerHeight })
      );
      el._onResize = callback;
    },
    unmounted(el) {
      if (!el._onResize) {
        return;
      }
      window.removeEventListener("resize", el._onResize);
      delete el._onResize;
    },
  },
};

export default Object.keys(directiveMap).map((name) => {
  return {
    name,
    directive: directiveMap[name],
  };
});
