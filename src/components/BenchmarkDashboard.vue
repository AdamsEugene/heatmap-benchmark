<template>
  <div class="main">
    <div v-if="showEditModal">
      <notification-settings :updateEditModal="updateEditModal" />
    </div>
    <div v-if="sheConfirmModal">
      <confirmation-modal
        :text="confirmationText[confirmStatus as 'paused' | 'enabled']"
        :updateConfirmModal="updateConfirmModal"
      />
    </div>
    <benchmark-banner />
    <h1>Industry Benchmarks</h1>
    <div v-if="showSettings">
      <change-settings
        :updateEditModal="updateEditModal"
        :updateConfirmModal="updateConfirmModal"
      />
    </div>
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
        <p
          class="benchmark-timeline-right-text"
          @click="showSettings = !showSettings"
        >
          {{ showSettings ? "Cancel" : "Change Settings" }}
        </p>
      </div>
    </div>
    <div class="benchmark-grid-container">
      <benchmark-metrics
        v-for="(metric, index) in metrics"
        :key="index"
        :site="metric.site"
        :industry="metric.industry"
        :relPer="metric.relPer"
        :title="metric.title"
      />
    </div>
    <div>
      <benchmark-a-o-v :series="series" />
    </div>
  </div>

  <div class="benchmark-table-wrapper">
    <EasyDataTable
      :headers="headers"
      :items="items"
      table-class-name="benchmark-customize-table"
      header-text-direction="center"
      body-text-direction="center"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BenchmarkBanner from "./BenchmarkBanner.vue";
import BenchmarkMetrics from "./BenchmarkMetrics.vue";
import BenchmarkAOV from "./BenchmarkAOV.vue";
import ChangeSettings from "@/components/ChangeSettings.vue";
import NotificationSettings from "./NotificationSettings.vue";
import ConfirmationModal from "./ConfirmationModal.vue";
import type { Header, Item } from "vue3-easy-data-table";
import EasyDataTable from "vue3-easy-data-table";

