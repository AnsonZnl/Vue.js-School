//配置路由
import Main1 from "./components/main1.vue"
import Main2 from "./components/main2.vue"

export default{
    // 暴露文件
routes:[
    {path:"/main1",component:Main1},
    {name:"game1",path:"/main2",component:Main2},
    {path:"/",component:Main1}
]
}