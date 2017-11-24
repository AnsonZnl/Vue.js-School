import Vue from 'vue'
import vueRouter from "vue-router"
import App from './App.vue'
//银排至路由
import routerConfig from "./router.config.js"



Vue.use(vueRouter)
//用vueRouter//暴露
const myRouter=new vueRouter(routerConfig)
new Vue({
  el: '#app',
  render: h => h(App),
    router:myRouter
})
