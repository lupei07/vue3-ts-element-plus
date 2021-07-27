<!--
 * @Author: lu
 * @Date: 2021-07-27 10:48:27
 * @LastEditTime: 2021-07-27 15:13:00
 * @FilePath: \vue3-ts-study\src\components\common\VueDraggableResizable.vue
 * @Description: 
-->
<template>
  <div class="posR clearfix">
    <Vue3DraggableResizable
      :initW="initW"
      :initH="120"
      v-model:x="x"
      v-model:y="y"
      v-model:w="w"
      v-model:h="h"
      :active="true"
      :draggable="true"
      :resizable="true"
      :disabledX="true"
      :disabledY="true"
      :handles="['tm']"
      :preventDeactivation="true"
      classNameResizable="resizebox"
      classNameHandle="my-handle-class"
      :deactivated="true"
      @resize-end="print"
    >
      <slot></slot>
    </Vue3DraggableResizable>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Vue3DraggableResizable from "vue3-draggable-resizable";
//default styles
import "vue3-draggable-resizable/dist/Vue3DraggableResizable.css";
export default defineComponent({
  name: "VueDraggableResizable",
  components: { Vue3DraggableResizable },
  props: {
    onResize: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    let state = reactive({
      initW: window.innerWidth || document.body.clientWidth, // 宽度
      x: 0,
      y: 0,
      h: 100,
      w: 100,
      active: true
    });
    function print(val: any) {
      props.onResize(val);
    }
    return { ...toRefs(state), print };
  }
});
</script>
<style scoped></style>
