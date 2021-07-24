/*
 * @Author: lu
 * @Date: 2021-07-24 14:15:43
 * @LastEditTime: 2021-07-24 17:28:12
 * @FilePath: \vue3-ts-study\src\main.ts
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import route from "./router/index";
import ElementPlus from "element-plus";

// 样式
import "./assets/reset.css";
import "./styles/common.scss";
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App);

app.use(route);
app.use(ElementPlus, { size: "small", zIndex: 3000 });

app.mount("#app");
