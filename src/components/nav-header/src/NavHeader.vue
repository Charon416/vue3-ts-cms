<template>
  <div class="nav-header">
    <el-icon v-if="!isFold" class="fold-header" @click="handleFoldClick">
      <Expand />
    </el-icon>
    <el-icon v-else class="fold-header" @click="handleFoldClick">
      <Fold />
    </el-icon>
    <div class="content">
      <HfBreadcrumb :breadcrumbs="breadcrumbs" />
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './UserInfo.vue'
import HfBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'nav-header',
  components: {
    UserInfo,
    HfBreadcrumb
  },
  emit: ['foldChange'],
  setup(props, { emit }) {
    let isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑数据
    const store = useStore()
    const breadcrumbs = computed(() => {
      const route = useRoute()
      const currentPath = route.path
      const userMenus = store.state.login.userMenus
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>
<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-header {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
