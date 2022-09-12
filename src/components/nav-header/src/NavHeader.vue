<template>
  <div class="nav-header">
    <el-icon v-if="!isFold" class="fold-header" @click="handleFoldClick"
      ><Expand
    /></el-icon>
    <el-icon v-else class="fold-header" @click="handleFoldClick"
      ><Fold
    /></el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'nav-header',
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
  .fold-header {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
