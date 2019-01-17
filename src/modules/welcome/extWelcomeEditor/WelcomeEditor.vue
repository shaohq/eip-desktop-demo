<template>
  <div :style="`text-align: center; height: ${editorDimension.editorHeight}px; line-height: ${editorDimension.editorHeight}px; vertical-align: middle;`">
    <img :src="welcomeImg">
  </div>
</template>

<script>
import welcome from './welcome.jpg'

export default {
  eipEditor: {
    title: '欢迎页'
  },
  props: ['editorPath', 'params', 'kActive'],
  data () {
    return {
      editorDimension: this.$eipContext('editorDimension'),
      welcomeImg: welcome
    }
  }
}
</script>
