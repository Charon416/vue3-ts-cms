<template>
  <div class="login-account">
    <el-form
      ref="accountFormRef"
      :model="phone"
      :rules="rules"
      label-width="70px"
    >
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'

export default defineComponent({
  name: '',
  setup() {
    const phone = reactive({
      number: '',
      code: ''
    })

    return {
      phone,
      rules
    }
  }
})
</script>
<style scoped lang="less">
.get-code {
  display: flex;
  .get-btn {
    margin-left: 6px;
  }
}
</style>
