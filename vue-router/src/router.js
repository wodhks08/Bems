import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = ()=>{ // 값이 길어지는 경우 변수로 선언도 가능
  return import("./views/About.vue")
}//함수 형태이기 때문에 불러와져야 가져온다. 속도가 많이 차이남.

const Users = ()=> import("./views/Users.vue")
const UsersDetail = ()=> import("./views/UsersDetail.vue")
const UsersEdit = ()=> import("./views/UsersEdit.vue")

export default new Router({
  mode: 'history',//#(해쉬모드)이 아닌 history로
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',//또 하나의 별칭
      component: Home//홈 컴포넌트가 선언됨.
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/users',//뒤에 값을 넣어줘야 한다.
      name: 'users',
      /*beforeEnter: (to, from, next)=>{//라우터가 부르기전에 함수를 먼저 실행
        console.log("before enter")
        //여기서 로그인이 되어있는지 아닌지 확인하고 
        //next()로 보내주면 된다.
        next()//어디로 이동할지 결정해주는 함수
      },*/
      component: Users,
      children: [
        {
          path: ':id',
          name: 'users-detail',
          component: UsersDetail
        },
        {
          path: ':id/edit',
          name: 'users-edit',
          component: UsersEdit
        }
      ]
    },
    {
      path:'/redirect-me',
      redirect: { name: 'users'}
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
