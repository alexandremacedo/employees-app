<template>
  <NuxtLink
    class="group relative h-[36px] px-4 flex items-center overflow-hidden rounded-md bg-zinc-800 shadow"
    :to="`/employees/${employeeId}`"
  >
    <div
      class="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"
    ></div>
    <span class="relative group-hover:text-white text-sm">Detalhes</span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  employeeId: string;
}>();
</script>
