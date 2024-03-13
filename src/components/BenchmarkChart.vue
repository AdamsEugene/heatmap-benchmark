<template>
  <div class="benchmark-chart">
    <apexchart
      :type="type"
      width="100%"
      height="241"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  props: ["series"],
  data() {
    return {
      chartOptions: {
        chart: {
          type: "line",
          zoom: {
            enabled: false,
          },
          width: "100%",
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        stroke: {
          curve: "smooth",
          width: 4,
        },
        colors: ["#FF5E5E", "#008160"], // Specify colors for each line
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
      },
    };
  },
};
</script>

<style>
.benchmark-chart {
  width: 100%;
  margin-bottom: 16px;
}
</style>
