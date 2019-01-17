<template>
  <div style="margin-top: 5%; text-align: center;">
    <div>
      <img :src="logo_png">
    </div>
    <el-card :body-style="{ padding: '60px' }" style="width:600px; margin:0 auto;">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入员工号" @keyup.enter.native="$refs.password.focus"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input ref="password" type="password" v-model="form.password" placeholder="请输入您的密码" @keyup.enter.native="submitLogin"></el-input>
        </el-form-item>
      </el-form>
      <el-row style="margin-top: 40px">
        <el-button type="primary" @click="submitLogin" style="width: 100px;">登录</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import logoPng from './logo.png'
import { Base64 } from 'js-base64'
import { Logger } from 'eip-common-kernel'

let logger = new Logger(module.id)

export default {
  props: [],
  data() {
    return {
      logo_png: logoPng,
      form: {
        username: '',
        password: '123'
      }
    }
  },
  methods: {
    submitLogin: function () {
      const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      setTimeout(_ => {
        if (this.form.password === "123") {
          loading.close()
          this.$emit('success', {
            user: {
              userName: this.form.username,
              id: this.form.username,
              otherInfo: this.form.password,
              imAccount: "pu_1",
              imToken: "e83b463976343606339b6f7c77e3aa50"
            },
            jwtToken: "sdfdsfsd"
          });
        }
      }, 1000)
    }
  }
}
</script>
