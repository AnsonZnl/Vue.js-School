import Vue from 'vue'
import vueRouter from "vue-router"
import App from './App.vue'
//引配置路由
import routerConfig from "./router.config.js"
//用vueRouter
Vue.use(vueRouter)
//暴露
const myRouter=new vueRouter(routerConfig)
new Vue({
  el: '#app',
  render: h => h(App),
    router:myRouter
//加载到路由实例
})