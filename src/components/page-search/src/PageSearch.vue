<template>
  <div class="page-search">
    <HfForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick">
            <el-icon class="el-icon--left"><Refresh /></el-icon>重置
          </el-button>
          <el-button type="primary" @click="handleQueryClick">
            <el-icon class="el-icon--left"><Search /></el-icon>搜索
          </el-button>
        </div>
      </template>
    </HfForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HfForm from '@/base-ui/form'
export default defineComponent({
  components: {
    HfForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定
    // 1.优化一： formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 2.优化二：当用户点击重置
    const handleResetClick = () => {
      formData.value = formOriginData
      emit('resetBtnClick')
    }
    // 3.优化三：当用户点击搜索
    const handleQueryClick = () => {
      // console.log(formData.value)
      emit('queryBtnClick', formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>
<style scoped lang="less">
.page-search {
  .header {
    color: red;
  }
  .handle-btns {
    text-align: right;
    padding: 0 50px 20px 0;
  }
}
</style>
