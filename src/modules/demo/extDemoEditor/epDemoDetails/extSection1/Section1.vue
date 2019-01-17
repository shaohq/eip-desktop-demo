<template>
  <div>
    <div class="app-block--title">详情区1</div>
    <div v-loading="loading" :style="`height: ${editorDimension.editorHeight - 210}px; overflow: hidden; overflow-y: auto`">
      <eip-list-item v-for="item in dataList" :key="item.id" :is-active="item.id === current.id" @click="current = item">
        <eip-cell label="id" :value="item.id"></eip-cell>
        <eip-cell label="name" :value="item.name"></eip-cell>
        <eip-cell label="value" :value="item.value"></eip-cell>
      </eip-list-item>
    </div>
  </div>
</template>

<script>
import {Logger} from 'eip-common-kernel'

let logger = new Logger(module.id)

export default {
  props: ['kActive'],
  data () {
    return {
      editorDimension: this.$eipContext('editorDimension'),
      loading: false,
      dataList: [],
      current: {}
    }
  },
  methods: {
    onFirstActive () {
      this.$emit('setEditorIcon', 'el-icon-news')
      logger.debug('onFirstActive 加载数据')
      this.loading = true
      setTimeout(_ => {
        this.dataList = []
        for (let i = 0; i <= 20; i++) {
          this.dataList.push({ id: i, name: 'ItemInSection1 - ' + i, value: 'Value in Section 1 : ' + i })
          this.onEditorPathChange()
        }
        this.loading = false
      }, 800)
    },
    onActive () {
      logger.debug('on active， 根据业务场景决定是否加载数据，此处不重新加载数据')
    },
    onEditorPathChange () {
      let path = this.$eipContext('kEditorPath')
      logger.debug('onEditorPathChange: ', path)
      if (path[1] === 'extSection1') {
        this.current = this.dataList[parseInt(path[2])]
      } else {
        this.current = {}
      }
    }
  },
  computed: {
    kMyEditorPath: function () {
      return '/extSection1/' + this.current.id
    }
  }
}
</script>

<style scoped>
</style>
