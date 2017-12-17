<template>
    <div class="comment">
        <h4>发表评论</h4>
        <hr>
        <textarea placeholder="请输入你要BB的内容" v-model="BBContent"></textarea>
        <mt-button type="primary" size="large" @click="sendBBContent">发表评论</mt-button>
        <div class="commentInfo" v-for="(item,index) in commentList" :key="index">
            <div class="userInfo">
                <p>第{{index+1}}楼 用户: {{item.user_name}} 发表时间 : {{item.add_time | dateFormat}}</p>
            </div>
            <div class="commentContent">
                <p>{{item.content}}</p>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
  data () {
    return {
        id:this.$route.params.id,
        pageindex:1,
        commentList:[],
        BBContent:''
    }
  },
  created(){
    this.getNewsInfo()
  },
  methods:{
    getNewsInfo(){
        this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex,{artid:this.id,pageindex:this.pageindex}).then(res => {
            //console.log(res)
            if(res.body.status == 0){
                this.commentList = this.commentList.concat(res.body.message)
            }else{
                Toast("获取数据失败请稍后再试")
            }
        })
    },
    sendBBContent(){
        if(this.BBContent.trim().length != 0){
            this.$http.post("api/postcomment/"+this.id,{
            content:this.BBContent.trim()
        }).then( res => {
            if(res.body.status == 0){
                Toast(res.body.message)
                var commentInfo = {
                    user_name:"匿名用户",
                    add_time:new Date(),
                    content:this.BBContent
                }
                this.commentList.unshift(commentInfo)
            }else{
                Toast("提交失败")
            }
        })
    }else{
        Toast("请输入评论内容")
        }
    },
    getMore(){
        this.pageindex++
        this.getNewsInfo()
    }
  }
}
</script>

<style lang="less" scoped>
    .comment{
        textarea {
            margin: 0;
            font-size: 14px;
        }
        .commentInfo {
            margin-top: 4px;
            .userInfo{
                background-color: #ccc;
            }
            .commentContent{
                font-size: 12px;
                p{
                    font-size: 14px;
                }
            }
            p{
                    color: #000;
                    padding:4px 0;
                    font-size:12px;
            }
        }
    }
</style>
