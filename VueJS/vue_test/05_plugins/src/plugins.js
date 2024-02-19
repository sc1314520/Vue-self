export default {
    install(Vue){
        Vue.filter('mySlice',function(value){
            return value.slice(0,4);
        })
        Vue.mixin({
            data(){
                return{
                    a:100,
                    b:200
                }
            }
        })
        Vue.prototype.hello =()=>{alert('hello')};
    }
}
