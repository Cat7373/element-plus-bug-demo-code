<template lang="pug">
span 该页面不存在，5s 后将自动回到首页...
</template>

<script setup>
import { useRouter } from 'vue-router'

const route = useRouter()

setTimeout(() => route.push({ name: 'Home' }), 5000)
</script>
