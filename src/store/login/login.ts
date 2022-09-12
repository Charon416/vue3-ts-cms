import { Module } from 'vuex'
import router from '@/router'

import { ILoginState } from './types'
import { IRootState } from '../types'
import localCache from '@/utils/cache'
import {
  judgeAccountLogin,
  requestUserInfoById,
  userMenusByUserId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1、实现逻辑登录
      const result = await judgeAccountLogin(payload)
      const { id, token } = result.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 2、请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3、通过用户信息获取权限菜单
      const userInfoMenus = await userMenusByUserId(userInfo.role.id)
      const userMenus = userInfoMenus.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4、跳转首页
      router.push('/main')
    },
    loadLocalInfo({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
