require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
import router from "./routes";
import Index from "./index"; // import the index

window.Vue = require("vue").default;

// //global registration
// Vue.component(
//     "example-component",
//     require("./components/ExampleComponent.vue").default
// ); //registering component

// //local registration
// Vue.component(
//     "example-2",
//     require("./components/Example2.vue").default
// ); //registering component


Vue.use(VueRouter); //inside every component can access to special object to router and route
//hashtag in the url must display


const app = new Vue({
    el: "#app",
    router,
    components: {
        "index": Index, //add components in vue instance to render
    }
});
