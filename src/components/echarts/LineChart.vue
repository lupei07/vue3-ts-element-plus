<!--
 * @Author: lu
 * @Date: 2021-07-28 14:59:42
 * @LastEditTime: 2021-07-28 16:45:47
 * @FilePath: \vue3-ts-study\src\components\echarts\LineChart.vue
 * @Description: 
-->
<template>
  <div id="myChart" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, nextTick } from "vue";
import { init } from "echarts";
import * as echarts from "echarts";
export default defineComponent({
  name: "LineChart",
  components: {},
  setup() {
    onMounted(() => {
      nextTick(() => {
        // 基于准备好的dom，初始化echarts实例
        const lineChart = init(
          document.getElementById("myChart") as HTMLElement
        );

        // 绘制图表
        lineChart.setOption({
          //   backgroundColor: "#394056",
          title: { text: "7日订单" },
          tooltip: {
            trigger: "axis"
            // axisPointer: {
            //   type: "cross",
            //   label: {
            //     backgroundColor: "#F3B968"
            //   }
            // }
          },
          legend: {},
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: "3%",
            right: "55px",
            bottom: "3%",
            containLabel: true
          },
          xAxis: [
            {
              name: "日期/天",
              axisLabel: {
                interval: 0, //代表显示所有x轴标签显示
                rotate: 0
              },
              type: "category",
              boundaryGap: false,
              data: [1, 2, 3, 4, 5, 6, 7]
            }
          ],
          yAxis: [{ name: "数量：单", type: "value" }],
          series: [
            {
              name: "总量",
              type: "line",
              stack: "总量",
              smooth: true,
              color: "#DB90A5",
              label: {
                normal: {
                  show: true,
                  position: "top"
                }
              },
              itemStyle: {
                color: "#DB90A5",
                normal: {
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 1,
                    type: "solid",
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#DB90A5"
                      },
                      {
                        offset: 1,
                        color: "#F3BB6B"
                      }
                    ]) //线条渐变色
                  }
                },
                emphasis: {
                  color: "#e988f2",
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 2,
                    type: "dotted",
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#1E90FF"
                      },
                      {
                        offset: 1,
                        color: "#0000FF"
                      }
                    ])
                  }
                }
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#d68262"
                  },
                  {
                    offset: 1,
                    color: "#ffe"
                  }
                ])
              },
              data: [100, 200, 100, 400, 300, 70, 90]
            }
          ]
        });

        window.onresize = function() {
          //自适应大小
          lineChart.resize();
        };
      });
    });
    return {};
  }
});
</script>
<style scoped></style>
