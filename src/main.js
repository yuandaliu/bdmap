import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 全局注册百度地图
import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap, {
  ak: "jjjr3uz5WntVxrvkPNha6gPiBmLp1P1z",
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
