import request from "@/utils";
export const login = data => {
    return request({
        method: "POST",
        url: "/v1_0/authorizations",
        data
    })
}
//发送验证码
export const sendSms = mobile => {
    return request({
        method: "GET",
        url: `/v1_0/sms/codes/${mobile}`,
    })
}
//获取用户自己信息
export const getUserInfo = () => {
    return request({
        method: "GET",
        url: "/v1_0/user"
        // 发送请求头数据
        // headers: {
        //   // 注意：该接口需要授权才能访问
        //   //       token的数据格式：Bearer token数据，注意 Bearer 后面有个空格
        //   Authorization: `Bearer ${store.state.user.token}`
        // }
    })
}

//获取用户频道
export const getUserChannels = () =>{
    return request({
        //请求方式不同
        method:"GET",
        url:"/v1_0/user/channels"
    })
}