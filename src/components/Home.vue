<template>

  <el-descriptions
      :column="2"
      :size="40"
      :title="'欢迎你！'+user.name"
      border
      class="margin-top"
  >
    <template #extra>
      <el-button type="primary">Operation</el-button>
    </template>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <user/>
          </el-icon>
          账号
        </div>
      </template>
      {{ user.id }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <iphone/>
          </el-icon>
          电话
        </div>
      </template>
      {{ user.phone }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <location/>
          </el-icon>
          Place
        </div>
      </template>
      Suzhou
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <tickets/>
          </el-icon>
          Remarks
        </div>
      </template>
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <office-building/>
          </el-icon>
          地址
        </div>
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>
  <span class="times">现在是{{ time }}</span>
</template>

<script setup>
import {Iphone, Location, OfficeBuilding, Tickets, User,} from '@element-plus/icons-vue'
import {computed, ref} from 'vue'


const size = ref('')
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  }
})
</script>

<script>
export default {
  name: "Home",
  data() {
    return {
      user: JSON.parse(sessionStorage.getItem('CurUser')),
      time: "2020年08月31日 10:29"
    };
  },
  mounted() {
    this.currentTime();
  },
  methods: {
    init() {
      this.user = JSON.parse(sessionStorage.getItem('CurUser'))
    },
    //   时间
    currentTime() {
      setInterval(this.getTime, 500);
    },
    getTime() {
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf =
          new Date().getMinutes() < 10
              ? "0" + new Date().getMinutes()
              : new Date().getMinutes();
      let ss =
          new Date().getSeconds() < 10
              ? "0" + new Date().getSeconds()
              : new Date().getSeconds();
      this.time =
          yy + "年 " + mm + "月" + dd + "日 " + hh + ":" + mf + ":" + ss;
    }
  }
}

</script>

<style scoped>
.el-descriptions {
  margin-top: 20px;
}

.cell-item {
  display: flex;
  align-items: center;
}

.margin-top {
  margin-top: 20px;
}
</style>