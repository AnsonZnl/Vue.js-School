<template>
        <div class="mains">  
           <div class="text-center main">
                <h2>详情内容</h2>
                
                <h3>{{titles}}</h3>
                 <div>
                    <p class="block">发布时间：{{dates}}</p>
                    <p class="block">作者：{{authors}}</p>
                 </div>
                    <div class="left m4-auto">
                    <p v-html="contents" style="text-align: left;">{{contents}}</p>
                </div>
            </div>
             <router-link to="/main1" class="fl btn">返回</router-link>
     </div>
</template>
<style>
.mains{
     margin: auto;
        width: 800px;
}
.block{
       display: inline-block;
       margin-left: 20px;
        }
</style>

<script>
export default{
//暴露一下
        data:function(){
            return{
                titles:"",
                dates:"",
                authors:"",
                contents:""
            }
        },
        beforeMount:function(){
            this.titles=this.$route.params.title;
            this.dates=this.$route.params.date;
            this.authors=this.$route.params.author;
            this.contents=this.$route.params.content;
        }
    }
</script>