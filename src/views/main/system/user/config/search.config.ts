import { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  labelWidth: '90px',
  labelStyle: { padding: '10px 40px' },
  colLayout: {
    xl: 6, // >1920px
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  formItems: [
    {
      filed: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      filed: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      filed: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      filed: 'sport',
      type: 'select',
      label: '爱好',
      placeholder: '请选择你的爱好',
      options: [
        { label: '吃饭', value: '吃饭' },
        { label: '睡觉', value: '睡觉' }
      ]
    },
    {
      filed: 'createTime',
      type: 'datepicker',
      label: '时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
