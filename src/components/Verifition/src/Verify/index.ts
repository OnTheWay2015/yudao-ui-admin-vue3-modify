import VerifySlide from './VerifySlide.vue'
import VerifyPoints from './VerifyPoints.vue'

export { VerifySlide, VerifyPoints }

/*
在 Verify.vue 里有两个可选验证方式 VerifySlide / VerifyPoints
    watchEffect(() => {
      switch (captchaType.value) {
        case 'blockPuzzle':
          verifyType.value = '2'
          componentType.value = 'VerifySlide'
          break
        case 'clickWord':
          verifyType.value = ''
          componentType.value = 'VerifyPoints'
          break
      }
    })




//当前使用的是滑验证 VerifySlide
 
// 请求背景图片和验证图片
const getPictrue = async () => {
   
  const res = await getCode(data) //===========>
  if (res.repCode == '0000') {
    backImgBase.value = res.repData.originalImageBase64
     ... 
  } else {
    tipWords.value = res.repMsg
  }
}

// 获取验证图片以及 token  api
export const getCode = (data: any) => {
  return request.postOriginal({ url: 'system/captcha/get', data })
}



  backImgBase = ref(''), //验证码背景图片 数据绑定
// 显示底图,数据在 BackImgBase
<img
  :src="'data:image/png;base64,' + BackImgBase"
 
/>





*/
