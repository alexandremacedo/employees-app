<template>
  <div class="flex bg-zinc-900  mb-4">
    <img v-if="photo" class="w-full rounded-md" :src="photo" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  photo?: string;
}>();
</script>
