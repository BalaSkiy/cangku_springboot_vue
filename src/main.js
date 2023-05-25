import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import './assets/global.css'
import axios from "axios";
import * as ElIconModules from '@element-plus/icons'

const app = createApp(App)
for (let iconName in ElIconModules) {
    app.component(iconName, ElIconModules[iconName])
}
app.use(ElementPlus, {size: 'large', zIndex: 3000})
app.config.globalProperties.$axios = axios
app.config.globalProperties.$httpUrl = 'http://localhost:8080'
app.mount('#app')
// createApp(App).mount('#app')
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }

