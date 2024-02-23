// 創建 router
import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
export default new VueRouter({
    routes:[
        {
            name:'a',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[{
                path:'news',
                component:News,
            },{
                path:'message',
                component:Message,
                children:[{
                    name:'d',
                    path:'detail/:id/:title',
                    component:Detail,
                    // 方法一 （死數據）
                    // props:{
                    //     a:1,b:'hello'
                    // }
                    // 方法二 -> true:所有 params 以 props 的形式傳給 Details
                    // props:true
                    // 方法三 -> 值為函數 以 props 的形式傳給 Details
                    props(query){
                        return {id:query.id,title:query.title}
                    }
                }]
            }]
        }
    ]
})
