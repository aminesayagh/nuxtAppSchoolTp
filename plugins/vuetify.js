import Vue from 'vue'
// pour diminuer le temps du chargement de 50% j'ai utilisait  'vuetify/lib/framework' à la place de 'vuetify/lib'
import Vuetify from 'vuetify/lib/framework'
import { preset } from 'vue-cli-plugin-vuetify-preset-shrine/preset'
import colors from './theme'


Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  theme: {
    themes: { colors },
    options: { minifyTheme },
    options: {
      themeCache: {
        get: key => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
      },
    },
  },
  // The provided global preset is first merged with defaults
  preset,
  // User options are then merged, overwriting defaults and the global preset
  ...options,
})


export default new Vuetify({
    // The provided global preset is first merged with defaults
    preset,
    // User options are then merged, overwriting defaults and the global preset
    ...options,
  })