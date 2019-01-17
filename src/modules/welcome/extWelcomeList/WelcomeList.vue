<template>
  <div :style="`height:${viewDimension.viewHeight}px; border:1px solid #d1dbe5`">
    <div class="app-block--title title">
      点击上方的「请选择」，并开始工作
    </div>
  </div>
</template>

<script>
export default {
  props: ['activeEditor'],
  data() {
    return {
      viewDimension: this.$eipContext('viewDimension')
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: $--color-primary;
}
</style>

