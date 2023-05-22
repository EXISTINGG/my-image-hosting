<template>
  <div class="content-box">
    <div class="left-menu">
      <Menu />
    </div>
    <div class="right-imglist" v-if="imgStore.ImgList.length != 0">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <div v-else class="empty">
      <el-empty description="暂时没有图片" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useImgStore } from '@/store/index'
const imgStore = useImgStore()
import Menu from '@/components/Menu.vue'
import ImgList from './ImgList.vue'

onMounted(() => imgStore.getImgFile())
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content-box {
  width: 100vw;
  height: 100vh;
  display: flex;

  .left-menu {
    flex: .2
  }

  .right-imglist {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    flex: 1;
    height: 100%;
    overflow-y: scroll;
  }
}

.empty {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
