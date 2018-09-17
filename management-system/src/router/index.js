import Vue from 'vue'
import Router from 'vue-router'
const components={
  login:()=>import('@/view/login/login.vue'),
  layout:()=>import('@/view/layout/layout'),
  index:()=>import('@/view/layout/index'),
  userList:()=>import('@/view/user/userList'),
  addUser:()=>import('@/view/user/addUser'),
  logout:()=>import('@/view/login/logout')
}
Vue.use(Router)
const router = new Router({
     mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      meta:{
        title:'登录页面'
      },
      component: components.login
    },
    {       
            // redirect:'/layout',
            path: '/layout',
            meta: {
              title: '首页面'
            },
            component: components.layout,
           children:[
             {
               path:'',
               name:'后台首页面',
               meta: {
                 title: '后台首页面'
               },
               component: components.index
             },
             { 
               path: 'userlist',
               name:'用户管理页面',
                meta: {
                  title: '用户管理页面'
                },
               component: components.userList
             },
             {
               path: 'addUser',
               name: '添加用户页面',
               meta: {
                 title: '添加用户页面'
               },
               component: components.addUser
             },
            //  {
            //    path:'loginout',
            //    name:'退出',
            //    component:components.logout
            
            //  }
           ]
        }
      ],  
})
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router