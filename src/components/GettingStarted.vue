<template>
  <div class="benchmark-modal">
    <!-- Step 1 content -->
    <div v-if="currentStep === 1" class="benchmark-modal-body">
      <div class="benchmark-modal-content">
        <div class="benchmark-modal-content-header">
          <div class="benchmark-modal-top">
            <h3 class="benchmark-modal-top_text">Choose how to get notified!</h3>
          </div>
          <p class="benchmark-modal-top-content">
            Select the devices on how you want to receive notifications. Receive concise reports directly to your phone
            as text messages or on your e-mail. Stay updated with key insights, instantly accessible
          </p>
        </div>
        <div class="benchmark-modal-body">
          <div class="benchmark-modal-body-content">
            <p class="benchmark-title">Select as many options as you'd like.</p>
            <div class="benchmark-noti">
              <div class="benchmark-noti-content">
                <div class="benchmark-checkbox-wrapper">
                  <input class="benchmark-checkbox" type="checkbox" name="email" id="email" v-model="emailSelected"
                    @change="updateNotificationMethods" />
                </div>
                <label class="benchmark-checkbox-label" for="email">
                  <p class="benchmark-checkbox-head">E-mail</p>
                  <p class="benchmark-checkbox-text">
                    receive timely reports directly in your inbox
                  </p>
                </label>
              </div>
              <div class="benchmark-noti-content">
                <div class="benchmark-checkbox-wrapper">
                  <input class="benchmark-checkbox" type="checkbox" name="phone" id="phone" v-model="phoneSelected"
                    @change="updateNotificationMethods" />
                </div>
                <label class="benchmark-checkbox-label" for="phone">
                  <p class="benchmark-checkbox-head">Phone</p>
                  <p class="benchmark-checkbox-text">
                    receive timely reports directly via
                    <strong>SMS</strong> service no charges required.
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="benchmark-modal-footer">
          <div class="benchmark-modal-footer-content">
            <div class="benchmark-buttons">
              <div :class="{ 'benchmark-button': true, 'benchmark-active': currentStep === 1 }"> 1. Set up contact
              </div>
              <div class="benchmark-button">2. Report frequency</div>
              <div class="benchmark-button">3. Select metrics</div>
            </div>
            <button class="benchmark-modal-button" @click="nextStep" :class="{ 'disabled': isNextButtonDisabled }" :disabled="isNextButtonDisabled">
              <span class="benchmark-modal-button-text">Next</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7L13 7" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                <path d="M7 13L13 7L7 0.999999" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Step 2 content -->
    <div v-if="currentStep === 2" class="benchmark-modal-body">
      <div class="benchmark-modal-content">
        <div class="benchmark-modal-content-header">
          <div class="benchmark-modal-top">
            <h3 class="benchmark-modal-top_text">
              {{ getHeaderText }}
            </h3>
          </div>
          <p class="benchmark-modal-top-content">
            Enter the {{ getInputLabelText }} on which you want to receive insights. <br> You can change this later in
            settings.
          </p>
        </div>
        <div class="benchmark-modal-body">
          <div class="benchmark-modal-body-content">
            <div class="benchmark-custom-circle" @click="backStep">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7L1 7" stroke="#01101E" stroke-width="1.5" stroke-linecap="round" />
                <path d="M7 1L1 7L7 13" stroke="#01101E" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <div class="benchmark-noti">
              <div v-if="selectedNotificationMethods.includes('email')" class="benchmark-input-wrapper">
                <label class="benchmark-input-label" for="email">E-mail</label>
                <input class="benchmark-input" type="email" name="email" id="email"
                  placeholder="xya@examplewebsite.com" />
              </div>
              <div v-if="selectedNotificationMethods.includes('phone')" class="benchmark-input-wrapper">
                <label class="benchmark-input-label" for="phone">Phone number</label>
                <input class="benchmark-input" type="phone" name="phone" id="phone" placeholder="8807874507" />
              </div>
            </div>
          </div>
        </div>
        <div class="benchmark-modal-footer">
          <div class="benchmark-modal-footer-content">
            <div class="benchmark-buttons">
              <div :class="{ 'benchmark-button': true, 'benchmark-active': currentStep === 2 }"> 1. Set up contact
              </div>
              <div class="benchmark-button">2. Report frequency</div>
              <div class="benchmark-button">3. Select metrics</div>
            </div>
            <button class="benchmark-modal-button" @click="nextStep" :class="{ 'disabled': isNextButtonDisabled }" :disabled="isNextButtonDisabled">
              <span class="benchmark-modal-button-text">Next</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7L13 7" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                <path d="M7 13L13 7L7 0.999999" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Step 3 content -->
    <div v-if="currentStep === 3" class="benchmark-modal-body">
      <div class="benchmark-modal-content">
        <div class="benchmark-modal-content-header">
          <div class="benchmark-modal-top">
            <h3 class="benchmark-modal-top_text">
              Select your reporting frequency
            </h3>
          </div>
          <p class="benchmark-modal-top-content">
            Choose between daily, weekly, or monthly reports or choose custom
            dates <br />
            tailored to your preference
          </p>
        </div>
        <div class="benchmark-modal-body">
          <div class="benchmark-modal-body-content">
            <div class="benchmark-custom-circle" @click="backStep">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7L1 7" stroke="#01101E" stroke-width="1.5" stroke-linecap="round" />
                <path d="M7 1L1 7L7 13" stroke="#01101E" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <div class="benchmark-noti">
              <div v-for="notification in notifications" :key="notification.id">
                <div class="benchmark-radio-wrapper"
                  :class="{ 'benchmark-radio-wrapper-active': selectedNotificationId === notification.id, }">
                  <input class="benchmark-radio" type="radio" :name="notification.name" :id="notification.id"
                    v-model="selectedNotificationId" :value="notification.id" />
                  <label class="benchmark-radio-label" :for="notification.id">{{
      notification.label
    }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="benchmark-modal-footer">
          <div class="benchmark-modal-footer-content">
            <div class="benchmark-buttons">
              <div class="benchmark-button"> 1. Set up contact </div>
              <div :class="{ 'benchmark-button': true, 'benchmark-active': currentStep === 3 }">2. Report frequency
              </div>
              <div class="benchmark-button">3. Select metrics</div>
            </div>
            <button class="benchmark-modal-button" @click="nextStep" :class="{ 'disabled': isNextButtonDisabled }" :disabled="isNextButtonDisabled">
              <span class="benchmark-modal-button-text">Next</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7L13 7" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                <path d="M7 13L13 7L7 0.999999" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Step 4 content -->
    <div v-if="currentStep === 4" class="benchmark-modal-body">
      <div class="benchmark-modal-content">
        <div class="benchmark-modal-content-header">
          <div class="benchmark-modal-top">
            <h3 class="benchmark-modal-top_text">Select the category of reports!</h3>
          </div>
          <p class="benchmark-modal-top-content">
            Choose the type of reports you prefer to get on a timely basis. <br>
            <span class="green_color">you can change this in settings later </span>
          </p>
        </div>
        <div class="benchmark-modal-body">
          <div class="benchmark-modal-body-content">
            <div class="benchmark-custom-circle" @click="backStep">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7L1 7" stroke="#01101E" stroke-width="1.5" stroke-linecap="round" />
                <path d="M7 1L1 7L7 13" stroke="#01101E" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <p class="benchmark-title">Select as many options as you'd like.</p>
            <div class="benchmark-noti">
              <div class="benchmark-noti-content">
                <div class="benchmark-checkbox-wrapper">
                  <input class="benchmark-checkbox" type="checkbox" name="AOV" id="AOV" v-model="reports[0].checked" />
                </div>
                <label class="benchmark-checkbox-label" for="AOV">
                  <p class="benchmark-checkbox-head">AOV</p>
                </label>
              </div>
              <div class="benchmark-noti-content">
                <div class="benchmark-checkbox-wrapper">
                  <input class="benchmark-checkbox" type="checkbox" name="Revenue_per_Session" id="Revenue_per_Session" v-model="reports[1].checked"/>
                    
                </div>
                <label class="benchmark-checkbox-label" for="Revenue_per_Session">
                  <p class="benchmark-checkbox-head">Revenue per Session </p>
                </label>
              </div>
              <div class="benchmark-noti-content">
                <div class="benchmark-checkbox-wrapper">
                  <input class="benchmark-checkbox" type="checkbox" name="Conversion_Rate" id="Conversion_Rate" v-model="reports[2].checked"  />
                </div>
                <label class="benchmark-checkbox-label" for="Conversion_Rate">
                  <p class="benchmark-checkbox-head">Conversion Rate </p>
                </label>
              </div>
              <div class="benchmark-noti-content">
                <div class="benchmark-checkbox-wrapper">
                  <input class="benchmark-checkbox" type="checkbox" name="Total_Revenue" id="Total_Revenue" v-model="reports[3].checked"/>
                </div>
                <label class="benchmark-checkbox-label" for="Total_Revenue">
                  <p class="benchmark-checkbox-head">Total Revenue </p>
                </label>
              </div>
              <div class="benchmark-noti-content">
                <div class="benchmark-checkbox-wrapper">
                  <input class="benchmark-checkbox" type="checkbox" name="Total_Traffic" id="Total_Traffic" v-model="reports[4].checked" />
                </div>
                <label class="benchmark-checkbox-label" for="Total_Traffic">
                  <p class="benchmark-checkbox-head">Total Traffic </p>
                </label>
              </div>
              <div class="benchmark-noti-content">
                <div class="benchmark-checkbox-wrapper">
                  <input class="benchmark-checkbox" type="checkbox" name="Time_on_Site" id="Time_on_Site" v-model="reports[5].checked" />
                </div>
                <label class="benchmark-checkbox-label" for="Time_on_Site">
                  <p class="benchmark-checkbox-head">Time on Site </p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="benchmark-modal-footer">
          <div class="benchmark-modal-footer-content">
            <div class="benchmark-buttons">
              <div class="benchmark-button"> 1. Set up contact </div>
              <div class="benchmark-button">2. Report frequency</div>
              <div :class="{ 'benchmark-button': true, 'benchmark-active': currentStep === 4 }">3. Select metrics</div>
            </div>
            <button class="benchmark-modal-button" @click="nextStep" :class="{ 'disabled': isNextButtonDisabled }" :disabled="isNextButtonDisabled">
              <span class="benchmark-modal-button-text">Next</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7L13 7" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                <path d="M7 13L13 7L7 0.999999" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
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
        { id: "daily", name: "frequency", label: "Daily", checked: false },
        { id: "weekly", name: "frequency", label: "Weekly", checked: false },
        { id: "monthly", name: "frequency", label: "Monthly", checked: false },
        { id: "customDates", name: "frequency", label: "Custom Dates", checked: false, },
      ],
      reports: [
        { id: "AOV", name: "AOV", label: "AOV", checked: false },
        { id: "Revenue per Session", name: "Revenue per Session", label: "Revenue per Session", checked: false },
        { id: "Conversion Rate", name: "Conversion Rate", label: "Conversion Rate", checked: false },
        { id: "Total Revenue", name: "Total Revenue", label: "Total Revenue", checked: false },
        { id: "Total Traffic", name: "Total Traffic", label: "Total Traffic", checked: false },
        { id: "Time on Site", name: "Time on Site", label: "Time on Site", checked: false },
      ],
      selectedNotificationId: null,
      show: true,
      currentStep: 1,
      activeStep: 1,
      steps: ['Set up contact', 'Add email and phone', 'Report frequency', 'Select metrics'],
      emailSelected: false,
      phoneSelected: false,
      selectedNotificationMethods: [] as string[],
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length && this.selectedNotificationMethods.length > 0) {
        this.currentStep++;
        this.activeStep = this.currentStep;
      }
    },
    backStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    setCurrentStep(stepNumber: any) {
      this.currentStep = stepNumber;
      this.activeStep = this.currentStep;
    },
    updateNotificationMethods() {
      this.selectedNotificationMethods = [];
      if (this.emailSelected) {
        this.selectedNotificationMethods.push('email');
      }
      if (this.phoneSelected) {
        this.selectedNotificationMethods.push('phone');
      }
    }
  },
  computed: {
    // isNextButtonDisabled() {
    //   if (this.currentStep === 1) {
    //     return !this.emailSelected && !this.phoneSelected;
    //   } else if (this.currentStep === 2) {
    //     return !(this.selectedNotificationMethods.includes('email') || this.selectedNotificationMethods.includes('phone'));
    //   } else if (this.currentStep === 3) {
    //     return this.selectedNotificationId === null;
    //   } else if (this.currentStep === 4) {
    //     return this.reports.every(report => !report.checked);
    //   } else {
    //     return true;
    //   }
    // },
    isNextButtonDisabled() {
  if (this.currentStep === 1) {
    return !this.emailSelected && !this.phoneSelected;
  } else if (this.currentStep === 2) {
    return !(this.selectedNotificationMethods.includes('email') || this.selectedNotificationMethods.includes('phone'));
  } else if (this.currentStep === 3) {
    return this.selectedNotificationId === null;
  } else if (this.currentStep === 4) {
    return this.reports.every(report => !report.checked);
  } else {
    return true;
  }
},
    getHeaderText() {
      if (this.emailSelected && this.phoneSelected) {
        return "Add Email & Phone to receive insights";
      } else if (this.emailSelected) {
        return "Add e-mail address to receive insights";
      } else if (this.phoneSelected) {
        return "Add Phone number to receive insights";
      } else {
        return "Choose how to get notified!";
      }
    },
    getInputLabelText() {
      if (this.emailSelected && this.phoneSelected) {
        return "email and phone";
      } else if (this.emailSelected) {
        return "email";
      } else if (this.phoneSelected) {
        return "phone";
      } else {
        return "email or phone";
      }
    }
  },
});
</script>

