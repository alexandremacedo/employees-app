<template>
  <span class="text-zinc-100 py-6"> {{ description }}</span>
</template>

<script setup lang="ts">
defineProps<{
  description: string;
}>();
</script>
