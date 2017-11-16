##Element UI 是一套采用 Vue 2.0 作为基础框架实现的组件库，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型.
- 本文参考[Element UI 官网指南](http://element-cn.eleme.io/1.3/#/zh-CN/component/quickstart),
- 首先需要安装[Git工具](https://git-scm.com/downloads)和[node.js](http://nodejs.cn/),下载完成后回车安装即可,也可以使用我网盘里的下载[Git工具和node.js](https://pan.baidu.com/disk/home#list/vmode=list&path=%2Fnodejs%E5%92%8CGit)
- 然后新建一个文件夹,比如我们就叫``My Project``
- 打开新建的``My Project文件``,然后右键如图:
![2017-11-15_185552.jpg](http://upload-images.jianshu.io/upload_images/7072486-1ed91dbe31fd7743.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
正确安装Git 点击右键就会出来如图,然后点开Git Bash Here
点开后会出现一个黑框框就对了,(后续的命令大多在这里执行)
如图:![2017-11-15_185933.jpg](http://upload-images.jianshu.io/upload_images/7072486-3660e8c18fd00d5b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 点开后我们安装[淘宝npm镜像安装](http://npm.taobao.org/),因为这个网速比较快,在黑框框里输入命令```npm install -g cnpm```输完按回车即可
![2017-11-15_190456.jpg](http://upload-images.jianshu.io/upload_images/7072486-76e3a65839e926cd.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 接下来我们就用cnpm来下载安装后面的东西,使用cnpm替代原有的npm ,接下来安装Vue-cli [Vue-cli github](https://link.jianshu.com/?t=https://github.com/vuejs/vue-cli).因为要使用它里面的一个模板,
继续在黑框框里执行命令```cnpm install -g vue-cli```
如图,出来像这样就对了
![2017-11-15_191238.jpg](http://upload-images.jianshu.io/upload_images/7072486-94ec4f995de3f82f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 安装完毕后可以通过`` vue --version``查看Vue版本;我当前版本是 2.9.1
- 然后通过```vue list```命令可 查看Vue-cli 得六种模板:
![2017-11-15_191737.jpg](http://upload-images.jianshu.io/upload_images/7072486-81cdd29b6f666e3d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

一颗星星表示一种模板 我们则使用最后一种模板:``webpack-simple``模板
- 使用模板首先安装模板,输入命令``vue init webpack-simple element-ui``,
    这里需要注意了,``webpack-simple``是需要安装的模板的名字,而``element-ui``则是存放模板的文件夹(可以起别的名字,尽量用英文).会自动创建在我们刚刚新建的``My Project``文件中显示.

- 输入上一条命令后会弹出好多``? Project name (element-ui)
等``,这些先不要管,直接回车即可.回车即可然后会出现如图:
![2017-11-15_192555.jpg](http://upload-images.jianshu.io/upload_images/7072486-fe913b7ea199f6ca.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 到是否使用sass时 打一个``n``继续按回车
![2017-11-15_192742.jpg](http://upload-images.jianshu.io/upload_images/7072486-2e0ecae2dc47ffcb.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 到这里你会发现你的``My Project``文件夹里多了一个``element-ui``文件就对了.
- 到这还没完.回到黑框框输入上边给出的三行命令.依次执行:
``cd element-ui``
``cnpm install``
``cnpm run dev``
这三行分别是什么意思呢:
``cd element-ui``:进入element-ui这个文件夹
``cnpm install``:(因为我们已经下载cnpm 就用cnpm 代替npm即可).安装``webpack-simple模块``的依赖包(可能会慢一点,多等会即可)
``cnpm run dev``:安装完依赖后打开虚拟服务器(正确则会自动弹出浏览器);
- 让我们一步步来,首先执行``cd element-ui``:进入element-ui这个文件夹
- 然后在执行``cnpm install``安装依赖
![2017-11-15_194100.jpg](http://upload-images.jianshu.io/upload_images/7072486-131ea58261dd7ffd.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

下面打对勾则表示下载完成.然后你会发现你的``element-ui``里多了一个``node_modules``文件就对了
- 到这 你的文件结构应该是这样才对:
![2017-11-15_195502.jpg](http://upload-images.jianshu.io/upload_images/7072486-e394dcd724ceb30f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 然后启动虚拟服务器.输入命令``cnpm run dev``输完按回车,正确的话会弹出浏览器.如图:![2017-11-15_195944.jpg](http://upload-images.jianshu.io/upload_images/7072486-40c4d2fa5e8cf950.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果觉得上面步骤没错就是不自动打开浏览器可以手动在浏览器了输入``http://localhost:8080/``也可以出来.
- 现在黑框框应该是酱紫;
![2017-11-15_200205.jpg](http://upload-images.jianshu.io/upload_images/7072486-1a3d82659897f294.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 到这就完成了一多半了,然后我们访问[Element 开发文档](http://element.eleme.io/1.3/#/zh-CN/component/quickstart)
- 然后把我们的element-ui文件里的``package.json``文件改成下列代码
```
{
  "name": "element-starter",
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --inline --hot --port 8086",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
  },
  "dependencies": {
    "element-ui": "^1.0.0",
    "vue": "^2.1.6"
  },
  "devDependencies": {
    "babel-core": "^6.0.0",
    "babel-loader": "^6.0.0",
    "babel-preset-vue-app": "^1.2.0",
    "cross-env": "^1.0.6",
    "css-loader": "^0.23.1",
    "file-loader": "^0.8.5",
    "style-loader": "^0.13.1",
    "vue-loader": "^9.8.0",
    "webpack": "beta",
    "webpack-dev-server": "beta"
  }
}
```
- 在把我们的element-ui文件里的``webpack.config.js``文件改成下列代码:
```
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
```
- 在把我们的element-ui文件里src中的``main.js``文件改成下列代码:
```
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
至此我们的便完成了 Element 的引入.后续只需要修改element-ui>src>App.vue中的内容即可实现相应的组件效果.
比如我们做一个由Element 提供的走马灯效果,只需要修改element-ui>src>App.vue中的内容.代码如下:
```
<template>
  <div id="app">
    <template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
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

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

```

- 然后我们会发现我们的用```cnpm run dev```打开的浏览器已经成这样了:
![2017-11-16_093118.jpg](http://upload-images.jianshu.io/upload_images/7072486-e14b2b2794d98fb4.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这个错误是因为我们用的Element UI却还没有下载Element UI 的文件.所以我去那个黑框框按下``ctrl+c``.注意是按下ctrl键+c键.表示重启命令行.重启后即可重新输入命令
- 重启之后然后输入``cnpm install element-ui -S``命令下载Element UI文件

![2017-11-16_095518.jpg](http://upload-images.jianshu.io/upload_images/7072486-a68d82293b287979.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


- 下载完成后我们重新再输入``cnpm run dev``打开虚拟服务器(自动弹出浏览器就对了)
![2017-11-16_100024.jpg](http://upload-images.jianshu.io/upload_images/7072486-899e7523b8222705.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 然后我们发现他有报了一个错误,大意是缺少一个``style-loaber``文件,
![2017-11-16_100413.jpg](http://upload-images.jianshu.io/upload_images/7072486-46a8914fa985aed7.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 好,那我们接着下载``style-loaber``文件.继续返回黑框框.按下crtl+c键(crtl键+c键,同时按下表示重启黑框框.重启完才能继续输入命令.)
然后我们输入``cnpm install style-loader --save dev``命令.下载这个style-loader文件.输完回车即可.
![2017-11-16_101237.jpg](http://upload-images.jianshu.io/upload_images/7072486-4fc27c25b9eb1ca5.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


这样则表示下载完成.然后我们在输入``cnpm run dev``启动虚拟服务器即可弹出浏览器页面,(如果输完没有弹出也不要着急).打开你的浏览器输入网址//localhost:8086/,也是可以一样打开的.![2017-11-16_101537.jpg](http://upload-images.jianshu.io/upload_images/7072486-c58f810658260c4d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


具体的服务器的网址以你的黑框框显示的为准,在浏览器中输入正确打开即可看到:

![123.gif](http://upload-images.jianshu.io/upload_images/7072486-d582528f0ee56f7e.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 当然我们肯定不会费这么大力气只为了做一个跑马灯,实际上这是Element UI 提供组件群里其中一个而且.更多的请访问[Element 组件](http://element-cn.eleme.io/1.3/#/zh-CN/component/carousel)
-赶快为你的网站添加几个炫酷的组件吧,
- 然而我们肯定不会轮播几个数字.我们可以在里面添加图片进行轮播.
- 首先打开你的My Project > element-ui.src > App.vue文件.以后修改组件大多在这里修改,我们把这里的代码改成:
```
<template>
  <div id="app">
    <template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item>
      <img src="src/assets/1.jpg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="src/assets/2.jpg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="src/assets/3.jpg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="src/assets/4.jpg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="src/assets/5.jpg">
    </el-carousel-item>
  </el-carousel>
</template>
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
img{
  width:100%;
}
</style>

```
- 然后在你们的文件My Project > element-ui.src > assets里添加几张你自己的图片,名字嫌麻烦可以直接把5张图片改成1.jpg 2.jg 3.jpg 4.jpg 5.jpg ,
- 改完之后直接打开浏览器之后就能看到
![5656.gif](http://upload-images.jianshu.io/upload_images/7072486-dc16f80db5045b89.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

