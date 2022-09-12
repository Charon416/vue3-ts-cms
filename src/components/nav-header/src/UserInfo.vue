<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar size="small" :src="avatarUrl"></el-avatar>
        <span class="">{{ userName }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'user-info',
  setup() {
    const store = useStore()
    const userName = computed(() => store.state.login.userInfo.name)
    const avatarUrl =
      'https://avatars.githubusercontent.com/u/61608348?s=40&v=4'
    return {
      userName,
      avatarUrl
    }
  }
})
</script>
<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
