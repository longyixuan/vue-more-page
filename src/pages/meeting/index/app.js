import Vue from 'vue'
import weui from 'we-vue'
import App from './app.vue'
import 'we-vue/lib/style.css'
import 'assets/css/style.less'
import filter from 'filter/index'
Vue.use(weui)

new Vue({
    el: '#app',
    render: h => h(App)
})