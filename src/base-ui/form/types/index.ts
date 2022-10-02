type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  filed: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: string
  // 针对select
  options?: any[]
  // 针对特殊的情况
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  labelStyle: any
}
