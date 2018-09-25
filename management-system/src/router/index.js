import Vue from 'vue'
import Router from 'vue-router'
const components={
  login:()=>import('@/view/login/login.vue'),
  layout:()=>import('@/view/layout/layout'),
  index:()=>import('@/view/layout/index'),
  userList:()=>import('@/view/user/userList'),
  // editUser:()=>import('@/view/user/editUser'),
  addManager: () => import('@/view/manager/addManager'),
  editManager:()=>import('@/view/manager/editManager'),
  // managerInfo: () =>import('@/view/manager/managerInfo'),
  updatepassword: () => import('@/view/manager/updatePassword'),
  comA:()=>import('@/components/comA'),
  comB:()=>import('@/components/comB'),
  catagorylist: () =>import('@/view/catagory/catagoryList'),
  addcatagory: () =>import('@/view/catagory/addCatagory'),
  editcatagory: () =>import('@/view/catagory/editCatagory'),
  onecatagory:() =>import('@/view/catagory/oneCatagory'),
  booklist:()=>import('@/view/book/bookList'),
  addbook:()=>import('@/view/book/addBook'),
  editbook:()=>import('@/view/book/editBook'),
  // mainpage:()=>import('@/view/manager/mainPage'),
  swiperlist: () =>import('@/swiper/swiperList'),
  addswiper: () =>import('@/swiper/addSwiper'),
  editswiper: () =>import('@/swiper/editSwiper'),
  
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
               name:'用户列表页面',
                meta: {
                  title: '用户列表'
                },
               component: components.userList
             },
            //  {
            //    path: 'editUser',
            //    name: '编辑用户信息',
            //    meta: {
            //      title: '编辑用户信息'
            //    },
            //    component: components.editUser
            //  },
             {
               path: 'editmanager',
               name:'编辑',
                meta: {
                  title: '编辑用户信息'
                },
               component: components.editManager
            
             },
             {
               path: 'catagorylist',
               name: '分类列表',
               meta: {
                 title: '分类列表'
               },
               component: components.catagorylist

             },
             {
               path: 'addcatagory',
               name: '添加分类',
               meta: {
                 title: '添加分类'
               },
               component: components.addcatagory

             },
             {
               path: 'editcatagory',
               name: '修改分类',
               meta: {
                 title: '修改分类'
               },
               component: components.editcatagory

             },
             {
               path: 'onecatagory',
               name: '查看详情',
               meta: {
                 title: '分类详情'
               },
               component: components.onecatagory

             },
             {
               path: 'booklist',
               name: '图书列表',
               meta: {
                 title: '图书列表'
               },
               component: components.booklist

             },
             {
               path: 'addbook',
               name: '添加图书',
               meta: {
                 title: '添加图书'
               },
               component: components.addbook

             },
             {
               path: 'editbook',
               name: '编辑图书',
               meta: {
                 title: '编辑图书'
               },
               component: components.editbook

             },
            //  {
            //    path: 'mainpage',
            //    name: '管理员用户',
            //    meta: {
            //      title: '管理员列表'
            //    },
            //    component: components.mainpage

            //  },
              {
                path: 'addmanager',
                name: '添加管理员',
                meta: {
                  title: '添加管理员'
                },
                component: components.addManager

              },
              //  {
              //    path: 'managerInfo',
              //    name: 'managerInfo',
              //    meta: {
              //      title: '管理员信息'
              //    },
              //    component: components.managerInfo

              //  },
             {
               path: 'updatepassword',
               name: 'updatepassword',
               meta: {
                 title: '修改管理员'
               },
               component: components.updatepassword

             },
               {
                 path: 'swiperlist',
                 name: '轮播图列表',
                 meta: {
                   title: '轮播图列表'
                 },
                 component: components.swiperlist

               },
               {
                 path: 'swiper',
                 name: '轮播图',
                 meta: {
                   title: '轮播图'
                 },
                 component: components.swiper

               },
               {
                 path: 'addswiper',
                 name: 'addswiper',
                 meta: {
                   title: '添加轮播图'
                 },
                 component: components.addswiper

               },
                {
                  path: 'editswiper',
                  name: '修改轮播图',
                  meta: {
                    title: '修改轮播图'
                  },
                  component: components.addswiper

                }
           ]
        },
        {
          path:'/comA',
          name:'coma',
          meta:{
            title:'组件A'
          },
          component:components.comA
        },
        {
          path: '/comB',
          name: 'comb',
          meta: {
            title: '组件B'
          },
          component: components.comB
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