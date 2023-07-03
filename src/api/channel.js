import request from "@/utils"
//获取所有频道
export const getAllChannels = () =>{
    return request({
        method:"GET",
        url:"/v1_0/channels"
    })
}

//添加用户频道
export const addUserChannel = channel =>{
    return request({
        method:"PATCH",
        url:"/v1_0/user/channels",
        //如果所获取的数据是数组可以以对象格式获取
        data:{
            channels:[channel]
        }
    })
}

//删除用户频道
export const deleteUserChannel = channelId =>{
    return request({
        method:"DELETE",
        url:`/v1_0/user/channels/${channelId}`
    })
}