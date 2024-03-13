import { createApp } from 'vue'
import App from './App.vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

import 'vue3-easy-data-table/dist/style.css';

const app = createApp(App);
app.use(VuePlyr, { plyr: {}}) .mount('#app')
