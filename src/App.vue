<template>
  <div class="main">
    <!-- <benchmark-modal> </benchmark-modal> -->
    <choose-how-notified></choose-how-notified>
    <!-- <add-email></add-email> -->
    <!-- <reporting-frequency></reporting-frequency> -->
    <!-- <category-of-reports></category-of-reports> -->
    <!-- <benchmark-dashboard></benchmark-dashboard> -->
    <!-- <notification-settings></notification-settings> -->
    <!-- <getting-started></getting-started> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BenchmarkModal from "./components/BenchmarkModal.vue";
import ChooseHowNotified from "./components/ChooseHowNotified.vue";
import AddEmail from "./components/AddEmail.vue";
import ReportingFrequency from "./components/ReportingFrequency.vue";
import CategoryOfReports from "./components/CategoryOfReports.vue";
import BenchmarkDashboard from "./components/BenchmarkDashboard.vue";
import NotificationSettings from "./components/NotificationSettings.vue";
import GettingStarted from "./components/GettingStarted.vue";

export default defineComponent({
  components: {
    BenchmarkModal,
    ChooseHowNotified,
    AddEmail,
    CategoryOfReports,
    ReportingFrequency,
    BenchmarkDashboard,
    NotificationSettings,
    GettingStarted
  },
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
  font-family: Montserrat !important;
}

</style>
<!-- ./components/CategoryOfReports.vue -->
