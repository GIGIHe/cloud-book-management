import Vuex from "vuex"
import Vue from "vue";
import { mapState } from "vuex";
// import router from "../router"
// import {$axios} from "../utils/index"
// import {Message} from "element-ui"
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userinfo:{
            avatar:'',
            desc:'',
            email:'',
            nickname:'',
            username:'',
            // password:''
},
    //  catagoryData:{
    //      index: '',
    //      icon: '',
    //      author: ''
    //  }
  },
  mutations: {
    'CHANGE_USERINFO'(state,userinfo){
       state.userinfo = userinfo
    },
    // computed:{
    //   mapState([userinfo])
    // }
    // 'CHANGE_CATAGORY'(state,catagoryData){
    //   state.catagoryData=catagoryData
    // }
  //    'HANDLESUBMIT'(){
  //     $axios.put("/user/userInfo",{userinfo:this.state.userinfo}).then(res => {
  //       // 如果不知道获取到的该干嘛，就友好吧
  //       if(res.code==200){
  //        Message({
  //           message:"修改成功"
  //         })
  //       }
  //       router.push('/layout/mainpage')
  //      console.log(res)
  // })
  //     }
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key),
      },
    }),
  ]
})
export default store