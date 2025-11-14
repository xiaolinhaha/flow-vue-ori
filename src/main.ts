import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import DictSpan from '@/components/dictSpan/DictSpan.vue'
import 'element-ui/lib/theme-chalk/index.css'
import post from './apis/index';
const VueHighlightJS = require('vue-highlightjs')

import '@/styles/index.scss'

import './utils/routerGuard'
import '@/icons/index'

import Sticky from '@/components/Sticky/index.vue'

const ECharts = require('vue-echarts')
// 手动引入 ECharts 各模块来减小打包体积
import '@/assets/js/macarons.js'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import '@/assets/fonts/iconfont.css'

import VueClipboard from 'vue-clipboard2'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

// 必须在其他插件之前安装 VueCompositionAPI
Vue.use(VueCompositionAPI as any)
Vue.use(VueClipboard)
Vue.use(ElementUI)
Vue.use(VXETable)
Vue.use(VueHighlightJS)
Vue.component("Sticky",Sticky);
Vue.component("DictSpan",DictSpan);
Vue.component('v-chart', ECharts);
Vue.prototype.$post = post;
Vue.prototype.bus = new Vue(); //
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
