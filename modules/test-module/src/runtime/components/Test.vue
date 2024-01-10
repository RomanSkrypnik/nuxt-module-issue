<template>
  <div>
    <img :src="`/nuxt-3.png`" alt="Nuxt 3 image">
    I'm a test component
  </div>
  {{ isNil(true) }}
</template>
<script setup lang="ts">
import { isNil } from 'lodash-es';
</script>
