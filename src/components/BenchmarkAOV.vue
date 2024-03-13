<template>
  <div class="benchmark-aov-wrapper">
    <div class="benchmark-aov-content">
      <div class="benchmark-aov-top-part">
        <p class="benchmark-aov-top-part-text">Weekly Report: Industry</p>
        <div class="benchmark-aov-top-part-left">
          <div class="benchmark-aov-top-box" />
          <p class="benchmark-aov-top-part-left-text">Industry</p>
        </div>
      </div>
      <h2 class="benchmark-aov-content-title">Average order value</h2>
      <div class="benchmark-aov--chart">
        <benchmark-chart />
      </div>
      <div class="benchmark-aov-buttons">
        <button class="benchmark-aov-button button-active">Average order value</button>
        <button class="benchmark-aov-button">Revenue per session</button>
        <button class="benchmark-aov-button">Conversion rate</button>
        <button class="benchmark-aov-button">Total revenue</button>
        <button class="benchmark-aov-button">Total traffic</button>
        <button class="benchmark-aov-button">Time on site</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BenchmarkChart from "@/components/BenchmarkChart.vue";

export default defineComponent({
  components: { BenchmarkChart },
  data() {
    return {
      show: true,
    };
  },
});
</script>

<style>
* {
  font-family: Montserrat;
}

.benchmark-aov-wrapper {
  width: 100%;
  min-height: 426px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #f6f6f6;
  background: #fff;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);

  .benchmark-aov-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 26px 32px;

    .benchmark-aov-top-part {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .benchmark-aov-top-part-text {
        color: #1a2835;
        flex-shrink: 0;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
      }

      .benchmark-aov-top-part-left {
        display: flex;
        align-items: center;
        gap: 8px;

        .benchmark-aov-top-box {
          width: 16px;
          height: 16px;
          border-radius: 2px;
          background: #ff6868;
        }

        .benchmark-aov-top-part-left-text {
          color: #1a2835;
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: 20px; /* 142.857% */
        }
      }
    }

    .benchmark-aov-content-title {
      color: #008160;
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      text-align: center;
      margin-top: 12px;
      margin-bottom: 24px;
    }

    .benchmark-aov--chart {
      .apexcharts-toolbar {
        display: none !important;
      }
    }

    .benchmark-aov-buttons {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 16px;

      .benchmark-aov-button {
        display: flex;
        padding: 8px 12px;
        align-items: center;
        gap: 10px;
        border-radius: 20px;
        background: rgba(25, 117, 255, 0.08);
        color: #00c191;
        text-decoration: none;
        cursor: pointer;
        border: 1px solid #00c191;
        outline: none;
        transition: background-color 0.3s;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;

        &.button-active {
          background: #008160;
          color: white;
          border: 1px solid #008160;
        }
      }
    }
  }
}
</style>
