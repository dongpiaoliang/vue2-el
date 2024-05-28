<script>
import {Form, Input, Button, FormItem} from "element-ui";

export default {
  name: "Form",
  components: {
    ElForm: Form,
    ElInput: Input,
    ElButton: Button,
    ElFormItem: FormItem
  },
  methods: {
    submit() {
      this.$refs.myForm.validate((isValid) => {
        if (isValid) {
          alert(`成功提交，密码为${this.formData.password},邮箱为${this.formData.email}`)
        } else {
          alert('提交失败');
          return false;
        }
      })
    },
    reset() {
      this.formData = {
        password: "",
        email: ""
      }
      console.log(this.formData)
    }
  }
  ,
  data() {
    return {
      formData: {
        password: "",
        email: ""
      }
    }
  }
}

</script>

<template>
  <el-form :model="formData" label-width="100px" class="demo-ruleForm" ref="myForm">

    <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]"
    >
      <el-input v-model="formData.email" placeholder="请输入您的邮箱"></el-input>
    </el-form-item>

    <el-form-item
        prop="password"
        label="密码"
        :rules="[
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]"
    >
      <el-input v-model="formData.password" placeholder="请输入您的密码"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submit">确认</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>

</template>

<style scoped>
.demo-ruleForm{
  padding: 0 50px;
}


</style>