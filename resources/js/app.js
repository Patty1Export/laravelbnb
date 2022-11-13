require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
import router from "./routes";

window.Vue = require("vue").default;

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
); //registering component

Vue.use(VueRouter); //inside every component can access to special object to router and route
//hashtag in the url must display


const app = new Vue({
    el: "#app",
    router,
});
