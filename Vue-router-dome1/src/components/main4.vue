 <template>
         <form class="mains">
            <h2>{{m4tname}}订单信息1：</h2>
            <div class="input-group input-group-lg">
                    <span class="input-group-addon">姓名:</span>
                    <input type="text" @blur="onuserInput()" class="form-control" v-model="userInput" placeholder="请输入您的姓名">
            </div>
            <p id="text1">请输入正确的姓名，只限2-5位汉字</p>
            <div class="input-group input-group-lg">
                    <span class="input-group-addon">手机号:</span>
                    <input type="text" @blur="onphoneInput()" class="form-control" v-model="phoneInput" placeholder="请输入您的手机号">
            </div>
             <p id="text2">请输入正确的手机号1</p>
            <div class="input-group  input-group-lg">
                    <span class="input-group-addon">地址:</span>
                    <input type="text" @blur="onaddrInput" class="form-control" v-model="addrInput" placeholder="请输入您的地址">
            </div>
             <p id="text3">请输入正确的地址1</p>
            <div class="left m4-auto">
                <router-link :to="{name:'game3',params{userInputs:userInput,phoneInputs:phoneInput,addrInputs:addrInput}}"class="btn btn-primary btn-lg">确认订单</router-link>
            </div>
            <div class="left m4-auto">
                 <button  @click="rese()" type="button" class="btn btn-success btn-lg">修改订单</button>
            </div>

         </form>
         </template>
         <script>
         export default{
        data:function(){
            return{
                userInput:"",
                phoneInput:"",
                addrInput:"",
                m4tname:""
            }
        },
        beforeMount:function(){
            this.m4tname=this.$route.params.m4Tname;
        },
        methods:{
            rese:function(){
                delIpu();
                alert('订单已重置,请您重新填写');
            },
//            姓名验证
            onuserInput:function(){
                // [\u4E00-\uFA29]|[\uE7C7-\uE7F3]汉字编码范围
//                var re1 = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$");
                var reg=/^[\u4E00-\uFA29]{2,5}$/;
                var text1=document.getElementById("text1");
                if(reg.test(this.userInput)){
                    text1.innerHTML='正确'
                }else {
                    text1.innerHTML='错误'
                }
            },
//            手机号验证
                onphoneInput:function (){
                    var reg=/^1[34578]\d{9}$/;
                    var text2=document.getElementById("text2");
                    if(reg.test(this.phoneInput)){
                        text2.innerHTML='正确'
                    }else {
                        text2.innerHTML='错误'
                    }
                },
            //            姓名验证
            onaddrInput:function(){
                var reg=/^[\u4E00-\uFA29]{2,5}$/;
                var text3=document.getElementById("text3");
                if(reg.test(this.addrInput)){
                    text3.innerHTML='正确'
                }else if(this.addrInput=''){
                    text3.innerHTML='姓名不能为空'
                }else {
                    text3.innerHTML='错误'
                }
            }
        }
        }
    </script>