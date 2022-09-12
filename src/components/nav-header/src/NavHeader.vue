<template>
  <div class="nav-header">
    <el-icon v-if="!isFold" class="fold-header" @click="handleFoldClick">
      <Expand />
    </el-icon>
    <el-icon v-else class="fold-header" @click="handleFoldClick">
      <Fold />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './UserInfo.vue'
export default defineComponent({
  name: 'nav-header',
  components: {
    UserInfo
  },
  emit: ['foldChange'],
  setup(props, { emit }) {
    let isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
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
