<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    execute() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          });
        }
      });
    }
  }
}
</script>

<style>
</style>
