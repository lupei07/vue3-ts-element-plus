<!--
 * @Author: lu
 * @Date: 2021-07-27 10:42:12
 * @LastEditTime: 2021-07-27 16:03:23
 * @FilePath: \vue3-ts-study\src\views\login\Manage.vue
 * @Description: 
-->
<template>
  <div style="height:400px">
    <MyPagination></MyPagination>
  </div>
  <VueDraggableResizable ref="resizeRef" :onResize="resize">
    <div>slot</div>
  </VueDraggableResizable>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import VueDraggableResizable from "../../components/common/VueDraggableResizable.vue";
import MyPagination from "../../components/common/MyPagination.vue";
export default defineComponent({
  name: "App",
  components: { VueDraggableResizable, MyPagination },
  setup() {
    const resizeRef = ref(null);
    function resize(val: any) {
      console.log("123", val);
    }
    return { resizeRef, resize };
  }
});
</script>
<style scoped></style>
