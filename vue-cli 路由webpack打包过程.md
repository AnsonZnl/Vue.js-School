## vue-cli 路由webpack打包过程
1. 安装cnpm ``cnpm npm install -g cnpm``
2. 安装脚手架 ``cnpm install -g vue-cli``
3. 安装webpack-simple模板 并创建一个demo01的文件夹``vue init webapck-simple demo01``
4. 进入demo01文件``cd demo01``
5. 下载webpack-simple的依赖 ``cnpm init``
6. 开启虚拟服务器 ``npm run dev``
7. 下载路由 ``cnpm install vue-router -S``
8. 打开dome01里的main.js
``
import Vue from 'vue'
import vueRouter from "vue-router"
//引进路由
import App from './App.vue'

Vue.use(vueRouter)
//使用路由
new Vue({
  el: '#app',
  render: h => h(App)
})

``
9. 在scr里新建components文件。在components文件里新建两个组件文件Mains.vue和Deail.vue
10. 在App.vue里写：
``
<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

``
10. Detail.vue 里写：
```
<template>
             <div>  
            <h1>{{arr}}</h1>
            <h2>索引是{{this.$route.params.xiabiao}}</h2>
        </div>
</template>
<script>
export default{
//暴露一下
data:function(){
            return{
                arr:""
            }
        },
        beforeMount:function(){
            this.arr=this.$route.params.xiabiao;
        }
}
</script>
```
11. Mains.vue里写：
``
       <template>
            <div>
                <h1>
                    this is my list
                </h1>
                <input type="text" v-model="TypeValue">
                <button @click="adds()" :disabled="flg">add</button>
                <p v-show="flg">{{no}}</p>
                <ul>
                    <li v-for="(value,index) in num"><router-link :to="'/detail/'+index">{{value}}</router-link></li>
                    <!--<li v-for="(value,index) in num"><router-link to="/datai/pp[p/p;pl">{{value}}</router-link></li>-->
                </ul>
                </div>
        </template>
        <script>
        export default{
        data:function(){
            return{
                num:['10','20','30'],
                TypeValue:"",
                no:"有重复的数据",
                flg:false
            }
        },
        watch:{
          TypeValue:function(){
              if(this.num.indexOf(this.TypeValue)==-1){
                  this.flg=false
              }else {
                  this.flg=true
              }
          }
        },
        methods:{
            adds:function(){
                this.num.push(this.TypeValue);
                this.TypeValue='';
            }
        }
    }
        </script>
``
13. main.js里改为：

``
import Vue from 'vue'
import vueRouter from "vue-router"
//引进路由
import App from './App.vue'
import routerConfig from './router.config.js'

Vue.use(vueRouter)
//使用路由
const myRouter=new vueRouter(routerConfig)
//新建路由实例
new Vue({
  el: '#app',
  render: h => h(App),
    router:myRouter
    //挂载到vue 上
})

``
14. src里写一个 router.config.js 配置路由：
``
import Mains from "./components/Mains.vue"
import Detail from "./components/Detail.vue"
//import 引入 自定名字 路径是‘href’
export default{
    // 暴露文件
    //出口文件
    routes:[
    {path:'/mains',component:Mains},
    {path:'/detail/:xiabiao',component:Detail},
    {path:'/',component:Mains}
]
}
``
