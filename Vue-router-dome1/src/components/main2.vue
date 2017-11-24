 <template>
            <div class="main">
                <h1>点餐列表页面</h1>
                <ul>
                   <li v-for="(value,index) in num">
                        <div class="left">
                      <router-link class="block" :to="{name:'game1',params:{lis:value.lis,imge:value.bg_pic,mname:value.dname}}">
                                <img :src="value.sm_pic" alt="">
                        </router-link>
                        </div>
                        <div class="right">
                            <strong>
                             <router-link class="block" :to="{name:'game1',params:{lis:value.lis,imge:value.bg_pic,mname:value.dname}}">
                                {{value.dname}}
                              </router-link>
                            </strong>
                            <p>{{value.descrp}}</p>
                            <span>价格：{{value.price}}</span>
                        </div>
                   </li>
                   <router-link to="/main1" class="fanhui-m1">返回首页</router-link>
                </ul>
            </div>
</template>
<script>
export default{
 data:function(){
            return {
                num:[
                    {
                        sm_pic: 'img/1_1.jpg',
                        bg_pic: 'img/1.jpg',
                        dname: '【酸甜开胃虾】',
                        descrp: '明虾、番茄酱、白糖、白醋、葱、姜、淀粉',
                        price: 12,
                        lis: "唐帝国天启十三年春，渭城下了一场雨。这座位于帝国广阔疆域西北端的军事边城，为了防范草原上野蛮人入侵，四向的土制城墙被垒得极为厚实，看上去就像是一个墩实的土围子。干燥时节土墙上的浮土被西北的风刀子一刮便会四处飘腾，然后落在简陋的营房上，落在兵卒们的身上，整个世界都将变成一片土黄色，人们夜里入睡抖铺盖时都会抖起一场沙尘暴。正在春旱，这场雨来的恰是时辰，受到军卒们的热烈欢迎，从昨夜至此时的淅淅沥沥雨点洗涮掉屋顶的灰尘，仿佛也把人们的眼睛也洗的明亮了很多。至少马士襄此时的眼睛很亮。"
                    },

                    {
                        sm_pic: 'img/2_2.jpg',
                        bg_pic: 'img/2.jpg',
                        dname: '【桂香紫薯山药卷】',
                        descrp: '切片吐司、紫薯、铁棍山药、糖桂花、炼乳',
                        price: 12,
                        lis: "“我们来划淫荡拳啊！谁淫荡啊你淫荡！谁淫荡啊我淫荡！谁淫荡啊他淫荡！……”龌龊的行令声往返回复嘈嘈不绝，竟是过了极长时间都没能分出胜负，表情越来越恼怒难看的婢女掀起门帘一角，眼神极为不善向里望去，第一眼便看见方桌对面的一个少年。那少年约摸十五六岁，身上穿着一件军中常见的制式棉衫，棉衫襟前满是油污，一头黑色的头发不知道是天然生成还是因为几年未曾洗过的缘故有些发卷，也有些油腻，偏生那张脸却洗的极为干净，从而显得眉眼格外清楚，脸颊上那几粒雀斑也格外清楚。“谁淫荡啊你淫荡！”与龌龊的划拳内容截然相反，这少年此时的神情格外专注严肃，不仅没有丝毫淫亵味道，甚至眉眼间还透着几分圣洁崇高之意，他右手不停地在身前比划着剪刀石头布，出拳如风，出刀带着杀意，仿佛对这场划拳的输赢看得比自己生命还要更加重要。"
                    },

                    {
                        sm_pic: 'img/3.jpg',
                        bg_pic: 'img/3_3.jpg',
                        dname: '【蒸饺】',
                        descrp: '鸡蛋、豆角酱肉馅、西红柿鸡蛋馅、猪生抽、生抽、海鲜酱油、糖、盐',
                        price: 12,
                        lis: "这是蒸饺的详情"
                    },

                    {
                        sm_pic: 'img/4.jpg',
                        bg_pic: 'img/4_4.jpg',
                        dname: '【口袋饼】',
                        descrp: '面粉、黄瓜、香肠、热水、土豆、盐、醋、生抽、油。',
                        price: 12,
                        lis: "这是口袋饼的详情"
                    },

                    {
                        sm_pic: 'img/5_5.jpg',
                        bg_pic: 'img/5.jpg',
                        dname: '【橄榄油版酸奶蛋糕】', descrp: '鸡蛋、玉米淀粉、绵白糖、白醋、低筋粉、橄榄油、酸奶。',
                        price: 12,
                        lis: "这是橄榄油版酸奶蛋糕的详情"
                    },

                    {
                        sm_pic: 'img/6.jpg',
                        bg_pic: 'img/6_6.jpg',
                        dname: '【番茄肉酱意大利面】',
                        descrp: '这是开胃清蒸虾的描述......',
                        price: 12,
                        lis: "这是番茄肉酱意大利面的详情"
                    },

                    {
                        sm_pic: 'img/7_7.jpg',
                        bg_pic: 'img/7.jpg',
                        dname: '【小米椒爆炒小公鸡】',
                        descrp: '三黄鸡、杭椒、干红椒、新鲜小米椒、麻椒、八角、香叶、葱、姜、生抽',
                        price: 12,
                        lis: "这是小米椒爆炒小公鸡的详情"
                    }

                ]
            }
            }
            }
            
            
            
            </script>