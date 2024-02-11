import { reacitve } from "@/components/reactive/index";

export class Store {
  constructor(options = {}) {
    let { state, mutations, plugins } = options;
    this._vm = reacitve(state);
    this._mutations = mutations;

    this._subscribes = [];
    plugins.map((plugin) => plugin(this));
  }

  get state() {
    return this._vm;
  }

  commit(type, payload) {
    const entry = this._mutations[type];
    if (!entry) {
      return;
    }
    entry(this._vm, payload);

    this._subscribes.map((sub) => sub({ type, payload }, this.state));
  }

  subscribe(fn) {
    if (this._subscribes.includes(fn)) {
      return;
    }
    this._subscribes.push(fn);
  }
}
