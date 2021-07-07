<template>
  <li>
    <a :href="comic_id">
    <img class="comic-pic" src="https://res.cocomanhua.com/comic/10041/cover.jpg">
    <span>第35话</span>
    </a>
    <a href="/19751/">皇女，刻印反叛者</a>
    <span>2021-06-30</span>
  </li>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>
