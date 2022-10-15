export const contentTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '用户名', minWith: '100' },
    { prop: 'realname', label: '真实姓名', minWith: '100' },
    { prop: 'cellphone', label: '手机号码', minWith: '120' },
    { prop: 'enable', label: '状态', minWith: '100', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWith: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWith: '250',
      slotName: 'updateAt'
    },
    { prop: '操作', label: '操作', minwidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
