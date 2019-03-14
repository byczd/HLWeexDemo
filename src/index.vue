<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">Hello Weex,I am 黄龙!</text>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      logo: 'https://tva3.sinaimg.cn/crop.0.0.180.180.180/894d45e2jw1e8qgp5bmzyj2050050aa8.jpg'
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 320px;
    height: 320px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
