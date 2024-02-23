// 創建 router
import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
const router =  new VueRouter({
    routes:[
        {
            name:'a',
            path:'/about',
            component:About,
            meta:{title:'關於'}
        },
        {
            name:'h',
            path:'/home',
            component:Home,
            meta:{title:'主頁'},
            children:[{
                name:'n',
                path:'news',
                component:News,
                meta:{isAuth:true,title:'新聞'},
                // beforeEnter(to,from,next){
                //     // 獨享路由守衛 --> 只有前置
                //     if(to.meta.isAuth){
                //         if(localStorage.getItem('school')==='vue')
                //             next()
                //     }    
                //     else next();
                // },
            },{
                name:'m',
                path:'message',
                component:Message,
                children:[{
                    name:'d',
                    path:'detail/:id/:title',
                    component:Detail,
                    meta:{title:'詳情'},
                    props({query}){
                        return {id:query.id,title:query.title}
                    }
                }],
                meta:{isAuth:true,title:'信息'}
            }]
        }
    ]
})
// router.afterEach((to,from)=>{
//     document.title = to.meta.title || 'Vue'
// })
export default router