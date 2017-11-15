
### vue-cli 模板使用:
* 首先下载Git工具和nonde.js.
* vue-cli脚手架 模板 通过命令行 自动创建模板（indec.html .js .css）
脚手架的6个模板
* 网址 [vue-cli 的 github](https://github.com/vuejs/vue-cli)
* 使用淘宝镜像cnpm ``npm install cnpm -g`` 
* 使用cnpm安装vue ``cnpm install -g vue-cli``  安装vue-cli
* 通过 ``vue --version`` 查看vue版本
* 通过``vue list``命令可 查看ue-cli 得6种模板:
```
★  browserify - A full-featured Browserify +            vueify setup with hot-reload, linting & unit            testing.
★  browserify-simple - A simple Browserify +            vueify setup for quick prototyping.
★  pwa - PWA template for vue-cli based on t           he webpack template
★  simple - The simplest possible Vue setup            in a single HTML file
★  webpack - A full-featured Webpack + vue-l           oader setup with hot reload, linting, testing            & css extraction.
★  webpack-simple - A simple Webpack + vue-l           oader setup for quick prototyping.
```
-  $ vue init <template-name>（模板名 如：webpack-simple） <project-name>（项目名字 如：vue-cli-01）
```
  vue init webpack-simple vue-cli-01
```
然后 一直回车 有作者信息和sass 描述等,N后继续回车
- ``cd vue-cli-01``  进入到你的文件中
- ``cnpm install`` 下载所需要的依赖 （依赖最后有对勾就是对了 不对的话重新删除在下载一次）
- ``cnpm run dev`` 开启虚拟服务器
肯错+c 关闭服务器
### webpack-simple路由使用:
- 安装路由 ``cnpm install vue-router -g``
- 或安装生产情况下的vue-router ``cnpm install vue-router -S``


- 在src里新建 `` router.config.js``  文件,把配置路由写到 router.config.js 文件里 
```
import Home from "./conpaoles/home.vue"
import User from "./conpaoles/user.vue"
//import 引入 自定名字 路径是‘href’
export default{
    // 暴露文件
    //出口文件
    routes:[
    {path:'/home',component:Home},
    {path:'/user',component:User}
]
}
```
- 在src里新建文件 ``component``  ,把项目的组件的写到src新建的 component 文件里.这是一个专门写组件的文件
 比如我们写了两个组件:那就在component里新建两个文件``About.vue``和``Home.vue``,注意后缀是.vue
Home.vue文件内容是:
```
<template>
    <h1>这是Home</h1>
</template>
<style></style>
<script></script>
```
About.vue文件内容是:
```
<template>
    <h1>这是About</h1>
</template>
<style></style>
<script></script>
```
style 和script 如不需要可不写
- 在src里的App.vue 是一个模块的文件 ,最终会在html 中显示
- App.vue中这样更改
```
<template>
<div id="app">
   <h1>{{ msg }}</h1>
    <br>
    <router-link to='/home'>home</router-link>
    <router-link to='/user'>user</router-link>
    <div>
        <router-view></router-view>
    </div>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
```
- 最后都把这些东西都引入main.js 
```
import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'
//import:引入.自定义名字 from 来自 （路径）‘href’ 
Vue.use(vueRouter);
//暴露 vueRouter
// vue use(使用) （使用的名字）
const myRouter=new vueRouter(routerConfig)
//定义一个常量 
new Vue({
  el: '#app',
  render: h => h(App),
  router:myRouter
    //挂载到vue实例里
})

```
再次在文件中打开git bash here输入```cnpm run dev```开启虚拟服务器,会自动弹出浏览器界面.
Element UI 组件库 饿了吗团队 提供的组件库
官网：element.eleme.io
网站速成工具
用Element.UI首先安装
安装Element.UI 
```
cnpm install element-ui -S
```
网址：[element-ui](element.eleme.io)1.4.9   1.3.7

[Element.UI 快速上手](http://element.eleme.io/1.3/#/zh-CN/component/quickstart)
把这个网址里的package.js文件和webpack.config.js文件和mian.js都复制进你的同名文件里
因为我发现我的package.js（依赖）里没有 style-loader 所以重新下载一次这个文件
```
cnpm install style-loader --save dev
```
开启服务器
```cnpm run dev```
发现报错 浏览器找不到element-ui 我们重新下载一次
```cnpm install element-ui -S```
然后在开启服务器
```cnpm run dev```
界面需手动打开 端口不定：http://localhost:8086/
如果打开报错 则有可能端口被占用。需删除原文件