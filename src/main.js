import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 隐藏 Vue DevTools 容器
setTimeout(() => {
  const devtoolsContainer = document.getElementById('__vue-devtools-container__');
  if (devtoolsContainer) {
    devtoolsContainer.style.display = 'none';
    devtoolsContainer.setAttribute('hidden', '');
  }
}, 1000);
