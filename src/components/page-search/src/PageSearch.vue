<template>
  <div class="page-search">
    <MyForm v-bind="searchFormConfig" :formData="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button>
            <el-icon class="el-icon--left"><Refresh /></el-icon>重置
          </el-button>
          <el-button type="primary">
            <el-icon class="el-icon--left"><Search /></el-icon>搜索
          </el-button>
        </div>
      </template>
    </MyForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import MyForm from '@/base-ui/form'
export default defineComponent({
  name: '',
  components: {
    MyForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const formData = reactive({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData
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
