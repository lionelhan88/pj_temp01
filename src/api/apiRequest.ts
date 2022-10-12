import service from "@/utils/request";

// 登录
export const loginAction = (data : object) =>{
    return service.request({
        url: '/api/user/login',
        method: 'post',
        data,
    })
} 

// 创建委托信息
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

// 根据条件查询委托详情(分页)
export const listByCondition = (data : object) =>{
    return service.request({
        url: '/api/entrustmentDetail/listByCondition',
        method: 'post',
        data,
    })
} 

// 根据id获取检测结果
export const getDetectionResultById = (data : object) =>{
    return service.request({
        url: '/api/entrustmentDetail/getDetectionResultById',
        method: 'post',
        data,
    })
} 

// 保存检测结果
export const saveDetectionResultById = (data : object) =>{
    return service.request({
        url: '/api/entrustmentDetail/saveDetectionResultById',
        method: 'post',
        data,
    })
} 