export default defineComponent({
  components: {
    BenchmarkBanner,
    BenchmarkMetrics,
    BenchmarkAOV,
    ChangeSettings,
    NotificationSettings,
    ConfirmationModal,
    EasyDataTable,
  },
  data() {
    return {
      showSettings: false,
      showEditModal: false,
      sheConfirmModal: false,
      confirmStatus: "",
      metrics: [
        {
          title: "AOV",
          site: { siteInit: "JB", status: "down", value: "5.53%" },
          industry: { siteInit: "industry", status: "up", value: "9.53%" },
          relPer: { value: "-4.91%", status: "low" },
        },
        {
          title: "Revenue per session",
          site: { siteInit: "JB", status: "down", value: "5.28%" },
          industry: { siteInit: "industry", status: "up", value: "14.68%" },
          relPer: { value: "-9.39%", status: "low" },
        },
        {
          title: "Conversion rate",
          site: { siteInit: "JB", status: "down", value: "-1.05%" },
          industry: { siteInit: "industry", status: "up", value: "2.28%" },
          relPer: { value: "-3.33%", status: "low" },
        },
        {
          title: "Total revenue",
          site: { siteInit: "JB", status: "up", value: "11.43%" },
          industry: { siteInit: "industry", status: "up", value: "25.11%" },
          relPer: { value: "-13.43%", status: "high" },
        },
        {
          title: "Total traffic",
          site: { siteInit: "JB", status: "down", value: "8.82%" },
          industry: { siteInit: "industry", status: "up", value: "11.82%" },
          relPer: { value: "-3.01%", status: "low" },
        },
        {
          title: "Time on site",
          site: { siteInit: "JB", status: "down", value: "10.40%" },
          industry: { siteInit: "industry", status: "up", value: "6.05%" },
          relPer: { value: "4.35%", status: "high" },
        },
      ],
      series: [
        {
          name: "Sales",
          data: [900, 600, 200, 1000, 600, 800, 500],
        },
        {
          name: "JB",
          data: [500, 800, 400, 900, 700, 1000, 300],
        },
      ],
      confirmationText: {
        paused: `Mobile updates have been <strong>paused</strong>. You won't receive
            any further updates on your mobile device until you enable
            notifications for this activity.`,
        enabled: `Mobile updates are now <strong>enabled</strong>. You will start receiving timely notifications on your mobile device for this activity.
Stay in the loop and get the latest updates delivered straight to your phone`,
      },
      headers: [
        // { text: "Metric", value: "Metric", width: 200 },
        { text: "Metric", value: "Metric" },
        { text: "Previous week JB", value: "PreviousweekJB" },
        { text: "Current week JB", value: "CurrentweekJB" },
        { text: "Previous week Industry", value: "PreviousweekIndustry" },
        { text: "Current week Industry", value: "CurrentweekIndustry" },
        { text: "% Change JB", value: "ChangeJB" },
        { text: "% Change Industry", value: "ChangeIndustry" },
        {
          text: "Relative Performance",
          value: "RelativePerformance",
          sortable: true,
        },
        { text: "Weighted Score", value: "WeightedScore" },
        { text: "Final Score", value: "FinalScore" },
      ],

      items: [
        {
          Metric: "AOV",
          PreviousweekJB: "$139.67",
          CurrentweekJB: "$147.39",
          PreviousweekIndustry: "$86.13",
          CurrentweekIndustry: "$94.50",
          ChangeJB: "5.53%",
          ChangeIndustry: "9.72%",
          RelativePerformance: "-4.19%",
          WeightedScore: "15",
          FinalScore: "-0.6292",
        },
        {
          Metric: "Revenue per session",
          PreviousweekJB: "$2.46",
          CurrentweekJB: "$2.59",
          PreviousweekIndustry: "$2.18",
          CurrentweekIndustry: "$2.50",
          ChangeJB: "5.28%",
          ChangeIndustry: "14.68%",
          RelativePerformance: "-9.39%",
          WeightedScore: "25",
          FinalScore: "-2.3486",
        },
        {
          Metric: "Conversion Rate",
          PreviousweekJB: "1.12",
          CurrentweekJB: "1.20",
          PreviousweekIndustry: "0.88",
          CurrentweekIndustry: "0.90",
          ChangeJB: "-1.05%",
          ChangeIndustry: "2.28%",
          RelativePerformance: "-3.33%",
          WeightedScore: "20",
          FinalScore: "-0.6652",
        },
        {
          Metric: "Total revenue",
          PreviousweekJB: "$10,095.36",
          CurrentweekJB: "$11 274.49",
          PreviousweekIndustry: "$7,558.94",
          CurrentweekIndustry: "$9,456.66",
          ChangeJB: "11.68%",
          ChangeIndustry: "25.11%",
          RelativePerformance: "-13.43%",
          WeightedScore: "20",
          FinalScore: "-2.6852",
        },
        {
          Metric: "Total traffic",
          PreviousweekJB: "5212.03",
          CurrentweekJB: "5671.48",
          PreviousweekIndustry: "3183.86",
          CurrentweekIndustry: "3560.27",
          ChangeJB: "8.82%",
          ChangeIndustry: "11.82%",
          RelativePerformance: "-3.01%",
          WeightedScore: "15",
          FinalScore: "-0.4511",
        },
        {
          Metric: "Time on site ",
          PreviousweekJB: "5.58",
          CurrentweekJB: "6.17",
          PreviousweekIndustry: "3.15",
          CurrentweekIndustry: "3.34",
          ChangeJB: "10.40%",
          ChangeIndustry: "6.05%",
          RelativePerformance: "4.35%",
          WeightedScore: "5",
          FinalScore: "0.2176",
        },
      ],
    };
  },
  methods: {
    updateEditModal(state: boolean) {
      this.showEditModal = state;
    },
    updateConfirmModal(state: boolean, status: string) {
      this.confirmStatus = status;
      this.sheConfirmModal = state;
    },
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
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.benchmark-table-wrapper {
  padding-left: 12px;
  padding-right: 12px;
}

.benchmark-customize-table {
  --easy-table-border: 2px solid #f3f4f6;
  --easy-table-row-border: 2px solid #f3f4f6;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #434d56;
  --easy-table-header-background-color: #e4e4e4;

  --easy-table-header-item-padding: 20px 15px;
  --easy-table-body-item-padding: 20px 15px;
}
</style>
