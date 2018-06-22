import Vue from 'vue'
import weui from 'we-vue'
import App from './app.vue'
import 'we-vue/lib/style.css'
import 'assets/css/style.less'
Vue.use(weui)

new Vue({
    el: '#app',
    render: h => h(App)
})