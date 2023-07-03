import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/login"
// import Layout from "@/views/layout"
Vue.use(VueRouter)

const routes = [
  {
    path:"/login",
    name:Login,
    component:Login,
  },
  {
    path:"/",
    component:()=>import("@/views/layout"),
    children:[
      {//默认子路由
        path:"",
        name:"home",
        component:()=>import("@/views/home")
      },
      {
        path:"/qa",
        name:"qa",
        component:()=>import("@/views/qa")
      },
      {
        path:"/video",
        name:"video",
        component:()=>import("@/views/video")
      },
      {
        path:"/my",
        name:"my",
        component:()=>import("@/views/my")
      }
    ]
  },
  {
    path:"/search",
    name:"search",
    component:()=>import("@/views/search")
  }
]

const router = new VueRouter({
  routes
})

export default router
