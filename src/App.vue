<template>
  <div id="app">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider collapsible v-model="collapsed">
        <div class="logo">LOGO</div>
        <a-menu
          theme="dark"
          :defaultSelectedKeys="[selectMenu]"
          :openKeys.sync="openKeys"
          :selectedKeys="[selectMenu]"
          mode="inline"
          @click="selectItem"
        >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="home"/><span>主菜单1</span></span>
            <a-menu-item key="page1-1">子菜单1-1</a-menu-item>
            <a-menu-item key="page1-2">子菜单1-2</a-menu-item>
            <a-menu-item key="page1-3">子菜单1-3</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="project"/><span>主菜单2</span></span>
            <a-menu-item key="page2-1">子菜单2-1</a-menu-item>
            <a-menu-item key="page2-2">子菜单2-2</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0"/>
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>主菜单</a-breadcrumb-item>
            <a-breadcrumb-item>子菜单</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <router-view/>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          公司 ©2020
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        collapsed: false,
        current: ['mail'],
        openKeys: ['sub1'],
        selectMenu: 'page1-1', // 选中菜单
        breadItem: '' // 面包屑
      }
    },
    mounted () {
      // console.log(this.$route.path.slice(1))
      this.openKeys = [`sub${this.$route.path.slice(5, 6)}`]
      this.selectMenu = this.$route.path.slice(1)
    },
    methods: {
      selectItem ({ item, key, keyPath }) {
        if (this.$route.path !== `/${key}`) {
          this.$router.push(`${key}`)
        }
      }
    },
    watch: {
      $route: function (newValue, oldValue) {
        // console.log(newValue)
        if (newValue.path === '/') {
          this.openKeys = [`sub1`]
          this.selectMenu = 'page1-1'
          return false
        }
        this.openKeys = [`sub${newValue.path.slice(5, 6)}`]
        this.selectMenu = newValue.path.slice(1)
      }
    }
  }
</script>

<style>#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  text-align: center;
  line-height: 32px;
  color: #fff;
}
</style>
