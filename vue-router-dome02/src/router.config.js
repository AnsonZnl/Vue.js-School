//配置路由
import Main1 from "./components/main1.vue"
import Main2 from "./components/main2.vue"
import Main3 from "./components/main3.vue"
import Main4 from "./components/main4.vue"
import Main5 from "./components/main5.vue"

export default{
    // 暴露文件
routes:[
    {path:"/main1",component:Main1},
    {path:"/main2",component:Main2},
    {name:"game1",path:"/main3/:lis/:imge/:mname",component:Main3},
    {name:"game2",path:"/main4/:m4Tname",component:Main4},
    {name:"game3",path:"/main5",component:Main5},
    {path:"/",component:Main1}
]
}