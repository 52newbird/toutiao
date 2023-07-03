import requset from "@/utils"
//用户相关请求模块
export const getSearchSuggestions = q =>{
    return requset({
        method:"GET",
        url:"/v1_0/suggestion",
        params:{
            q
        }
    })
}

export const getSearchResult = params =>{
    return requset({
        method:"GET",
        url:"/v1_0/search",
        params
    })
}