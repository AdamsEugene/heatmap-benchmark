<template>
  <div class="main">
    <benchmark-banner />
    <h1>Industry Benchmarks</h1>
    <div class="benchmark-timeline">
      <div class="benchmark-timeline-left">
        <p class="benchmark-timeline-main-text">Timeline</p>
        <div class="benchmark-timeline-dropdown">
          <p class="benchmark-timeline-main-dropdown-text">Last 7 days</p>
          <p class="arrow-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="#01101E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </div>
      </div>
      <div class="benchmark-timeline-right">
        <p class="benchmark-timeline-right-text">Change Settings</p>
      </div>
    </div>
    <div class="benchmark-grid-container">
      <benchmark-metrics v-for="item in 6" :key="item" />
    </div>
    <div>
      <benchmark-a-o-v />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BenchmarkBanner from "./BenchmarkBanner.vue";
import BenchmarkMetrics from "./BenchmarkMetrics.vue";
import BenchmarkAOV from "./BenchmarkAOV.vue";

export default defineComponent({
  components: { BenchmarkBanner, BenchmarkMetrics, BenchmarkAOV },
  data() {
    return {
      show: true,
    };
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 12px;
}

.benchmark-timeline {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .benchmark-timeline-left {
    align-items: center;
    display: flex;
    gap: 16px;

    .benchmark-timeline-main-text {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 18px;
      min-width: 143px;
    }

    .benchmark-timeline-dropdown {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;

      .benchmark-timeline-main-dropdown-text {
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        opacity: 0.8;
      }

      .arrow-down {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: -1px;
      }
    }
  }

  .benchmark-timeline-right {
    .benchmark-timeline-right-text {
      color: #449ff4;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 18.2px;
      letter-spacing: -0.4px;
      cursor: pointer;
    }
  }
}

.benchmark-grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 columns with equal width */
  gap: 16px; /* Adjust the gap between items */
}
</style>
