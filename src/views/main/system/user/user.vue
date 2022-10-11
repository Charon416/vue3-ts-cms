<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" />

    <div class="content">
      <HfTable :listData="userList" :propList="propList">
        <template #status="scope">
          <el-tag type="home" disable-transitions>{{
            scope.row.enable ? '启用' : '禁用'
          }}</el-tag>
        </template>
        <template #createAt="scope">
          {{ scope.row.createAt }}
        </template>
      </HfTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import PageSearch from '@/components/page-search'
import HfTable from '@/base-ui/table/index'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    HfTable
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const propList = [
      { prop: 'name', label: '用户名', minWith: '100' },
      { prop: 'realname', label: '真实姓名', minWith: '100' },
      { prop: 'cellphone', label: '手机号码', minWith: '120' },
      { prop: 'status', label: '状态', minWith: '100' },
      { prop: 'createAt', label: '创建时间', minWith: '250' },
      { prop: 'updateAt', label: '更新时间', minWith: '250' }
    ]
    return {
      searchFormConfig,
      userList,
      userCount,
      propList
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
