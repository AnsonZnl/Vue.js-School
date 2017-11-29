 <template>
            <div class="main1">
                <img :src="MainImgs" alt="这是一张图片，请您返回点餐页面">
                <div class="fanhui-m1 bg_clo">{{ming}}</div>
                 <div class="left m4-auto">
                    <router-link to="/main2"  class="btn btn-info btn-lg">返回点餐页面</router-link>
                    </div>
                    <div class="left m4-auto">
                     <router-link  :to="{name:'game2',params:{m4Tname:tname+'的'}}" class="btn btn-warning btn-lg">购买{{tname}}</router-link>
                </div>
            </div>
        </template>
        <script>
        export default{
        data:function(){
            return{
                MainImgs:"",
                ming:"",
                tname:""
            }
        },
        beforeMount:function(){
            var MainImg=this.$route.params.imge.slice(10);
            this.MainImgs='src/assets'+MainImg;
            this.ming=this.$route.params.lis;
            this.tname=this.$route.params.mname;
            // //接受Mains的传过来的值
        }
    }
    </script>