<style scoped>
.benchmark-modal {
  width: 100% !important;
  height: 100% !important;
}

p {
  margin: 0 !important;
  padding: 0 !important;
}

.benchmark-modal-content {
  position: fixed !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 750px !important;
  min-height: 609px !important;
  border-radius: 10px !important;
  background: #fff !important;
  box-shadow:
    0px 32px 41px -23px rgba(24, 24, 28, 0.07),
    0px 2px 6px 0px rgba(24, 24, 28, 0.06) !important;

  .benchmark-modal-content-header {
    display: flex !important;
    flex-direction: column !important;
    height: fit-content !important;
    padding: 24px !important;
    border: 0 !important;
    gap: 12px !important;
    border-bottom: 1px solid #cccfd2 !important;

    .benchmark-modal-top {
      display: flex !important;
      flex-direction: column !important;
      width: fit-content !important;
      height: fit-content !important;
      gap: 16px;

      .benchmark-modal-top_text {
        font-size: 24px !important;
        font-weight: 600 !important;
        line-height: 20px !important;
        letter-spacing: 0px !important;
        text-align: left !important;
        color: #222124 !important;
      }
    }

    .benchmark-modal-top-content {
      font-size: 14px !important;
      font-weight: 400 !important;
      line-height: 21px !important;
      letter-spacing: -0.4px !important;
      text-align: left !important;
      color: #01101e !important;
    }

  }

  .benchmark-modal-body {
    display: flex !important;
    padding: 32px 20px !important;
    min-height: 419px !important;

    .benchmark-modal-body-content {
      display: flex !important;
      flex-direction: column !important;
      gap: 12px !important;

      .benchmark-custom-circle {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        width: 36px !important;
        height: 36px !important;
        padding: 6px !important;
        border-radius: 1000px !important;
        background-color: #e6e7e8 !important;
        cursor: pointer;
      }

      .benchmark-title {
        font-size: 12px !important;
        font-weight: 400 !important;
        line-height: 15px;
        letter-spacing: -0.4px !important;
        text-align: left !important;
        color: #01101e !important;
      }

      label {
        margin-left: 10px !important;
      }

      .benchmark-noti {
        display: flex !important;
        flex-direction: column !important;
        height: fit-content !important;
        padding: 12px 0 !important;
        gap: 24px !important;

        .benchmark-input-wrapper {
          display: flex !important;
          width: 320px !important;
          height: 72px !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: flex-start !important;
          gap: 4px !important;
          flex-shrink: 0 !important;
          background-color: #fff !important;

          .benchmark-input {
            width: 320px !important;
            height: 48px !important;
            flex-shrink: 0 !important;
            border-radius: 10px !important;
            border: 1px solid #e6e7e8 !important;
            padding: 0 12px !important;
          }

          .benchmark-input-label {
            font-size: 14px !important;
            font-weight: 700 !important;
            line-height: 18px !important;
            letter-spacing: 0px !important;
            text-align: left !important;
            color: #1a2128 !important;
          }
        }

        .benchmark-radio-wrapper {
          display: flex !important;
          justify-content: start !important;
          align-items: center !important;
          flex-shrink: 0 !important;
          background-color: #fff !important;
          border-radius: 8px !important;
          padding: 8px 12px 8px 6px !important;

          .benchmark-radio {
            flex-shrink: 0 !important;
            border: 1px solid #e6e7e8 !important;
            padding: 8px !important;
            cursor: pointer !important;
          }

          .benchmark-radio-label {
            color: #1a2128 !important;
            text-align: center !important;
            font-size: 14px !important;
            font-style: normal !important;
            font-weight: 400 !important;
            cursor: pointer !important;
          }
        }

        .benchmark-radio-wrapper-active {
          background-color: #EFEFEF !important;

        }

        .benchmark-noti-content {
          display: flex !important;
          gap: 8 !important;

          .benchmark-checkbox-wrapper {
            display: flex !important;
            justify-content: center !important;
            align-items: cente !important;
            border-radius: 8px !important;
            background-color: #fff !important;

            .benchmark-checkbox {
              display: flex !important;
              width: 16px !important;
              height: 16px !important;
              justify-content: center !important;
              align-items: center !important;
              flex-shrink: 0 !important;
              background: #ffffff !important;
              border: 1px solid #e9eaf0 !important;
              border-radius: 4px !important;
              cursor: pointer !important;
              transition: background-color 0.3s ease !important;
              margin-right: 6px !important;

              &&:checked {
                background: #449ff4 !important;
              }
            }
          }

          .benchmark-checkbox-label {
            display: flex !important;
            flex-direction: column !important;
            gap: 2px !important;

            .benchmark-checkbox-head {
              font-size: 14px !important;
              font-weight: 700 !important;
              line-height: 18px !important;
              letter-spacing: 0em !important;
              text-align: left !important;
              color: #1a2128 !important;
            }

            .benchmark-checkbox-text {
              font-size: 14px !important;
              font-weight: 400 !important;
              line-height: 20px !important;
              letter-spacing: 0em !important;
              text-align: left !important;
              color: #1a2128 !important;
            }
          }
        }
      }
    }
  }

  .benchmark-modal-footer {
    display: flex !important;
    align-items: end !important;
    justify-self: end !important;
    justify-content: center !important;
    align-items: center !important;
    min-height: 0px !important;
    border-top: 1px solid #cccfd2 !important;

    .benchmark-modal-footer-content {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      width: 100% !important;

      .benchmark-buttons {
        display: flex !important;
        gap: 16px !important;
        align-items: center !important;

        .benchmark-button {
          width: fit-content !important;
          height: fit-content !important;
          padding: 4px 10px !important;
          border-radius: 28px !important;
          font-size: 12px !important;
          font-weight: 700 !important;
          gap: 10px !important;
          background: #f6f6f6 !important;

          &.benchmark-active {
            background-color: #e2fdec !important;
          }
        }
      }

      .benchmark-modal-button.disabled {
        background-color: #ccc !important; 
        cursor: not-allowed;
      }

      .benchmark-modal-button {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        width: fit-content !important;
        height: fit-content !important;
        top: 365px !important;
        left: 254px !important;
        padding: 10px 20px !important;
        border-radius: 8px !important;
        gap: 10px !important;
        background-color: #00936f !important;
        border: none !important;
        cursor: pointer !important;

        .benchmark-modal-button-text {
          font-size: 15px !important;
          font-weight: 600 !important;
          line-height: 26px !important;
          letter-spacing: 0em !important;
          text-align: left !important;
          color: #ffffff !important;
        }
      }
    }
  }

  .green_color {
    color: #00c191 !important;
    font-weight: lighter !important;
  }

}
</style>