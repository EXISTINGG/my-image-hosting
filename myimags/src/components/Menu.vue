<template>
  <div class="left-menu">
    <el-row class="el-rows">
      <el-col :span="20" class="el-cols">
        <h1>图片类型</h1>
        <el-menu
          default-active="/home/image"
          class="menus"
          router
          @select="currentIdx"
        >
          <el-menu-item index="/home/image" class="meun-item">
            <span>image</span>
          </el-menu-item>
          <el-menu-item index="/home/favicon" class="meun-item">
            <span>favicon</span>
          </el-menu-item>
          <el-menu-item index="/home/icon" class="meun-item">
            <span>icon</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {useImgStore} from '@/store/index'
const imgStore =  useImgStore()

const currentIdx = index => {
  imgStore.ImgList = []
  switch (index) {
    case '/home/favicon':
      imgStore.getImgFile('favicon')
      break;
    case '/home/icon':
      imgStore.getImgFile('icon')
      break;
    default:
      imgStore.getImgFile()
      break;
  }
}
</script>

<style lang="scss" scoped>
.left-menu {
  display: flex;
  flex-direction: column;
  width: 120px;

  .el-rows {
    width: 100%;
    height: 100%;

    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      width: 100%;
      font-size: 16px;
    }
  }

  .el-cols {
    // width: 100%;

    .menus {
      // width: 100%;

      .meun-item {
        height: 40px;
        font-size: 12px;
      } 
    }
  }
  
}
</style>
