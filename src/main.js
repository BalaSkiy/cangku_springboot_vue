import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import './assets/global.css'
const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
createApp(App).mount('#app')

// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }