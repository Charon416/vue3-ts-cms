import hfRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './type'
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // /user/1
  UserMenus = '/role/' // /role/1/menu
}
// 账号登录请求
export function judgeAccountLogin(account: IAccount) {
  return hfRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
// 请求登录信息
export function requestUserInfoById(id: number) {
  return hfRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}
// 通过用户信息获取权限菜单
export function userMenusByUserId(id: number) {
  return hfRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menuIds'
  })
}
