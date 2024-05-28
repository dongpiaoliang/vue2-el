<script>
import {Container, Aside, Main, Menu, MenuItem} from "element-ui"

export default {
  name: "layout",
  components: {
    ElContainer: Container,
    ElAside: Aside,
    ElMain: Main,
    ElMenu: Menu,
    ElMenuItem: MenuItem
  },
  computed: {
    routes() {
      return this.$router.options.routes.slice(0, -2)
    },
    activeIndex() {
      let routeIndex = this.routes.findIndex((item) => {
        return item.name === this.$route.name
      }) + 1
      if(routeIndex===0){
        return ""
      }
      return String(routeIndex)
    }
  },
  methods: {
    goRoute(routeName) {
      this.$router.push({
        name: routeName
      }, () => {
      }, () => {
      })
    }
  }
}

</script>

<template>
  <el-container>
    <el-aside width="240px">
      <el-menu
          :default-active="activeIndex"
      >
        <el-menu-item
            v-for="(item,index) in routes"
            :key="index"
            @click="goRoute(item.name)"
            :index="String(index+1)"
        >
          {{ item.meta.title }}
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>


</template>

<style scoped>
.el-container {
  height: 95vh;
  overflow: auto;
}

.el-aside {
  background-color: #d0dcea;
  text-align: center;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  margin-left: 10px;
  text-align: center;
}

.el-menu {
  background-color: #d0dcea;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

</style>