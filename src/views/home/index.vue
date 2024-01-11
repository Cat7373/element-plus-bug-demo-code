<template lang="pug">
.p-4
  div
    el-button(type="success") Demo1
    el-button(type="danger") Demo2
    el-button(type="warning") Demo3
  
  .mt-4
    el-button(type="info") loading

  .mt-4
    p 123123123
    p abcdefghijkl
</template>

<script setup>
import { sleep } from '@/util';

</script>
