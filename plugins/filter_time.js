import Vue from "vue";

function filterTime(nS) {
  return new Date(parseInt(nS) * 1000)
    .toLocaleString()
    .replace(/年|月/g, "-")
    .replace(/日/g, " ");
}

Vue.prototype.$filterTime = filterTime;
