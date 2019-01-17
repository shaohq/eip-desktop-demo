<template>
  <div v-loading="loading" style="padding: 0 20px;">
    <div class="app-block--title">示例编辑器 {{params.id}}</div>
    <div class="app-block--content">DemoEditor包含一个epDemoDetails扩展点，并且有 extSection1, extSection2 两个针对 epDemoDetails 的扩展</div>
    <el-tabs v-model="currentExt">
      <el-tab-pane v-for="(tab, key) in K_childExtensionParams.epDemoDetails" :key="key" :label="tab.title" :name="key">
        <div :style="`height: ${editorDimension.editorHeight - 150}px; overflow: hidden; overflow-y: auto`">
          <component :is="key" :k-active="key === currentExt"></component>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {Logger} from 'eip-common-kernel'

let logger = new Logger(module.id)

export default {
  eipEditor () {
    return {
      title: '示例编辑器' + this.params.id,
      icon: 'el-icon-news'
    }
  },
  props: ['editorPath', 'params', 'kActive'],
  data () {
    return {
      editorDimension: this.$eipContext('editorDimension'),
      loading: false,
      data: '',
      currentExt: ''
    }
  },
  methods: {
    onFirstActive () {
      logger.debug('onFirstActive 加载数据')
      this.loading = true
      setTimeout(_ => {
        this.data = Math.random
        this.loading = false
        this.onEditorPathChange()
      }, 800)
    },
    onActive () {
      logger.debug('on active 不重新加载数据')
    },
    onEditorPathChange () {
      let path = this.$eipContext('kEditorPath')
      logger.debug('onEditorPathChange:', path)
      this.currentExt = path[1]
    }
  },
  computed: {
    kMyEditorPath: function () {
      return '/' + this.currentExt
    }
  }
}
</script>

<style scoped>
</style>
