// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui'; // 新添加
import 'element-ui/lib/theme-chalk/index.css'; // 新添加，避免后期打包样式不同，要放在import App from './App';之前
import App from './App';
import router from './router';
import './assets/scss/override.scss';
import axios from 'axios';
import qs from 'qs.js';

Vue.use(ElementUI, { size: 'small' });
Vue.config.productionTip = false;
Vue.prototype.$axios = axios; // 全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs; // 全局注册，使用方法为:this.qs  能把json格式的直接转成data所需的格式

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
