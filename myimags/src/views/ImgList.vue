<template>
  <div class="img-box" v-for="(item, i) in imgStore.ImgList">
    <el-image
      class="img"
      :src="item.url"
      :key="item.url"
      fit="cover"
      :title="item.imgName"
      lazy
      :preview-src-list="imgStore.imgPreviewList"
      :initial-index="imgIndex"
      :infinite="false"
      @click="previewImg(i)"
    />
    <span class="text-box">
      <h6>{{ item.imgName }}</h6>
      <i class="copy" @click="copyImgUrl(item.imgName)">复制</i>
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useImgStore } from '@/store/index'

const imgStore = useImgStore()

const imgIndex = ref(0)

const previewImg = (i) => (imgIndex.value = i)
const copyImgUrl = async (url) => {
  try {
    await navigator.clipboard.writeText(`https://img.hxq-001.top/assets/${url}`)
    ElMessage({
      message: '复制成功',
      type: 'success',
    })
  } catch (err) {
    ElMessage.error('复制失败')
  }
}
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

  .text-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10px;

    h6 {
      flex: 0.8;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .copy {
      flex: 0.3;
      color: #409eff;
      font-size: 1px;
      text-align: center;
      cursor: pointer;
    }
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
