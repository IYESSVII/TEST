<template>
  <RouterView/>
</template>

<script setup>
import { onMounted } from 'vue'
import request from '@/request.js'

onMounted(async () => {
  await request({
    method: 'post',
    url: '/api/users',
    data: {
      username: 'jack',
      password: 'jackPassword'
    }
  })
  await request({
    method: 'delete',
    url: '/api/users/2'
  })
  await request({
    method: 'put',
    url: '/api/users/3',
    data: {
      username: 'ben',
      password: 'benPassword'
    }
  })
  await request({
    method: 'get',
    url: '/api/users'
  })
})
</script>
