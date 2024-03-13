<template>
  <div class="benchmark-modal">
    <div class="benchmark-modal-content">
      <div class="benchmark-modal-content-header">
        <div class="benchmark-modal-top">
          <h3 class="benchmark-modal-top_text">Choose how to get notified!</h3>
        </div>
        <p class="benchmark-modal-top-content">
          Select the devices on how you want to receive notifications. Receive concise reports directly to your phone as text messages or on your e-mail. Stay updated with key insights, instantly accessible 
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
            <div class="benchmark-noti-content">
              <div class="benchmark-checkbox-wrapper">
                <input
                  class="benchmark-checkbox"
                  type="checkbox"
                  name="email"
                  id="email"
                />
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
                <input
                  class="benchmark-checkbox"
                  type="checkbox"
                  name="phone"
                  id="phone"
                />
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
            <div class="benchmark-button benchmark-active"> 1. Set up contact </div>
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
      show: true,
    };
  },
});
</script>

<style scoped>
*{
  font-family: Montserrat !important;
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
      /* max-width: 653px; */
      color: #01101e;
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

      label {
            margin-left: 10px;
        }

      .benchmark-noti {
        display: flex;
        flex-direction: column;
        height: fit-content; /* Hug (72px) */
        padding: 12px 0;
        gap: 24px;

        .benchmark-noti-content {
          display: flex;
          gap: 8;

          .benchmark-checkbox-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            /* width: 36px;
            height: 36px; */
            border-radius: 8px;
            background-color: #fff;

            .benchmark-checkbox {
              display: flex;
              width: 16px;
              height: 16px;
              justify-content: center;
              align-items: center;
              flex-shrink: 0;
              background: #ffffff;
              border: 1px solid #e9eaf0;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.3s ease;
              margin-right: 6px;

              &&:checked {
                background: #449ff4;
              }
            }
          }

          .benchmark-checkbox-label {
            display: flex;
            flex-direction: column;
            gap: 2px;

            .benchmark-checkbox-head {
              font-size: 14px;
              font-weight: 700;
              line-height: 18px;
              letter-spacing: 0em;
              text-align: left;
              color: #1a2128;
            }

            .benchmark-checkbox-text {
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
              letter-spacing: 0em;
              text-align: left;
              color: #1a2128;
            }
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
