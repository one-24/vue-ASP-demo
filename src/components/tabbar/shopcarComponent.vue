<template>
    <div class="tabbar-shopcar">
            <div class="mui-card" v-for="(item,i) in shopCarList" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                       <mt-switch v-model="$store.getters.getSelectedStatu[item.id]" @change="selectChanged(item.id,$store.getters.getSelectedStatu[item.id])"></mt-switch>
                       <img v-lazy="item.thumb_path">
                       <div class="info">
                           <h1>{{item.title}}</h1>
                           <p>
                               <span class="red">￥{{item.sell_price}}</span>
                               <shopcar-box :count="$store.getters.initCount[item.id]" :id="item.id" style="height:25px" ></shopcar-box>
                               <a href="#" @click.prevent="delShopcarProduct(item.id)">删除</a>
                           </p>
                       </div>
                    </div>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <div class="left">
                            <p>总计(不含运费)</p>
                            <p>已勾选商品 <span class="red">{{$store.getters.getSelectedCount}}</span>件&nbsp;&nbsp;&nbsp;总计<span class="red">￥{{$store.getters.getAllPrices}}元</span></p>
                        </div>
                        <div class="right">
                            <mt-button type="danger">去结算</mt-button>
                        </div>
                    </div>
                </div>
            </div>
    </div>    
</template>

<script>
    import shopcarBox from "../subComponents/shopcar_box.vue" 
    import {Toast} from "mint-ui"
    export default {
        data(){
            return {
                shopCarList:[]
            }
        },
        components:{
            shopcarBox
        },
        created(){
            if(this.$store.state.car.length != 0){
                this.getShopCarList()
            }else{
                Toast("购物车空空如也")
            }
        },
        methods:{
            getShopCarList(){
                var ids=this.$store.getters.getIds
                this.$http.get("api/goods/getshopcarlist/"+ids,{Ids:ids}).then(res => {
                    if(res.body.status == 0 ){
                        this.shopCarList = res.body.message
                    }
                })
            },
            selectChanged(id,val){
                this.$store.commit("updateSelected",{id,isSelected:val})
            },
            delShopcarProduct(id,i){
                this.shopCarList.splice(i,1)
                this.$store.commit("removeProduct",id)
            }
        }
    }
</script>

<style lang="less" scoped>
.tabbar-shopcar{
    .mui-card-content-inner{
        display: flex;
        align-items:center;
        justify-content:space-between;
        img{
            width: 60px;
            height: 60px;
        }
        h1{
            font-size: 13px;
        }
        .info{
            display: flex;
            flex-direction:column;
            justify-content:space-between;
            p{
                margin: 0;
                display: flex;
                justify-content:space-between;
                align-items:center;
            }
        }
    }
    .red{
                color: red;
                font-weight: 700;
                font-size: 14px;
            }
}
</style>
