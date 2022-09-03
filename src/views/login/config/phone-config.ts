export const rules = {
  number: [
    { required: true, message: '用户名是必传内容', trigger: blur },
    {
      pattern: /^1[3-9]\d{9}}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  code: [
    { required: true, message: '验证码为必填项', trigger: blur },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '请输入正确的验证码',
      trigger: 'blur'
    }
  ]
}
