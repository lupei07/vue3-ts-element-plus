<!--
 * @Author: lu
 * @Date: 2021-07-27 10:42:12
 * @LastEditTime: 2021-08-25 15:51:32
 * @FilePath: \vue3-ts-study\src\views\login\Manage.vue
 * @Description: 
-->
<template>
  <div style="height:100px;background:pink">header</div>
  <div class="flex">
    <NavMenu></NavMenu>
    <div style="height:400px;margin-bottom:300px">
      <LineChart></LineChart>
      <MyPagination></MyPagination>
      <el-icon :size="20">
        <edit />
      </el-icon>
      <i class="el-icon-edit"></i>
    </div>
    <div>
      <el-form :inline="true" :model="searchFrom" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input v-model="searchFrom.user" placeholder="审批人" clearable></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="searchFrom.region" placeholder="活动区域" clearable>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

  <VueDraggableResizable ref="resizeRef" :onResize="resize">
    <div>slot</div>
  </VueDraggableResizable>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import VueDraggableResizable from "../../components/common/VueDraggableResizable.vue";
import MyPagination from "../../components/common/MyPagination.vue";
import LineChart from "../../components/echarts/LineChart.vue";
import NavMenu from "../../components/common/NavMenu.vue";
export default defineComponent({
  name: "App",
  components: { VueDraggableResizable, MyPagination, LineChart, NavMenu },
  setup() {
    const searchFrom = reactive({
      user: "",
      region: ""
    });
    const resizeRef = ref(null);
    function resize(val: any) {
      console.log("123", val);
    }
    return { resizeRef, resize, searchFrom };
  }
});
</script>
<style scoped></style>
