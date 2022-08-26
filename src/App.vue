<template>
  <div class="app">
    <h2>{{ $store.state.name }}</h2>

    <router-link to="/login">登录</router-link>
    <router-link to="/main">中心</router-link>
    <router-view></router-view>

    <el-button type="primary">Primary</el-button>
    <el-button type="success">Primary</el-button>
    <el-button type="danger">Primary</el-button>
    <div class="flex">
      <el-button type="primary" :icon="Edit" />
      <el-button type="primary" :icon="Share" />
      <el-button type="primary" :icon="Delete" />
      <el-button type="primary" :icon="Search">Search</el-button>
      <el-button type="primary">
        Upload<el-icon class="el-icon--right"><Upload /></el-icon>
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { defineComponent } from 'vue'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'

// export default defineComponent({
//   name: 'App',
//   components: {}
// })
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
