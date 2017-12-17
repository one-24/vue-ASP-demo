<template>
    <div class="home-newsInfo">
       <h3 class="title">
           {{newsInfo.title}}
       </h3>
       <p class="sub-title">
           <span>发表时间 : {{newsInfo.add_time | dateFormat}}</span>
           <span>点击 : {{newsInfo.click}}次</span>
       </p>
       <hr>
       <!-- 内容主题区域 -->
       <div class="content" v-html="newsInfo.content"></div>
       <!-- 发表评论区域 -->
        <comment-box></comment-box>
    </div>
</template>

<script>
import comment from "../subComponents/comment.vue"
export default {
  data () {
    return {
        id:this.$route.params.id,
        newsInfo:[]
    }
  },
  created(){
    this.getNewsInfo()
  },
  methods:{
    getNewsInfo(){
        this.$http.get("api/getnew/"+this.id,{newid:this.id}).then(res => {
            if(res.body.status == 0){
                this.newsInfo = res.body.message[0]
                //console.log( this.newsInfo)
            }else{
                Toast("服务器出错 请稍后再试")
            }
        })
    }
  },
  components:{
    "commentBox":comment
  }
}
</script>

<style lang="less" scoped>
    .home-newsInfo{
        padding: 0 4px;
        .title {
            color:red;
            font-size: 16px;
            text-align: center;
            padding:10px 0; 
        }
        .sub-title{
            color: #226aff;
            font-size:12px;
            display: flex;
            justify-content:space-between;
        }
    }
</style>
