<template lang="pug">
.p-4
  div
    el-button(type="success") Demo1
    el-button(type="danger") Demo2
    el-button(type="warning") Demo3
  
  .mt-4
    el-button(type="info", @click="loading") loading

  .mt-4
    p 123123123
    p abcdefghijkl
</template>

<script setup>
import { useCommonStore } from '@/store'
import { sleep } from '@/util';

const commonStore = useCommonStore()

const loading = async () => {
  await commonStore.loading(async () => {
    await sleep(5000)
  }, 'test msg')
}
</script>
