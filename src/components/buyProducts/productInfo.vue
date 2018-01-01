<template>
    <div class="productInfo-container">
        <!-- 顶部轮播图区域 -->
        <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <banner :bannerList="bannerList" :isFull="isFull"></banner>
                    </div>
                </div>
            </div>
            <!-- 价格区域 -->
            <div class="mui-card">
                <div class="mui-card-header">{{productInfo.title}}</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p>
                            市场价: <del>￥{{productInfo.market_price}}</del>&nbsp;&nbsp; 销售价 : <span class="now">￥{{productInfo.sell_price}}</span>
                        </p>
                        <p>
                            购买数量 : <info-box :max="productInfo.stock_quantity" @numChange="numchanged"></info-box>
                        </p>
                        <p>
                            <mt-button size="small" type="primary">立即购买</mt-button>
                            <mt-button size="small" type="danger" @click="addToCar">加入购物车</mt-button>
                        </p>
                    </div>
                </div>
            </div>
            <!-- 参数区域 -->
            <div class="mui-card">
                <div class="mui-card-header">商品参数</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                       <p>商品货号 : {{productInfo.goods_no}}</p>
                       <p>库存情况 : {{productInfo.stock_quantity}}件</p>
                       <p>上架时间 : {{productInfo.add_time | dateFormat("YYYY-MM-DD")}}</p>
                    </div>
                </div>
                <div class="mui-card-footer">
                    <mt-button size="large" type="primary" plain class="btn" @click="gotoDes(productInfo.id)">图文介绍</mt-button>
                    <mt-button size="large" type="danger" plain class="btn" @click="gotoComment(productInfo.id)">商品评论</mt-button>
                </div>
            </div>
            <transition 
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
                <div class="ball" v-show="ballFlag" ref="ball"></div>
            </transition>
    </div>
</template>

<script>
import banner from "../subComponents/banner.vue"
import infoBox from "../subComponents/productInfo_box.vue"
export default {
  data(){
    return {
        bannerList:[],
        id:this.$route.params.id,
        isFull:false,
        productInfo:{},
        ballFlag:false,
        count:1
    }
  },
  created(){
    this.getBanner(),
    this.getInfo()
  },
  methods:{
    getBanner(){
        this.$http.get("api/getthumimages/"+this.id,{imgid:this.id}).then(res => {
            if(res.body.status == 0 ){
                res.body.message.forEach(item => {
                    item.img = item.src
                })
                this.bannerList = res.body.message
            }
        })
    },
    getInfo(){
        this.$http.get("api/goods/getinfo/"+this.id,{Id:this.id}).then(res => {
            if(res.body.status == 0){
                this.productInfo = res.body.message[0]
            }else{
                Toast("请稍后再试")
            }
        })
    },
    gotoDes(id){
        this.$router.push({name:"descComponent",params:{id}})
    },
    gotoComment(id){
        //console.log(id)
        this.$router.push({name:"commentComponent",params:{id}})
    },
    addToCar(){
        this.ballFlag = !this.ballFlag;
        var o = {
            id:this.id,
            count:this.count,
            price:this.productInfo.sell_price,
            isSelected:true,
            max:this.productInfo.stock_quantity
        }
        this.$store.commit("addToCarInfo",o)
    },
    beforeEnter(el){
        el.style.transform = "translate(0,0)";
    },
    enter(el,done){
        el.offsetWidth;
        var ballPosition = this.$refs.ball.getBoundingClientRect()
        var badgePosition = document.getElementById("badge").getBoundingClientRect()
        var xDis = badgePosition.left-ballPosition.left;
        var yDis = badgePosition.top - ballPosition.top;
        el.style.transform = `translate(${xDis}px,${yDis}px)`;
        el.style.transition = "all 0.7s ease";
        //console.log(xDis,yDis)
        done()
    },
    afterEnter(el){
        this.ballFlag = !this.ballFlag;
    },
    numchanged(numCount){
        this.count=numCount
        //console.log("父组件拿到的值"+this.count)
    }
  },
  components:{
    banner,
    infoBox
  }
}
</script>

<style lang="less" scoped>
    .productInfo-container{
        background-color: #ccc;
        overflow:hidden; 
        .mui-card{
            .mui-card-footer{
                display: block;
                .btn{
                    margin: 15px 0;
                }
            }
        }
        .now{
            color: red;
            font-weight: bold;
        }
        .ball{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 999;
            top: 390px;
            left: 146px;
        }
    }
</style>
