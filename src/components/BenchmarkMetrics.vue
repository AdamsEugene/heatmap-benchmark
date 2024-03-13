<template>
  <div class="benchmark-metrics-wrapper">
    <div class="benchmark-metrics-top">
      <p class="benchmark-metrics-top-title">AOV</p>
      <div class="benchmark-metrics-top-metrics">
        <div class="benchmark-metrics-top-metrics-item">
          <div class="benchmark-metrics-top-metrics-item-top">
            <p class="benchmark-metrics-top-p">JB</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
            >
              <path
                d="M5.19526 7.5C5.00281 7.83333 4.52169 7.83333 4.32924 7.5L0.432124 0.75C0.239674 0.416666 0.480236 -1.62922e-07 0.865136 -1.96571e-07L8.65936 -8.77964e-07C9.04426 -9.11613e-07 9.28483 0.416666 9.09238 0.749999L5.19526 7.5Z"
                fill="#FF4A3D"
              />
            </svg>
          </div>
          <div class="benchmark-metrics-top-metrics-item-bottom">
            <p class="benchmark-metrics-top-metrics-item-bottom-text">-</p>
          </div>
        </div>
        <div class="benchmark-metrics-top-metrics-item">
          <div class="benchmark-metrics-top-metrics-item-top">
            <p class="benchmark-metrics-top-p">Industry</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
            >
              <path
                d="M4.33013 0.750001C4.52258 0.416667 5.0037 0.416667 5.19615 0.75L9.09327 7.5C9.28572 7.83333 9.04515 8.25 8.66025 8.25L0.866025 8.25C0.481125 8.25 0.240563 7.83333 0.433013 7.5L4.33013 0.750001Z"
                fill="#07CC4A"
              />
            </svg>
          </div>
          <div class="benchmark-metrics-top-metrics-item-bottom">
            <p class="benchmark-metrics-top-metrics-item-bottom-text">9.72%</p>
          </div>
        </div>
      </div>
    </div>
    <div class="horizontal-line" />
    <div class="benchmark-metrics-bottom">
      <p class="benchmark-metrics-bottom-text">Relative Performance</p>
      <div class="benchmark-metrics-bottom-value-wrapper">
        <p class="benchmark-metrics-bottom-value">-</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
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

.horizontal-line {
  width: 100%;
  height: 1px;
  background-color: #f3f3f3;
}

.benchmark-metrics-wrapper {
  display: flex;
  min-width: 173px;
  padding: 16px 10px 10px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--corner-med, 8px);
  border-radius: var(--corner-med, 8px);
  background: var(--Grey-White, #fff);
  box-shadow: 1px 0px 6px 0px rgba(28, 39, 49, 0.08);

  .benchmark-metrics-top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    width: 100%;
    align-self: stretch;

    .benchmark-metrics-top-title {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 18.2px; /* 130% */
      letter-spacing: -0.4px;
    }

    .benchmark-metrics-top-metrics {
      display: flex;
      min-width: 156px;
      width: 100%;
      align-items: flex-start;
      gap: 8px;

      .benchmark-metrics-top-metrics-item {
        display: flex;
        min-width: 74px;
        width: calc(50% - 4px);
        padding: 8px;
        flex-direction: column;
        align-items: flex-start;
        gap: 37px;
        flex-shrink: 0;
        border-radius: 4px;
        background: #f3f3f3;

        .benchmark-metrics-top-metrics-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 10px;

          .benchmark-metrics-top-p {
            color: #4e4e4e;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: 15.6px; /* 156% */
            letter-spacing: -0.4px;
          }
        }

        .benchmark-metrics-top-metrics-item-bottom {
          .benchmark-metrics-top-metrics-item-bottom-text {
            color: #000;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 15.6px; /* 111.429% */
            letter-spacing: -0.4px;
          }
        }
      }
    }
  }

  .benchmark-metrics-bottom {
    display: flex;
    min-width: 173px;
    width: 100%;
    /* padding: 10px; */
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 8px;

    .benchmark-metrics-bottom-text {
      color: #4e4e4e;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 15.5px; /* 155% */
      letter-spacing: -0.2px;
    }

    .benchmark-metrics-bottom-value-wrapper {
      display: flex;
      padding: 12px 7.5px;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      align-self: stretch;
      border-radius: 4px;
      background: #f3f3f3;

      .benchmark-metrics-bottom-value {
        color: #1a2128;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }
}
</style>
