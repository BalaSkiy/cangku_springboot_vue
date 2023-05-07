<template>
  <el-container class="layout-container-demo" style="">
    <el-aside width="200px" height="100%">
      <Aside></Aside>
    </el-aside>

    <el-container style="height: 100%;" direction="vertical">
      <el-header style="text-align: right; font-size: 12px">
        <Header></Header>
      </el-header>

      <el-main style="height: 100%;">
        <Main></Main>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>

<script setup>
</script>

<script>
import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";

export default{
  name: "Index",
  components:{Aside,Header,Main},

}

</script>
