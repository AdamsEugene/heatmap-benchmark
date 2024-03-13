<template>
  <div class="benchmark-modal">
    <div class="benchmark-modal-content">
      <div class="benchmark-modal-content-header">
        <div class="benchmark-modal-top">
          <h3 class="benchmark-modal-top_text">Notification settings</h3>
          <button
            class="benchmark-close-wrapper"
            @click="updateEditModal(false)"
          >
            <img
              class="benchmark-close-button"
              src="/src/assets/close.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <div id="benchmark-button-selection-wrapper">
        <div
          v-for="(button, index) in buttons"
          :key="index"
          @click="toggleSettingsType(button.type)"
          :class="{
            'benchmark-selection-button': true,
            'benchmark-active': selectedSettingsType === button.type,
          }"
        >
          {{ button.label }}
        </div>
      </div>

      <div class="benchmark-input-wrapper">
        <div class="input-with-button">
          <p class="benchmark-title email">{{ selectedInputLabel }}</p>
          <div class="input-container">
            <input
              v-if="selectedSettingsType === 'email'"
              type="text"
              class="input-field"
              placeholder="example@test.com"
            />
            <input
              v-if="selectedSettingsType === 'phone'"
              type="tel"
              class="input-field"
              placeholder="02439182738"
            />
            <button class="send-button">Change</button>
          </div>
        </div>
      </div>

      <div class="benchmark-modal-body">
        <div class="benchmark-modal-body-content">
          <div>
            <p class="benchmark-title">Select your reporting frequency</p>

            <div class="benchmark-noti">
              <div v-for="notification in notifications" :key="notification.id">
                <div
                  class="benchmark-radio-wrapper"
                  :class="{
                    'benchmark-radio-wrapper-active':
                      selectedNotificationId === notification.id,
                  }"
                >
                  <input
                    class="benchmark-radio"
                    type="radio"
                    :name="notification.name"
                    :id="notification.id"
                    v-model="selectedNotificationId"
                    :value="notification.id"
                  />
                  <label class="benchmark-radio-label" :for="notification.id">{{
                    notification.label
                  }}</label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p class="benchmark-title">Select the category of reports</p>

            <div class="benchmark-noti grid">
              <div class="benchmark-grid">
                <div v-for="report in reports" :key="report.id">
                  <div
                    class="benchmark-checkbox-wrapper"
                    :class="{
                      'benchmark-checkbox-wrapper-active': report.checked,
                    }"
                  >
                    <input
                      class="benchmark-checkbox"
                      type="checkbox"
                      :name="report.name"
                      :id="report.id"
                      v-model="report.checked"
                    />
                    <label class="benchmark-checkbox-label" :for="report.id">{{
                      report.label
                    }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="benchmark-modal-footer">
        <div class="benchmark-modal-footer-content">
          <button class="benchmark-modal-button">
            <span class="benchmark-modal-button-text">Save changes</span>
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
  props: ["updateEditModal"],
  data() {
    return {
      notifications: [
        { id: "daily", name: "frequency", label: "Daily", checked: false },
        { id: "weekly", name: "frequency", label: "Weekly", checked: false },
        { id: "monthly", name: "frequency", label: "Monthly", checked: false },
        {
          id: "customDates",
          name: "frequency",
          label: "Custom Dates",
          checked: false,
        },
      ],
      reports: [
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
      selectedNotificationId: null,
      selectedSettingsType: "email",
      buttons: [
        { label: "1. E-mail Settings", type: "email" },
        { label: "2. Phone Settings", type: "phone" },
      ],
    };
  },
  computed: {
    selectedInputLabel() {
      return this.selectedSettingsType === "email" ? "E-mail" : "Phone number";
    },
  },
  methods: {
    toggleSettingsType(type: any) {
      this.selectedSettingsType = type;
    },
  },
});
</script>

<style scoped>
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
}

.benchmark-modal-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 750px;
  /* min-height: 447px; */
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
      /* flex-direction: column; */
      justify-content: space-between;
      /* width: fit-content; */
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
    }
  }

  #benchmark-button-selection-wrapper {
    display: flex;
    margin-top: 12px;
    padding: 6px 16px;
  }

  .benchmark-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.4rem;
  }

  .benchmark-checkbox {
    margin-right: 0.5rem;
  }

  .benchmark-checkbox-label {
    font-size: 14px;
    font-weight: 400;
  }

  .benchmark-modal-body {
    display: flex;
    padding: 32px 16px;
    /* min-height: 419px; */

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

      .benchmark-noti {
        display: flex;
        /* flex-direction: column; */
        height: fit-content;
        padding: 12px 0;
        /* gap: -56px; */

        .benchmark-radio-wrapper {
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 9px;
          flex-shrink: 0;
          background-color: #fff;
          border-radius: 8px;
          padding: 12px 18px 12px 10px;
          /* width: 148px; */

          .benchmark-radio {
            flex-shrink: 0;
            border-radius: 10px;
            border: 1px solid #e6e7e8;
            padding: 0 12px;
          }

          .benchmark-radio-label {
            color: #1a2128;
            text-align: center;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
          }
        }
      }
    }
  }

  .benchmark-title {
    font-size: 14px;
    font-weight: 600;
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
      justify-content: end;
      align-items: center;
      width: 100%;
      padding: 0 16px;

      .benchmark-buttons {
        display: flex;
        gap: 16px;
        align-items: center;

        .benchmark-button {
          width: fit-content;
          /* Hug (130px) */
          height: fit-content;
          /* Hug (23px) */
          padding: 4px 10px;
          /* 4px top/bottom, 10px left/right */
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
        /* top: 365px; */
        /* left: 254px; */
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

  .benchmark-radio-wrapper-active {
    background-color: #efefef !important;
    border-radius: 5px;
  }

  .benchmark-selection-button {
    width: fit-content;
    height: fit-content;
    padding: 5px 16px;
    border-radius: 28px;
    font-size: 14px;
    font-weight: 700;
    gap: 10px;
    background: #efefef;
    margin-right: 16px;
    cursor: pointer;

    &.benchmark-active {
      background-color: #e2fdec;
    }
  }
}

.benchmark-input-wrapper {
  padding: 0px 16px;
  margin-top: 20px;
}

/* Container styles */
.input-with-button {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Input container styles */
.input-container {
  position: relative;
  width: 100%;
}

.email {
  margin-bottom: 6px;
}

.input-field {
  padding: 8px;
  width: 100%;
  border: 1px solid #e6e7e8;
  padding: 16px 10px;
  border-radius: 10px;
}

/* change button styles */
.send-button {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px 16px;
  color: #07cc4a;
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.benchmark-close-button {
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.benchmark-close-wrapper {
  background-color: transparent;
  border: none;
}
</style>
