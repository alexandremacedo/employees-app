<template>
  <div v-for="employee in filteredEmployees" :key="employee.id" class="flex">
    <div class="flex w-[400px] mt-1">
      <EmployeeRoot :employee="employee">
        <template v-slot:action>
          <EmployeeAction :employeeId="employee.id" />
        </template>
      </EmployeeRoot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  filteredEmployees: Employee[];
}>();
</script>
