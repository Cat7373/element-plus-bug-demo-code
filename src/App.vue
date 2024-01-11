<template lang="pug">
el-config-provider(:locale="zhCn")
  router-view(v-loading="loading", :element-loading-text="loadingMsg")
  //- Index(v-loading="loading", :element-loading-text="loadingMsg")
</template>

<script setup>
import { computed } from 'vue'
import { useCommonStore } from '@/store'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import Index from '@/views/home/index.vue'

const commonStore = useCommonStore()
const loading = computed(() => commonStore.isLoading)
const loadingMsg = computed(() => commonStore.loadingMsg)
</script>