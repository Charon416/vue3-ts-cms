<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon">
                <!-- <Edit /> -->
                <component :is="item.icon.slice(8)" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历二级子菜单 -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else>
          <el-menu-item :index="item.id + ''" @click="handleMenuClick(item)">
            <!-- <i v-if="item.icon" :class="item.icon"></i> -->
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
// import { User } from '@element-plus/icons-vue'
import { pathMapToMenu } from '@/utils/map-menus'
export default defineComponent({
  name: 'NavMenu',
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    // User
  },
  setup() {
    const route = useRoute()
    const userMenus = computed(() => store.state.login.userMenus)

    const store = useStore()
    const router = useRouter()

    const menu = pathMapToMenu(userMenus.value, route.path)
    const defaultValue = ref(menu.id + '')

    const handleMenuClick = (item: any) => {
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    return {
      userMenus,
      handleMenuClick,
      defaultValue
    }
  }
})
</script>
<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
  }
  // 一级菜单
  .el-sub-menu {
    background-color: #001529 !important;
  }
  // 二级菜单
  .el-menu-item {
    padding-left: 50px;
    background-color: #0c2135 !important;
  }

  ::v-deep .el-sub-menu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important;
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
