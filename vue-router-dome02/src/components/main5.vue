<template>
     <div class="main5s">
            <h3>点餐成功！</h3>
            <router-link to="/main2" style="text-decoration: underline;">点击跳转..</router-link>
            <p><span id="time"></span>秒后返回点餐页面..</p>
     </div>
</template>
<script>
export default{
        mounted:function(){
            dianji(5)
        }
        }
 </script>