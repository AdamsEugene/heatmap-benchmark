<template>
  <div class="main">
    <!-- <benchmark-modal> </benchmark-modal> -->
    <!-- <benchmark-dashboard></benchmark-dashboard> -->
    <!-- <notification-settings></notification-settings> -->
    <getting-started></getting-started>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BenchmarkModal from "./components/BenchmarkModal.vue";
import BenchmarkDashboard from "./components/BenchmarkDashboard.vue";
import NotificationSettings from "./components/NotificationSettings.vue";
import GettingStarted from "./components/GettingStarted.vue";

export default defineComponent({
  components: {
    BenchmarkModal,
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
