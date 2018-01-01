<template>
    <div class="home-buyProductsList">
        <div class="product-item" v-for="item in productsList" :key="item.id" @click="toGoodsInfo(item.id)">
            <div class="imgBox">
                <img v-lazy="item.img_url">
                <h1>{{item.title}}</h1>
            </div>
            <div class="sellInfo">
                <p>
                    <span class="nowPrice">&yen;{{item.sell_price}}</span>
                    <del class="oldPrice">&yen;{{item.market_price}}</del>
                </p>
                <p class="p2">
                    <span>热卖中</span>
                    <span>剩 {{item.stock_quantity}} 件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {

  name: 'productsList',

  data () {
    return {
        productsList:[],
        pageIndex:1
    }
  },
  created(){
    this.getProductList()
  },
  methods:{
    getProductList(){
        this.$http.get("api/getgoods?pageindex="+this.pageIndex,{
            pageindex:this.pageIndex
        }).then(res => {
            if(res.body.status == 0){
                this.productsList = this.productsList.concat(res.body.message)
            }else{
                Toast("请刷新再试")
            }
        })
    },
    getMore(){
        this.pageIndex++
        this.getProductList()
    },
    toGoodsInfo(id){
        //console.log(this)
        this.$router.push({name:"goodsInfo",params:{id}})
    }
  }
}
</script>

<style lang="less" scoped>
    .home-buyProductsList {
        background-color: #fff;
        padding: 10px;
        display: flex;
        justify-content:space-between;
        flex-wrap:wrap;
        .product-item {
            min-height: 210px;
            margin-top: 10px;
            display: flex;
            justify-content:space-between;
            flex-direction: column;
            box-shadow: 0 0 8px #ccc;
            width: 49%;
            img{
                width: 100%;
            }
            h1{
                font-size: 14px;
            }
            .sellInfo {
                background: rgb(239,238,236);
                padding: 8px 4px;
                display: flex;
                justify-content:space-between;
                flex-direction: column;
                .nowPrice {
                    font-weight: 700;
                    font-size: 16px;
                    color: red;
                    margin-right: 30px;
                }
                .p2 {
                    display: flex;
                    justify-content:space-between;
                    margin-bottom: 0;
                }
            }
        }
    }
</style>
