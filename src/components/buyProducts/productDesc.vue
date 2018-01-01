<template>
    <div class="productInfo-desc">
        <h1>{{desc.title}}</h1>
        <hr>
        <div v-html="desc.content"></div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
        desc:{},
        id:this.$route.params.id
    }
  },
  created(){
    this.getDesc()
  },
  methods:{
    getDesc(){
        this.$http.get("api/goods/getdesc/"+this.id,{Id:this.id}).then(res => {
            if(res.body.status == 0){
                this.desc = res.body.message[0]
            }else{
                Toast("获取详情失败请稍后再试")
            }
        })
    }
  }
}
</script>

<style lang="less">
    .productInfo-desc{
        padding: 6px;
        h1{
            font-size: 16px;
            color: skyblue;
            text-align: center;
            margin: 10px 0;
        }
        img{
            width: 100%;
        }
    }
</style>
