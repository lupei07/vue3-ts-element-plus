/*
 * @Author: lu
 * @Date: 2021-07-24 14:15:43
 * @LastEditTime: 2021-09-08 10:24:39
 * @FilePath: \vue3-ts-study\src\main.ts
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import route from "./router/index";
import ElementPlus from "element-plus";
import store from "./store/index";
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

// 样式
import "./assets/reset.css";
import "./styles/common.scss";
import "element-plus/lib/theme-chalk/index.css";

// print
import printPdd from './utils/printPdd'


const app = createApp(App);

printPdd.setUrl('ws://127.0.0.1:5000');
app.use(printPdd);

app.use(route);
app.use(store);
app.use(ElementPlus, { locale, size: "mini", zIndex: 3000 });

app.mount("#app");
