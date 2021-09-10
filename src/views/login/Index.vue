<!--
 * @Author: lu
 * @Date: 2021-07-26 11:05:46
 * @LastEditTime: 2021-09-09 16:45:23
 * @FilePath: \vue3-ts-study\src\views\login\Index.vue
 * @Description: 
-->
<template>
  <div class="flex-column">
    <div class="flex-1 padding-20">
      <el-form ref="loginRef" :model="loginForm" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>

      <el-button @click="getPrinters">获取打印机列表</el-button>
    </div>
    <div>footer</div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  HtmlHTMLAttributes,
  getCurrentInstance,
  ComponentInternalInstance
} from "vue";
// import { WSClient } from "../../utils/websocket";
export default defineComponent({
  name: "Index",
  components: {},
  setup() {
    const instance = getCurrentInstance();
    const _this = instance?.appContext.config.globalProperties;

    const loginRef = ref(null);
    let loginForm = reactive({
      name: "123",
      password: ""
    });
    function onSubmit() {
      (loginRef.value as any).validate((valid: boolean) => {
        console.log(valid);
      });
    }

    function getPrinters() {
      // _this?.$print.pdd.getPrinters();
      const requestID = "dd234255345353";
      _this?.$print.pdd.setPrintResultNotify(requestID, function(d: any) {
        console.debug("print notify", d);
        let status = d.status;
        // if (d.printStatus && d.printStatus.length > 0) {
        //     status = d.printStatus[0].status;
        // }
      });
    }

    return { loginForm, onSubmit, loginRef, getPrinters };
  }
});
</script>
<style scoped>
</style>
