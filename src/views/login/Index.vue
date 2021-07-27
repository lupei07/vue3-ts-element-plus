<!--
 * @Author: lu
 * @Date: 2021-07-26 11:05:46
 * @LastEditTime: 2021-07-26 16:10:55
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
    </div>
    <div>footer</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, HtmlHTMLAttributes } from "vue";
export default defineComponent({
  name: "Index",
  components: {},
  setup() {
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
    return { loginForm, onSubmit, loginRef };
  }
});
</script>
<style scoped>
</style>
