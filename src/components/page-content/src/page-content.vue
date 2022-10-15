<template>
  <div class="page-content">
    <HfTable :listData="listData" v-bind="contentTableConfig">
      <!-- 1、header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
      </template>
      <!-- 2、列中的插槽 -->
      <template #status="scope">
        <el-tag
          :type="scope.row.enable ? 'success' : 'danger'"
          disable-transitions
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-tag
        >
      </template>
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button size="mini" type="text">
            <el-icon style="vertical-align: middle"> <Edit /> </el-icon>编辑
          </el-button>
          <el-button size="mini" type="text">
            <el-icon style="vertical-align: middle"> <Delete /> </el-icon>删除
          </el-button>
        </div>
      </template>
    </HfTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import HfTable from '@/base-ui/table'

export default defineComponent({
  components: {
    HfTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      requires: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const listData = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // const userCount = computed(() => store.state.system.userCount)
    return {
      listData
    }
  }
})
</script>
<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
