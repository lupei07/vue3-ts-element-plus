<!--
 * @Author: lu
 * @Date: 2021-07-27 15:48:11
 * @LastEditTime: 2021-07-28 14:16:37
 * @FilePath: \vue3-ts-study\src\components\common\MyPagination.vue
 * @Description: 分页
-->
<template>
  <div class="flex flex-end">
    <el-pagination
      small
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 200, 300, 400]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MyPagination",
  components: {},
  setup() {
    const handleSizeChange = (val: number) => {
      console.log(`每页 ${val} 条`);
    };
    const handleCurrentChange = (val: number) => {
      console.log(`当前页: ${val}`);
    };
    return {
      currentPage1: ref(5),
      currentPage2: ref(5),
      currentPage3: ref(5),
      currentPage4: ref(4),
      handleSizeChange,
      handleCurrentChange
    };
  }
});
</script>
<style scoped></style>
