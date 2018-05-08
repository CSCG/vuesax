import Vuesax from '../../src/vuesax'
import Vuecode from 'vuecode.js'
import 'vuecode.js/dist/vuecode.css'
import demo from './theme/demo.vue'
import Box from './theme/box.vue'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router // the router instance for the app
}) => {
  // ...apply enhancements to the app
  Vue.use(Vuesax)
  Vue.use(Vuecode,{
    theme:'flat'
  })
  Vue.component('Demo',demo)
  Vue.component('Box',Box)
}