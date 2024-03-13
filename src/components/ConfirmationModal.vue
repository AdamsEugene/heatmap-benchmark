<template>
  <div class="benchmark-modal">
    <div class="benchmark-modal-content">
      <div class="benchmark-header-no-border">
        <p class="benchmark-header-no-border-title">Notification update</p>
        <span class="benchmark-modal-close" @click="updateConfirmModal(false)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 5L5 19M19 19L5 5"
              stroke="#727279"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </div>
      <div class="benchmark-modal-content-body">
        <div class="benchmark-modal-content-body-icon">
          <p class="benchmark-modal-content-body-icon-text">!</p>
        </div>
        <div class="benchmark-modal-content-body-content">
          <p class="benchmark-modal-content-body-content-head">
            Are you sure you want to pause?
          </p>
          <p
            class="benchmark-modal-content-body-content-text"
            v-html="formattedText"
          ></p>
        </div>
        <div class="benchmark-modal-content-footer">
          <p>
            Feel free to adjust your notification settings
            <span class="new-color">here.</span>
          </p>
        </div>
      </div>
      <div class="benchmark-modal-footer">
        <button
          class="benchmark-modal-footer-no-color-button"
          @click="updateConfirmModal(false, '')"
        >
          Dismiss
        </button>
        <button class="benchmark-modal-footer-no-color-button confirm">
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: ["text", "updateConfirmModal"],
  data() {
    return {
      show: false,
    };
  },
  computed: {
    formattedText() {
      return this.text;
    },
  },
});
</script>

<style>
.benchmark-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(31, 32, 34, 0.5);
  z-index: 9999;

  .benchmark-modal-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 750px;
    height: 592px;
    border-radius: 10px;
    background: #fff;
    box-shadow:
      0px 32px 41px -23px rgba(24, 24, 28, 0.07),
      0px 2px 6px 0px rgba(24, 24, 28, 0.06);

    .benchmark-header-no-border {
      display: flex;
      padding: 20px 16px 20px 24px;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      border-bottom: 1px solid #f6f6f6;

      .benchmark-header-no-border-title {
        color: #222124;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 125% */
      }

      .benchmark-modal-close {
        cursor: pointer;
      }
    }

    .benchmark-modal-content-body {
      display: flex;
      padding: 29px 101px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;
      flex: 1 0 0;
      align-self: stretch;

      .benchmark-modal-content-body-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 144px;
        height: 144px;
        flex-shrink: 0;
        border-radius: 8px;
        background: rgba(119, 219, 137, 0.2);
        margin-bottom: 12px;

        .benchmark-modal-content-body-icon-text {
          color: #07cc4a;
          text-align: center;
          font-family: "Circular Std";
          font-size: 100px;
          font-style: normal;
          font-weight: 900;
          line-height: 20px; /* 20% */
        }
      }

      .benchmark-modal-content-body-content {
        display: flex;
        height: 178.667px;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        flex-shrink: 0;

        .benchmark-modal-content-body-content-head {
          color: #34404b;
          text-align: center;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: 32px;
          width: 478px;
          flex-shrink: 0;
        }

        .benchmark-modal-content-body-content-text {
          color: #34404b;
          text-align: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;

          strong {
            font-weight: 700;
          }
        }
      }

      .benchmark-modal-content-footer {
        color: #34404b;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px; /* 93.75% */
        letter-spacing: -0.4px;

        .new-color {
          font-weight: 500;
          color: #07cc4a;
          cursor: pointer;
        }
      }
    }

    .benchmark-modal-footer {
      display: flex;
      justify-content: center;
      padding: 20px 24px;
      align-items: center;
      gap: 20px;

      .benchmark-modal-footer-no-color-button {
        display: flex;
        padding: 10px 20px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        color: #4d5861;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
        border-radius: 10px;
        border: 1px solid #4d5861;
        outline: none;
        cursor: pointer;

        &.confirm {
          background: #07cc4a;
          color: #fff;
        }
      }
    }
  }
}
</style>
<!-- ./components/CategoryOfReports.vue -->
