<template>
    <div class="commentBox" ref="commentBox">
        <div>
            <score :deliver="comment.delivery" :score="comment.score"
            :packing="comment.packing" :flavor="comment.flavor"></score>
            <div class="tag-container">
                <tag :tag="comment.label" :currentType="type" @change="change"></tag>
            </div>       
            <list :list="comment.rate"></list>
        </div>
    </div>
</template>

<script>
    import score from './score'
    import tag from './tag'
    import list from './list'
    import { getComment } from '@/api/comment'
    import BScroll from "better-scroll"
    export default { 
        data() {
            return {
                type:1,
                comment:{},
                commentScroll:null
            }
        },
        components:{
            score,
            tag,
            list
        },
        methods:{
            getData(){
                return new Promise(resolve => {
                    getComment({
                        id:this.$route.query.id,
                        type:this.type
                    }).then(res => {
                        this.comment = res.data
                        resolve()
                    })
                })
                
            },
            change(id){
                // console.log(id);
                this.type = id
                this.getData().then(()=>{
                    this.$nextTick(() => {
                        this.commentScroll = new BScroll(this.$refs.commentBox,{
                            click:true,
                            bounce:false
                        })
                    })
                })
            }
        },
        created() {
            this.getData();
        }
    }
</script>

<style lang="scss" scoped>
    .commentBox{
        height: calc(100vh -44px);
    }
    .tag-container{
        border-top:0.2rem solid #f4f4f4;
    }
</style>