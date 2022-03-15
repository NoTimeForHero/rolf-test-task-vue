import { createApp } from 'vue';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App.vue';
import store from './store';

const app = createApp(App);
app.use(store);
app.mount('#app');
