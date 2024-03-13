<template>
  <div class="benchmark-banner">
    <div class="benchmark-banner-left">
      <div class="benchmark-banner-icon">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="10" fill="#225CAF" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 17C11.4477 17 11 16.5523 11 16L11 11.5C11 10.9477 11.4477 10.5 12 10.5C12.5523 10.5 13 10.9477 13 11.5L13 16C13 16.5523 12.5523 17 12 17Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 9.5C11.4477 9.5 11 9.05228 11 8.5L11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8L13 8.5C13 9.05228 12.5523 9.5 12 9.5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div class="benchmark-banner-content">
        <p class="benchmark-banner-content-header">Unlock revenue growth</p>
        <p class="benchmark-banner-content-text">
          Congratulations, setup's complete! While your dashboard data is being
          prepared, take time to explore industry insights and performance
          details. We'll let you know as soon as the initial insights are
          available
        </p>
      </div>
    </div>
    <div class="benchmark-banner-right">
      <div class="benchmark-banner-close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.79289 8.29289C8.18342 7.90237 8.81658 7.90237 9.20711 8.29289L16.2071 15.2929C16.5976 15.6834 16.5976 16.3166 16.2071 16.7071C15.8166 17.0976 15.1834 17.0976 14.7929 16.7071L7.79289 9.70711C7.40237 9.31658 7.40237 8.68342 7.79289 8.29289Z"
            fill="#004F3B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.2071 8.29289C16.5976 8.68342 16.5976 9.31658 16.2071 9.70711L9.20711 16.7071C8.81658 17.0976 8.18342 17.0976 7.79289 16.7071C7.40237 16.3166 7.40237 15.6834 7.79289 15.2929L14.7929 8.29289C15.1834 7.90237 15.8166 7.90237 16.2071 8.29289Z"
            fill="#004F3B"
          />
        </svg>
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
*{
  font-family: Montserrat;
}
.benchmark-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 89px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid#449ff4;
  background: #d9f4fe;
  padding: 12px 28px 12px 12px;

  .benchmark-banner-left {
    display: flex;
    /* align-items: end; */
    gap: 12px;

    .benchmark-banner-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      flex-shrink: 0;

      .benchmark-banner-content-header {
        color: #0d2d75;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 18px; /* 128.571% */
      }

      .benchmark-banner-content-text {
        color: #0d2d75;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; 
        max-width: 772px;;
      }
    }
  }

  .benchmark-banner-close {
    cursor: pointer;
  }
}
</style>
