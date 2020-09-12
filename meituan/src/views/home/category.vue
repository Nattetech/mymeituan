<template>
    <div>
        <ul class="cate-box">
            <li class="cate-list" v-for="obj in cateList" :key="obj.id">
                <img class="cate-img" :src="obj.img">
                <p class="cate-title">{{obj.name}}</p>
            </li>
        </ul>
        
    </div>
</template>

<script>
    import {getCategory} from '@/api/home'
    export default {
        data(){
            return {
                cateList:[]
            }
        },
        created() {
            // axios.get('http://admin.gxxmglzx.com/tender/test/get_type').then(res=>{
            //     if(res.data.errcode == 200){
            //         //  console.log(res.data.data)
            //         this.cateList = res.data.data
            //     }else{
            //         console.log(res.data.errmsg);
            //     } 
            // }).catch(res=>{
            //     console.log(res);
            // })   
            getCategory().then(res=>{
                this.cateList = res.data
            })
        }
    }
</script>

<style lang="scss" scoped>
    .cate-box{
        display: flex;
        flex-wrap: wrap;
        .cate-list{
            width: 20%;
            text-align: center;
            padding-top: 0.3rem;
            font-size: 11px;
            .cate-img{
                width:0.88rem;
                height: 0.88rem;
                margin-bottom: 0.1rem;
            }
        }
    }
</style>