 <template>
         <form class="mains">
            <h2>{{m4tname}}订单信息：</h2>
            <div class="input-group input-group-lg">
                    <span class="input-group-addon">姓名:</span>
                    <input type="text" @blur="onuserInput()" class="form-control" v-model="userInput" placeholder="请输入您的姓名">
            </div>
            <p id="text1">请输入正确的姓名，只限2-5位汉字</p>
            <div class="input-group input-group-lg">
                    <span class="input-group-addon">手机号:</span>
                    <input type="text" @blur="onphoneInput()" class="form-control" v-model="phoneInput" placeholder="请输入您的手机号">
            </div>
             <p id="text2">请输入正确的手机号</p>
            <div class="input-group  input-group-lg">
                    <span class="input-group-addon">地址:</span>
                    <input type="text" @blur="onaddrInput" class="form-control" v-model="addrInput" placeholder="请输入您的地址">
            </div>
             <p id="text3">请输入正确的地址</p>
            <div class="left m4-auto">
                <button type="button" class="btn btn-primary btn-lg" @click="testReg()">确认订单</button>
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
                var reg=/^[\u4E00-\uFA29]{2,5}$/;
                var text1=document.getElementById("text1");
                if(reg.test(this.userInput)){
                    text1.innerHTML='正确'
                    return true
                }else if(this.userInput==""){
                    text1.innerHTML='姓名不能为空'
                    return false
                }else{
                    text1.innerHTML='格式错误，请输入正确的姓名，只限2-5位汉字'
                    return false
                }
            },
//            手机号验证
                onphoneInput:function (){
                    var reg=/^1[34578]\d{9}$/;
                    var text2=document.getElementById("text2");
                    if(reg.test(this.phoneInput)){
                        text2.innerHTML='正确'
                        return true
                    }else if(this.phoneInput==""){
                        text2.innerHTML='手机号不能为空'
                        return false
                    }else {
                        text2.innerHTML='格式错误，请输入正确的国内大陆11位手机号'
                        return false
                    }
                },
            //            地址验证
            onaddrInput:function(){
                var reg=/^[\u4E00-\uFA29]|[0-9]{2,5}$/;
                var text3=document.getElementById("text3");
                if(reg.test(this.addrInput)){
                    text3.innerHTML='正确'
                    return true
                }else if(this.addrInput==""){
                    text3.innerHTML='地址不能为空'
                    return false
                }else {
                    text3.innerHTML='格式错误'
                    return false
                }
            },
            testReg:function(){
                if(this.onuserInput()&&this.onphoneInput()&&this.onaddrInput()){
                    this.$router.push("/main5");
                }else{
                    alert("填写不正确，请重新填写");
                     delIpu();
                }
            }
        }
        }
    </script>