<template>
  <div class="login">
    <div class="mask-layer"></div>
    <div class="login-form">
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="formState.remember"
            >Remember me</a-checkbox
          >
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
import { message } from "ant-design-vue";
import { defineComponent, reactive, toRaw } from "vue";
import { useRouter } from "vue-router";
import { api } from "../api";
import { useUserStoreHook } from "../stores/modules/user";
import { Result } from "/#/global";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
export default defineComponent({
  setup() {
    const router = useRouter();
    const userStore = useUserStoreHook();

    const formState = reactive<FormState>({
      username: "jack",
      password: "redballoon",
      remember: true,
    });
    const onFinish = async (values: any) => {
      if (values) {
        const res: Result = await api.SYS.login(values);

        userStore.setToken(res.result.token);

        if (res.result) {
          const userRes: Result = await api.SYS.getUerInfo();
          userStore.setUserInfo(userRes.result);
          userStore.setMenus(userRes?.result?.menus);
          message.success("登陆成功");
          router.replace("/");
        } else {
          message.error("登陆失败");
        }
        // console.log(res, "Res");
      }
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };

    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>
<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background: url("../assets/pexels-luis-gomes-546819.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
  .mask-layer {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .login-form {
    position: absolute;
    right: 20rem;
    bottom: 30%;
  }
  :deep(.ant-form-item-required) {
    color: white !important;
    font-weight: bold;
  }
  :deep(.ant-checkbox-wrapper) {
    color: white !important;
    font-weight: bold;
  }
}
</style>
