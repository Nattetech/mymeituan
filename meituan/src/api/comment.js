import request from '@/utils/request'

export function getComment(data){
    return request({url:'/get_info',data})
}
