import request from '@/utils/request'

export function getStoreById(data){
    return request({url:'/get_store_id',data})
}

// 获取商品列表
export function getProdById(data){
    return request({url:'/get_nav',data})
}