<template>
    <div class="home-pictureList">
        <div id="slider" class="mui-slider">
                <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                    <div class="mui-scroll">
                        <a :class="['mui-control-item',item.id==0 ? 'mui-active' : '' ]"  v-for="item in navTitle" :key="item.id" @tap="getPictureList(item.id)">
                            {{item.title}}
                        </a>
                    </div>
                </div>
        </div>
        <ul class="pictureList">
            <router-link v-for="item in pictureList" :key="item.id" tag="li" :to="'/home/pictureInfo/'+item.id">
                <img v-lazy="item.img_url">
                <div class="message">
                    <h4>{{item.title}}</h4>
                    <span>{{item.zhaiyao}}</span>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
//导入mui js部分
import mui from "../../lib/mui/js/mui.min.js"
export default {
  data () {
    return {
        navTitle:[],
        pictureList:[]
    }
  },
  created(){
    this.getNavTitle(),
    this.getPictureList(0)
  },
  mounted(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods:{
    getNavTitle(){
        this.$http.get("api/getimgcategory").then(res => {
            if(res.body.status == 0 ){
                this.navTitle = res.body.message
                let all = { title:"全部", id:0 }
                this.navTitle.unshift(all)
            }else{
                Toast("请稍后再试")
            }
        })
    },
    getPictureList(id){
        this.$http.get("api/getimages/"+id,{
            id:id
        }).then(res => {
            if(res.body.status == 0){
                this.pictureList = res.body.message
            }else{
                Toast("服务器繁忙请稍后再试")
            }
        })
    }
  }
}
</script>

<style lang="less">
    * {
        touch-action:pan-y;
    }
.home-pictureList{
    background-color: #fff;
    .pictureList{
        padding: 0 8px;
        list-style: none;
        li{
            position: relative;
            margin:8px 0;   
            width: 100%;
            box-shadow: 0 0 10px #ccc;
            min-height: 344px;
            img{
                width: 100%;
                height: 100%;
                vertical-align: middle;
            }
            .message{
                position: absolute;
                background: rgba(0,0,0,0.5);
                bottom: 0;
                color: #fff;
                max-height: 94px;
                width: 100%;
                h4{
                    color:#fff;
                    font-size: 16px;
                }
                span{
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
