import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})


app.mount('#app')

// 09.06.22
// 01:16:07