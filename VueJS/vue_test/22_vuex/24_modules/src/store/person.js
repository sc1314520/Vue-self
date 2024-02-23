import axios from "axios";
import { nanoid } from "nanoid";
export default {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0)
                context.commit('ADD_PERSON',value);
            else
                alert('添加的人必須姓王');
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social')
            .then(res=>{
                context.commit(ADD_PERSON,{id:nanoid(),name:res.data})
            },
            err=>{
                alert(err.message)
            })
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value);
        }
    },
    state:{
        personList:[
            {id:'001',name:'張三'}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name;
        }
    }
}