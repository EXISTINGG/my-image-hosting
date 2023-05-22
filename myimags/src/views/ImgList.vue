<template>
  <div class="img-box" v-for="(item,i) in imgStore.ImgList">
    <el-image class="img" :src="item.url" :key="item.url" fit="scale-down" :title="item.imgName" lazy :preview-src-list="imgStore.imgPreviewList" :initial-index="imgIndex" :infinite="false" @click="previewImg(i)"/>
    <i><el-icon><CopyDocument /></el-icon></i>
    <h6>{{ item.imgName }}</h6>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useImgStore } from '@/store/index'

const imgStore = useImgStore()

const imgIndex = ref(0)

const previewImg = i => imgIndex.value = i
</script>

<style lang="scss" scoped>
.img-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100px;
  height: 130px;
  margin: 20px 15px;
  box-sizing: border-box;


  .img {
    width: 100%;
    height: 100px;
  }

  h6 {
    width: 100%;
    margin-top: 10px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }
}

@media screen and (max-width: 48em) {
  .img-box {
    margin: 10px;
  }

  img {
    width: 50px;
    height: 50px;
  }
}
</style>
