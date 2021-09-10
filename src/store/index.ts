/*
 * @Author: lu
 * @Date: 2021-08-02 10:50:30
 * @LastEditTime: 2021-09-09 14:15:04
 * @FilePath: \vue3-ts-study\src\store\index.ts
 * @Description:
 */
import { ComponentCustomProperties } from "vue";
import { Store, createStore } from "vuex";

// 配置vue+ts的项目中使用vuex
declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    count: number;
    route: any;
  }
  // provide typeing for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<Store<any>>;
  }
}
const store = createStore({
  state() {
    return {
      count: 1,
      localPrinters: {},
      boxHeight: {
        clientHeight: document.documentElement.clientHeight
      }
    };
  },
  mutations: {
    //方法
    incCount(state: any) {
      state.count++;
    },

    getPrinters(state: any, printers: object) {
      console.log('localPrinters', printers);
      state.localPrinters = printers
    }
  },
  getters: {},
  actions: {},
  modules: {}
});

export default store;
