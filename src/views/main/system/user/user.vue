<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="name" label="用户名" min-width="180" />
      <el-table-column prop="realname" label="真实姓名" min-width="180" />
      <el-table-column prop="cellphone" label="电话号码" min-width="180" />
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch
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
    console.log(userList.value)
    console.log(userCount.value)
    return {
      searchFormConfig,
      userList,
      userCount
    }
  }
})
</script>

<style scoped></style>
