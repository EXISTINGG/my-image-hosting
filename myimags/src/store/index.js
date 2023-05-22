import { defineStore } from 'pinia'

export const useImgStore = defineStore('img', {
  state: () => {
    return {
      iconFile: [],
      faviconFile: [],
      imageFile: [],
      ImgList: [],
    }
  },

  getters: {
    imgPreviewList: state => state.ImgList.map(item => item.url)
  },

  actions: {
    getImgFile(type) {
      console.log(type);
      switch (type) {
        case 'favicon':
          this.faviconFile = import.meta.glob('@/assets/favicon/*') //限制类型'../assets/image/*.{png,jpg,jpeg,svg}'
          Object.values(this.faviconFile).forEach(async (image) => {
            const url = await image()
            const imgName = url.default.substring(url.default.lastIndexOf('/') + 1);
            this.ImgList.push({url:url.default,imgName})
          })
          break
        case 'icon':
          this.iconFile = import.meta.glob('@/assets/icon/*')
          Object.values(this.iconFile).forEach(async (image) => {
            const url = await image()
            const imgName = url.default.substring(url.default.lastIndexOf('/') + 1);
            this.ImgList.push({url:url.default,imgName})
          })
          break
        default:
          this.imageFile = import.meta.glob('@/assets/image/*')
          Object.values(this.imageFile).forEach(async (image) => {
            const url = await image()
            const imgName = url.default.substring(url.default.lastIndexOf('/') + 1);
            this.ImgList.push({url:url.default,imgName})
          })
          break
      }
    }
  }
})
