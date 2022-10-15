export const contentTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '角色名', minWith: '100', slotName: 'name' },
    { prop: 'intro', label: '权限介绍', minWith: '100' },
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
