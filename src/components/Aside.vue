<template>
  <el-scrollbar>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="/Home"
        text-color="#fff"
        style="height: 100vh"
        :collapse="isCollapse"
        :collapse-transition="false"
    >
      <el-menu-item index="/Home">
        <el-icon><ElementPlus /></el-icon>
        <span>首页</span>
      </el-menu-item>

      <el-menu-item index="/One">
        <el-icon><Medal /></el-icon>
        <span>导航一</span>
      </el-menu-item>

      <el-menu-item index="/Two">
        <el-icon><Paperclip /></el-icon>
        <span>导航二</span>
      </el-menu-item>
<!--      <el-sub-menu index="1">-->
<!--        <template #title>-->
<!--          <el-icon><message/></el-icon>Navigator One-->
<!--        </template>-->
<!--      </el-sub-menu>-->


    </el-menu>
  </el-scrollbar>
</template>
<script setup>
import { ElementPlus,Medal,Paperclip } from '@element-plus/icons-vue'

</script>
<script>

export default {
  name: "Aside",
  data(){
    return{
    isCollapse:false
    }
  }
}
</script>

<style scoped>

</style>