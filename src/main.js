import Vue from 'vue'
import {Logger} from 'eip-common-kernel'
import {initializeEipDesktopApp, EipDesktop} from 'eip-desktop-base'

let logger = new Logger(module.id)
let requireContext = require.context('./', true, /extension.json$/)
let importFunction = path => import(`${path}`)

initializeEipDesktopApp({ requireContext, importFunction, kernelScope: 'app' }).then(_ => {
  logger.info('完成初始化')
  new Vue({
    render: h => h(EipDesktop)
  }).$mount('#app')
})
