<template>
  <a-layout class="home">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item v-for="(item, index) in menuOptions" :key="index + 1">
          <router-link :to="item.path">
            {{ item.label }}
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="home_header">
        <div>
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </div>
        <div>
          <a-popover v-model:visible="visible" trigger="click">
            <template #content>
              <ul>
                <li>
                  <a-button type="text">个人中心</a-button>
                </li>
                <li>
                  <a-button type="text" @click="hanldeLogout"
                    >退出登陆</a-button
                  >
                </li>
              </ul>
            </template>
            <setting-outlined @click="visible = true" />
          </a-popover>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import {
  // UserOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { useUserStoreHook } from "/@/stores/modules/user";

export default defineComponent({
  components: {
    // UserOutlined,
    // VideoCameraOutlined,
    // UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SettingOutlined,
  },

  setup() {
    const visible = ref<boolean>(false);
    const useStore = useUserStoreHook();
    const router = useRouter();
    const menuOptions = computed(() => useStore.getMenus());

    // console.log(useStore.getMenus(), "menuop");
    const hanldeLogout = () => {
      router.push("/login");
    };

    return {
      visible,
      hanldeLogout,
      menuOptions,
      selectedKeys: ref<number[]>([1]),
      collapsed: ref<boolean>(false),
    };
  },
});
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .home_header {
    background: white;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
