<template>
  <div class="login-account">
    <el-form
      ref="accountRef"
      :model="account"
      :rules="rules"
      label-width="60px"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'

export default defineComponent({
  name: '',
  components: {
    ElForm
  },
  setup() {
    const store = useStore()
    const account = ref({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const accountRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      accountRef.value?.validate((valid) => {
        if (valid) {
          // 1、判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache('name', account.value.name)
            localCache.setCache('password', account.value.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          // 2、开始进行登录验证
          store.dispatch('login/accountLoginAction', { ...account.value })
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
