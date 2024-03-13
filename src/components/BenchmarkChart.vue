<template>
  <div class="">
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
  data() {
    return {
      series: [
        {
          name: "Sales",
          data: [900, 600, 200, 1000, 600, 800, 500],
        },
      ],
      chartOptions: {
        chart: {
          type: "line",
          zoom: {
            enabled: false,
          },
          width: "100%",
          fill: {
            colors: ["#F44336", "#E91E63", "#9C27B0"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "left",
        },
        stroke: {
          curve: "smooth",
          width: 4,
          colors: ["#FF5E5E"],
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
      },
    };
  },
};
</script>
