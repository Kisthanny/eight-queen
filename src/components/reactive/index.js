let active;

let queue = [];
let nextTick = (cb) => Promise.resolve().then(cb);
let queueJob = (job) => {
  if (!queue.includes(job)) {
    queue.push(job);
    nextTick(flushJobs);
  }
};
let flushJobs = () => {
  let job;
  while ((job = queue.shift()) !== undefined) {
    job();
  }
};

class Dep {
  constructor() {
    this.deps = new Set();
  }
  depend() {
    if (active) {
      this.deps.add(active);
    }
  }
  notify() {
    this.deps.forEach((dep) => queueJob(dep));
  }
}

let createReactive = (target, prop, value) => {
  let dep = new Dep();

  return Object.defineProperty(target, prop, {
    get() {
      dep.depend();
      return value;
    },
    set(newValue) {
      value = newValue;
      dep.notify();
    },
  });
};

export let reacitve = (obj) => {
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    createReactive(obj, key, value);
  });

  return obj;
};
