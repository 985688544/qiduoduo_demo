<template>
  <a-layout class="home">
    <a-layout-sider
      v-model:collapsed="collapsed"
      class=""
      :trigger="null"
      collapsible
    >
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <template v-for="(item, index) in menuOptions">
          <a-menu-item
            v-if="!item.children || item?.children.length === 0"
            :key="index + 1 + ''"
          >
            <div @click.stop="handletoPath(item)">{{ item.label }}</div>
          </a-menu-item>
          <a-sub-menu v-else :key="'child' + index + 1" :title="item.label">
            <a-menu-item
              v-for="(child, idx) in item.children"
              :key="'' + idx + 1"
            >
              <div @click.stop="handletoPath(child)">
                {{ child.label }}
              </div>
            </a-menu-item>
          </a-sub-menu>
        </template>
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
    // console.log(menuOptions);
    // console.log(useStore.getMenus(), "menuop");
    const hanldeLogout = () => {
      router.push("/login");
    };
    const handletoPath = (item) => {
      router.push(item.path);
    };

    return {
      visible,
      hanldeLogout,
      menuOptions,
      handletoPath,
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
  .ant-layout-sider {
    overflow-y: auto;
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
