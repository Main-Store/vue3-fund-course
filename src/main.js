import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import router from './router/router'
import directives from './directives/'
import store from './store'
// import postModule from './postModule'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(router)
    .use(store)
    .mount('#app')

// 10.06.22
// 02:47:20