<template>
  <div class="benchmark-modal">
    <div class="benchmark-modal-content">
      <div class="benchmark-modal-content-header">
        <div class="benchmark-modal-top">
          <h3 class="benchmark-modal-top_text">
            Select the category of reports
          </h3>
        </div>
        <p class="benchmark-modal-top-content">
          Choose the type of reports you prefer to get on a timely basis.
        </p>
        <p class="benchmark-modal-top-content green_color">
          you can change this in settings later
        </p>
      </div>
      <div class="benchmark-modal-body">
        <div class="benchmark-modal-body-content">
          <div class="benchmark-custom-circle">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 7L1 7"
                stroke="#01101E"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M7 1L1 7L7 13"
                stroke="#01101E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p class="benchmark-title">Select as many options as you'd like.</p>
          <div class="benchmark-noti">
            <div v-for="notification in notifications" :key="notification.id">
              <div
                class="benchmark-checkbox-wrapper"
                :class="{
                  'benchmark-checkbox-wrapper-active': notification.checked,
                }"
              >
                <input
                  class="benchmark-checkbox"
                  type="checkbox"
                  :name="notification.name"
                  :id="notification.id"
                  v-model="notification.checked"
                />
                <label
                  class="benchmark-checkbox-label"
                  :for="notification.id"
                  >{{ notification.label }}</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="benchmark-modal-footer">
        <div class="benchmark-modal-footer-content">
          <div class="benchmark-buttons">
            <div class="benchmark-button benchmark-active">
              1. Set up contact
            </div>
            <div class="benchmark-button">2. Report frequency</div>
            <div class="benchmark-button">3. Select metrics</div>
          </div>
          <button class="benchmark-modal-button">
            <span class="benchmark-modal-button-text">Next</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7L13 7"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M7 13L13 7L7 0.999999"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      notifications: [
        { id: "AOV", name: "AOV", label: "AOV", checked: false },
        {
          id: "Revenue per Session",
          name: "Revenue per Session",
          label: "Revenue per Session",
          checked: false,
        },
        {
          id: "Conversion Rate",
          name: "Conversion Rate",
          label: "Conversion Rate",
          checked: false,
        },
        {
          id: "Total Revenue",
          name: "Total Revenue",
          label: "Total Revenue",
          checked: false,
        },
        {
          id: "Total Traffic",
          name: "Total Traffic",
          label: "Total Traffic",
          checked: false,
        },
        {
          id: "Time on Site",
          name: "Time on Site",
          label: "Time on Site",
          checked: false,
        },
      ],
    };
  },
});
</script>

<style scoped>
*{
  font-family: Montserrat;
}

.benchmark-modal {
  width: 100%;
  height: 100%;
}

p {
  margin: 0;
  padding: 0;
}

.benchmark-modal-content {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  min-height: 609px;
  border-radius: 10px;
  background: #fff;
  box-shadow:
    0px 32px 41px -23px rgba(24, 24, 28, 0.07),
    0px 2px 6px 0px rgba(24, 24, 28, 0.06);

  .benchmark-modal-content-header {
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 24px;
    border: 0;
    gap: 12px;
    border-bottom: 1px solid #cccfd2;

    .benchmark-modal-top {
      display: flex;
      flex-direction: column;
      width: fit-content;
      height: fit-content;
      gap: 16px;

      .benchmark-modal-top_text {
        font-size: 24px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #222124;
      }
    }

    .benchmark-modal-top-content {
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: -0.4px;
      text-align: left;
      max-width: 653px;
      color: #01101e;

      &.green_color {
        color: #00c191;
        margin-top: -10px;
        font-weight: lighter;
      }
    }
  }

  .benchmark-modal-body {
    display: flex;
    padding: 32px 16px;
    min-height: 419px;

    .benchmark-modal-body-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 0px 6px;

      .benchmark-custom-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        padding: 6px;
        border-radius: 1000px;
        background-color: #e6e7e8;
        cursor: pointer;
      }

      .benchmark-title {
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: -0.4px;
        text-align: left;
        color: #01101e;
      }

      .benchmark-noti {
        display: flex;
        flex-direction: column;
        height: fit-content;
        gap: 16px;

        .benchmark-checkbox-wrapper {
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 9px;
          flex-shrink: 0;
          background-color: #fff;
          border-radius: 8px;
          padding: 6px 0px;
          width: 188px;

          .benchmark-checkbox {
            flex-shrink: 0;
            border-radius: 10px;
            border: 1px solid #e6e7e8;
            padding: 0 12px;
            width: 16px;
            height: 16px;
            margin-right: 6px;
          }

          .benchmark-checkbox-label {
            color: #1a2128;
            text-align: center;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 20px;
          }
        }
      }
    }
  }

  .benchmark-modal-footer {
    display: flex;
    align-items: end;
    justify-self: end;
    justify-content: center;
    align-items: center;
    min-height: 80px;
    border-top: 1px solid #cccfd2;

    .benchmark-modal-footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 16px;

      .benchmark-buttons {
        display: flex;
        gap: 16px;
        align-items: center;

        .benchmark-button {
          width: fit-content; /* Hug (130px) */
          height: fit-content; /* Hug (23px) */
          padding: 4px 10px; /* 4px top/bottom, 10px left/right */
          border-radius: 28px;
          font-size: 12px;
          font-weight: 700;
          gap: 10px;
          background: #f6f6f6;

          &.benchmark-active {
            background-color: #e2fdec;
          }
        }
      }

      .benchmark-modal-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        height: fit-content;
        top: 365px;
        left: 254px;
        padding: 10px 20px;
        border-radius: 8px;
        gap: 10px;
        background-color: #00936f;
        border: none;
        cursor: pointer;

        .benchmark-modal-button-text {
          font-size: 15px;
          font-weight: 600;
          line-height: 26px;
          letter-spacing: 0em;
          text-align: left;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
