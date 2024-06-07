<template>
  <div class="flex">
    <div
      class="flex flex-col justify-between p-6 bg-zinc-900 rounded-md w-[400px]"
    >
      <slot name="photo"></slot>

      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-col">
          <span class="cal text-[24px] text-primary">{{ employee.name }}</span>
          <span class="text-zinc-100">{{ employee.role }}</span>

          <slot name="description"></slot>

          <span class="text-zinc-400 text-xxs mt-2">{{
            employee.workingSince
          }}</span>
        </div>

        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  employee: Employee;
}>();
</script>
