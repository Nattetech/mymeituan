<template>
    <div class="scrollBox">
        <div>
            <SellerHeader :seller="seller"></SellerHeader>
            <van-tabs v-model="active" sticky animated color="#ffda41">
                <van-tab title="菜单">
                    <order></order>
                </van-tab>
                <van-tab title="评价">
                    <comment></comment>
                </van-tab>
                <van-tab title="商家">
                    <seller :seller="seller"></seller>
                </van-tab>
            </van-tabs>
        </div>
        <cart :seller="seller"></cart>
    </div>
</template>

<script>
    import { getStoreById } from '@/api/detail'
    import SellerHeader from './seller-header'
    import order from './order'
    import BScroll from 'better-scroll'
    import cart from './cart'
    import comment from './../comment'
    import seller from './../seller'
    export default {
        data() {
            return {
                seller:[],
                active:0,
                scrollBox:null
            }
        },
        components:{
            SellerHeader,
            order,
            cart,
            comment,
            seller
        },
        methods: {
            getStoreMsg(){
                // 请求id = this.$route.query.id
                getStoreById({id:this.$route.query.id}).then(res => {
                    // console.log(res)
                    this.seller = res.data
                })
            }
        },
        created() {
            this.getStoreMsg()
        },
        mounted() {
            this.scrollBox = new BScroll('.scrollBox',{
                bounce:false,
                click:true
            })
        }
    }
</script>

<style lang="scss" scoped>
    .scrollBox{
        height: 100vh;
    }
</style>