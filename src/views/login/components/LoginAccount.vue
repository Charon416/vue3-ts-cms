<template>
  <div class="login-account">
    <el-form
      ref="accountRef"
      :model="account"
      :rules="rules"
      label-width="60px"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElForm } from 'element-plus'
import { rules } from '../config/account-config'

export default defineComponent({
  name: '',
  components: {
    ElForm
  },
  setup() {
    const account = ref({
      name: '',
      password: ''
    })

    const accountRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      accountRef.value?.validate((valid) => {
        if (valid) {
          console.log('执行登录逻辑')
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      accountRef
    }
  }
})
</script>
<style scoped lang="less"></style>
