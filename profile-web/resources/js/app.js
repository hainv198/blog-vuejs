import './bootstrap';
// khai bao import model, khoi tao vue app va mount no vao mot element co id la app trong file blade in component vuejs
import {createApp} from "vue";

import app from './components/app'

createApp(app).mount('#app')
