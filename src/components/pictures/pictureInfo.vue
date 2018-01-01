<template>
    <div class="home-pictureInfo">
        <div class="titleBox">
            <h4>{{pictureInfo.title}}</h4>
            <p>
                <span>发表时间 : {{pictureInfo.add_time | dateFormat}}</span>
                <span>点击 : {{pictureInfo.click}}次</span>
            </p>
        </div>
        <hr>
        <div class="content">
            <img class="preview-img" v-for="(item, index) in list" :key="index" :src="item.src" height="100" @click="$preview.open(index, list)">
            <div v-html="pictureInfo.content" class="textContent"></div>
        </div>
        <!-- 评论组件 -->
        <comment-box></comment-box>
    </div>
</template>

<script>
import comment from "../subComponents/comment.vue"
export default {
  data () {
    return {
        list:[],
        id:this.$route.params.id,
        pictureInfo:{}
    }
  },
  created(){
    this.getPreview(),
    this.getPictureInfo()
  },
  components:{
    commentBox:comment
  },
  methods:{
    getPreview(){
        this.$http.get("api/getthumimages/"+this.id,{
            imgid:this.id
        }).then(res => {
            //console.log(res)
            if(res.body.status==0){
                res.body.message.forEach(item => {
                    item.w=400
                    item.h=400
                })
                this.list = res.body.message
            }else{
                Toast("获取失败")
            }
        })
    },
    getPictureInfo(){
        this.$http.get("api/getimageInfo/"+this.id,{
            imgid:this.id
        }).then(res => {
            if(res.body.status == 0 ){
                this.pictureInfo = res.body.message[0]
            }else{
                Toast("获取失败")
            }
        })
    }
  }
}
</script>

<style lang="less" scoped>
    .home-pictureInfo{
        background-color: #fff;
        .titleBox{
            h4{
                color: #26a2ff;
                text-align: center;
                padding: 6px 0;
            }
            p{
                display: flex;
                justify-content:space-between;
                font-size: 12px;
            }
        }
        .content {
            .textContent{
                line-height: 30px;
                font-size: 12px;
                color: #999;
            }
        }
    }
</style>
