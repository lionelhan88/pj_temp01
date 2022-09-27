import service from "@/utils/request";

// 通过id查询委托
export const loginAction = (data : object) =>{
    return service.request({
        url: '/api/user/login',
        method: 'post',
        data,
    })
} 


// 通过id查询委托
export const createEntrust = (data : object) =>{
    return service.request({
        url: '/api/entrustmentDetail/add',
        method: 'post',
        data,
    })
} 

// 完工请求
export const finishProject = (data : object) =>{
    return service.request({
        url: '/api/entrustmentDetail/alterStatusById',
        method: 'post',
        data,
    })
} 

// 通过id查询委托
export const getRslt = (data : object) =>{
    return service.request({
        url: '/api/entrustmentDetail/getById',
        method: 'post',
        data,
    })
} 

// 通过id查询设施
export const getFacilities = (data : number) =>{
    return service.request({
        url: '/api/facility/getById',
        method: 'post',
        data,
    })
} 

// 通过id批准委托详情
export const approvalById = (data : number) =>{
    return service.request({
        url: '/api/entrustmentDetail/approvalById',
        method: 'post',
        data,
    })
} 

