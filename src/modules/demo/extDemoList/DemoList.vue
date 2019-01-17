<template>
  <eip-base-list-view ref="baseListView" v-loading="loading" :criteria="criteria" :k-active="kActive" @reset="criteria = {}" @goto-page="gotoPage">
    <div slot="criteria">
      <eip-cell line-height="32px" label="条件1">
        <el-input v-model="criteria.condition1" placeholder="请输入查询条件1" size="mini" style="width: 100%;"></el-input>
      </eip-cell>
    </div>
    <div slot="fullCriteria">
      <eip-cell line-height="32px" label="条件1">
        <el-input v-model="criteria.condition1" placeholder="请输入查询条件1" size="mini" style="width: 100%;"></el-input>
      </eip-cell>
      <eip-cell line-height="32px" label="条件2">
        <el-input v-model="criteria.condition2" placeholder="请输入查询条件2" size="mini" style="width: 100%;"></el-input>
      </eip-cell>
    </div>
    <el-button slot="addButton" size="mini" @click="clickMe">创建</el-button>
    <div>
      <div v-for="item in listData" :key="item.id">
        <eip-list-item :isActive="isActive(item)">
          <eip-cell label="id" :value="item.id"></eip-cell>
          <eip-cell label="name" :value="item.name"></eip-cell>
          <eip-cell label="value" :value="item.value"></eip-cell>
        </eip-list-item>
        <eip-list-item style="margin-left: 20px;" v-for="i in item.section1List" :key="'section1' + i.id" :is-active="isSection1Active(item, i)" @click="openDemoEditor(item, '/extSection1/' + i.id)">
          <eip-cell label="Section1 Id" :value="i.id"></eip-cell>
        </eip-list-item>
        <eip-list-item style="margin-left: 20px;" v-for="i in item.section2List" :key="'section2' + i.id" :is-active="isSection2Active(item, i)" @click="openDemoEditor(item, '/extSection2/' + i.id)">
          <eip-cell label="Section2 Id" :value="i.id"></eip-cell>
        </eip-list-item>
      </div>
    </div>
  </eip-base-list-view>
</template>

<script>
export default {
  props: ['activeEditor', 'kActive'],
  data () {
    return {
      loading: false,
      criteria: {},
      listData: [],
      pageination: { pageNum: 1, pageSize: 10, total: 0 }
    }
  },
  methods: {
    clickMe () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message.info(`action: ${action}`)
        }
      })
    },
    isActive (item) {
      return ('app' + this.activeEditor.name + this.activeEditor.instanceId) === ('app' + '/demo/extDemoEditor/DemoEditor' + item.id)
    },
    isSection1Active (item, i) {
      let path = this.activeEditor.path
      if (this.isActive(item)) {
        if (path === '/extSection1/' + i.id) {
          return true
        } else {
          return 'semiActive'
        }
      }
      return false
    },
    isSection2Active (item, i) {
      let path = this.activeEditor.path
      if (this.isActive(item)) {
        if (path === '/extSection2/' + i.id) {
          return true
        } else {
          return 'semiActive'
        }
      }
      return false
    },
    gotoPage (pageNum, pageSize, updatePagination) {
      let _this = this
      _this.loading = true
      // _this.criteria.condition1 可以将 criteria, pageNum, pageSize 作为查询条件，此处使用一个 setTimeout 模拟后端接口调用
      // _this.criteria.condition2
      setTimeout(_ => {
        _this.listData = []
        for (let i = 0; i < pageSize; i++) {
          let id = (pageNum - 1) * pageSize + i + 1
          _this.listData[i] = { id: id, name: '条目' + id, value: '内容' + id, section1List: [], section2List: [] }
          for (let j = 0; j < 2; j++) {
            _this.listData[i].section1List.push({ id: j })
            _this.listData[i].section2List.push({ id: j })
          }
        }
        updatePagination({ pageNum: pageNum, pageSize: pageSize, total: 108 })
        this.loading = false
      }, 800)
    },
    openDemoEditor (item, path) {
      this.$openEditor('app', '/demo/extDemoEditor/DemoEditor', item.id, path, { id: item.id })
    }
  }
}
</script>
