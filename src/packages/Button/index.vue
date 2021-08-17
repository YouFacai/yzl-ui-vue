<template>
  <div class="yzl-box">
    <button ref="yzl_Button" class="yzl-Button" :class="props.type">
      <slot></slot>
    </button>
  </div>
</template>

<script>
import { toRefs, reactive, ref, onMounted } from "vue";
export default {
  name: "yzl-Button",
  props: {
    // 按钮类型
    type: {
      type: String,
      default: "primary",
      validator: (value) => {
        if (
          value &&
          !["primary", "success", "info", "warning", "danger"].includes(value)
        ) {
          throw new Error("类型错误");
        }
        return true;
      },
    },
    // 是否朴素
    plain: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const state = reactive({});
    let yzl_Button = ref(null);
    onMounted(() => {
      // 朴素元素
      if (props.plain) {
        yzl_Button.value.classList.add(props.type + "plain");
      }
    });
    return {
      ...toRefs(state),
      props,
      yzl_Button,
    };
  },
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
.yzl-box {
  .yzl-Button {
    width: 90px;
    height: 40px;
    border-radius: 5px;
    -webkit-outline: none;
    color: white;
  }

  @each $type,
    $color
      in (
        primary: $primaryBgColor,
        success: $successBgColor,
        info: $infoBgColor,
        warning: $warningBgColor,
        danger: $dangerBgColor
      )
  {
    .#{$type} {
      background-color: #{$color};
      border: none;
      outline: none;
    }
  }

  // 鼠标悬浮
  @each $type,
    $color
      in (
        primary: $primaryBgColor,
        success: $successBgColor,
        info: $infoBgColor,
        warning: $warningBgColor,
        danger: $dangerBgColor
      )
  {
    .#{$type}:hover {
      background-color: #{$color};
      opacity: 0.8;
      border: none;
      outline: none;
    }
  }

  // 朴素模式
  @each $type,
    $color
      in (
        primaryplain: $primarycPlainBgColor,
        successplain: $successcPlainBgColor,
        infoplain: $infocPlainBgColor,
        warningplain: $warningcPlainBgColor,
        dangerplain: $dangercPlainBgColor
      )
  {
    .#{$type} {
      background-color: #{$color};
      border: none;
      outline: none;
      color: #000;
    }
  }

  @each $type,
    $color
      in (
        primaryplain: $primaryBgColor,
        successplain: $successBgColor,
        infoplain: $infoBgColor,
        warningplain: $warningBgColor,
        dangerplain: $dangerBgColor
      )
  {
    .#{$type} {
      border: none;
      outline: none;
      color: #{$color};
      border: 1px solid #{$color};
    }
  }

  @each $type,
    $color
      in (
        primaryplain: $primaryBgColor,
        successplain: $successBgColor,
        infoplain: $infoBgColor,
        warningplain: $warningBgColor,
        dangerplain: $dangerBgColor
      )
  {
    .#{$type}:hover {
      border: none;
      outline: none;
      color: white;
      border: 1px solid #{$color};
      background-color: #{$color};
    }
  }
}
</style>