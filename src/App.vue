<template>
  <div class="box">
    <div>
      <!-- 基本按钮 -->
      <yzl-Button @click="fn">默认按钮</yzl-Button>
      <yzl-Button type="primary">主要按钮</yzl-Button>
      <yzl-Button type="success">成功按钮</yzl-Button>
      <yzl-Button type="info">信息按钮</yzl-Button>
      <yzl-Button type="warning">警告按钮</yzl-Button>
      <yzl-Button type="danger">危险按钮</yzl-Button>
    </div>
    <div>
      <!-- 朴素按钮 -->
      <yzl-Button plain>默认按钮</yzl-Button>
      <yzl-Button plain type="primary">主要按钮</yzl-Button>
      <yzl-Button plain type="success">成功按钮</yzl-Button>
      <yzl-Button plain type="info">信息按钮</yzl-Button>
      <yzl-Button plain type="warning">警告按钮</yzl-Button>
      <yzl-Button plain type="danger">危险按钮</yzl-Button>
    </div>
  </div>
</template>

<script>
export default {
  setup(){
    const fn= function(e){
      console.log(e)
    }

    return {
      fn
    }
  }
};
</script>

<style lang="scss">
  .box {
    display: flex;
  }
</style>
