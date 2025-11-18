import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
import router from './router';

const app = createApp(App);
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }


});

app.component('TreeTable', TreeTable);
app.component('Column', Column);

app.mount('#app');

