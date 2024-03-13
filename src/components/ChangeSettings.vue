<template>
  <div class="benchmark-change-settings">
    <div class="benchmark-change-settings-top">
      <p class="benchmark-change-settings-title">Notifications</p>
      <p class="benchmark-change-settings-button">Edit</p>
    </div>
    <div class="benchmark-change-settings-bar" />
    <div class="benchmark-change-settings-content">
      <div class="benchmark-change-settings-content-item">
        <div class="benchmark-change-settings-content-input-wrapper toggle">
          <label for="email-alert" class="benchmark-change-settings-label"
            >E-mail alerts</label
          >
          <input
            type="checkbox"
            name="email-alert"
            id="email-alert"
            class="toggle-checkbox"
          />
          <div class="toggle-switch"></div>
        </div>
        <p class="benchmark-change-settings-content-text">Weekly updates</p>
        <p class="benchmark-change-settings-content-text">4 metrics</p>
      </div>
      <div class="benchmark-change-settings-content-item">
        <div class="benchmark-change-settings-content-input-wrapper toggle">
          <label for="text-alert" class="benchmark-change-settings-label"
            >Text alerts</label
          >
          <input
            type="checkbox"
            name="text-alert"
            id="text-alert"
            class="toggle-checkbox"
          />
          <div class="toggle-switch"></div>
        </div>
        <p class="benchmark-change-settings-content-text">Weekly updates</p>
        <p class="benchmark-change-settings-content-text">4 metrics</p>
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
.benchmark-change-settings {
  width: 100%;
  min-height: 117px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 6px 0px rgba(28, 39, 49, 0.08);

  .benchmark-change-settings-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
  }

  .benchmark-change-settings-title {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18.2px;
    letter-spacing: -0.4px;
  }

  .benchmark-change-settings-button {
    color: #00c191;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18.2px;
    letter-spacing: -0.4px;
    cursor: pointer;
  }

  .benchmark-change-settings-bar {
    width: 100%;
    height: 1.2px;
    background: #e5e5e5;
  }

  .benchmark-change-settings-content {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 12px;

    .benchmark-change-settings-content-item {
      display: flex;
      align-items: center;
      gap: 64px;

      .benchmark-change-settings-content-input-wrapper {
        display: flex;
        align-items: center;
        gap: 13px;

        .benchmark-change-settings-label {
          color: #1a2128;
          text-align: left;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px; /* 142.857% */
          min-width: 90px;
        }
      }

      .benchmark-change-settings-content-text {
        color: #1a2128;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
      }
    }
  }
}

.toggle-switch {
  display: inline-block;
  background: #E6E7E8;
  border-radius: 16px;
  width: 32px;
  height: 18px;
  position: relative;
  vertical-align: middle;
  transition: background 0.25s;
  &:before,
  &:after {
    content: "";
  }
  &:before {
    display: block;
    background: linear-gradient(to bottom, #fff 0%, #E6E7E8 100%);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    width: 16px;
    height: 16px;
    position: absolute;
    top: 1px;
    left: 1px;
    transition: left 0.25s;
  }
  .toggle:hover &:before {
    background: linear-gradient(to bottom, #fff 0%, #fff 100%);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  }
  .toggle-checkbox:checked + & {
    background: #449FF4;
    &:before {
      left: 16px;
    }
  }
}
.toggle-checkbox {
  position: absolute;
  visibility: hidden;
}
</style>
./components/CategoryOfReports.vue
