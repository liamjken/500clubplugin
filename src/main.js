import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'

const vuetify = createVuetify({
    components,
    labsComponents,
    directives,
    theme: {
        themes: {
          light: {
            colors: {
              primary: '#48742C',
              secondary: '#D4EEC3',
            },
          },
        },
      },
  })

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)

app.mount('#app')
