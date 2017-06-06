//引入模块
import Vue from 'vue'

//引入router
import VueRouter from 'vue-router'
//可以在任意网页中使用
Vue.use(VueRouter)

//导入需要的组件
import Home from '../pages/Home'
import Kiss from '../pages/Kiss'
import Global from '../pages/Global'
import Gift from '../pages/Gift' 
import Mother from '../pages/Mother'

//定义路由规则
const routes = [
    {path: '', component: Home},
    {path: '/home', component: Home},
    {path: '/kiss', component: Kiss},
    {path: '/global', component: Global},
    {path: '/mother', component: Mother},
    {path: '/gift', component: Gift}
];
//导出创建好的路由对象
export default new VueRouter({
	routes
}); 