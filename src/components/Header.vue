<template>
  <div style="display: flex;line-height: 60px" class="toolbar" >
    <div>
      <el-icon style="margin-left: 8px;margin-top: 20px;font-size: 20px"><Fold /></el-icon>
    </div>
    <div style="flex: 1;text-align: center;font-size: 34px">
      <span>欢迎登录管理系统</span>
    </div>
    <span>Tom</span>
    <el-dropdown>
      <el-icon style="margin-right: 8px; margin-top: 1px;font-size: 20px"><Remove /></el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-on:click="toUser">个人资料</el-dropdown-item>
          <el-dropdown-item v-on:click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup>
import  {Remove,Fold}  from '@element-plus/icons-vue'
</script>

<script>
export default {
  name: "Header",
  methods:{
    toUser(){
          console.log('toUser')
    },
    logout(){
      console.log('toUser')
    }
  }
}
</script>

<style scoped>

</style>