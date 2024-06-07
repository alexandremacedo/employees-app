<template>
  <div class="flex justify-center p-4 text-zinc-200">
    <div class="flex flex-col">
      <div class="flex items-center pb-4">
        <h1 class="cal text-[26px] text-zinc-200">Funcionários</h1>
      </div>
      <EmployeeFilter
        v-model="search"
        :selectedRole="selectedRole"
        :filteredEmployees="filteredEmployees"
        @@filter-by-role="handleFilterByRole"
      />
      <EmployeeList :filteredEmployees="filteredEmployees" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useEmployeesStore } from "~/stores/employees";
import EmployeeFilter from "../components/EmployeeFilter.vue";
import EmployeeList from "../components/EmployeeList.vue";

const { employees } = useEmployeesStore();

const search = ref("");
const selectedRole = ref("");

const handleFilterByRole = (role: string) => (selectedRole.value = role);

const filteredEmployees = computed(() => {
  const filtered = searchByText(employees, search.value);
  if (selectedRole.value !== "") {
    return filtered.filter(
      (employee: Employee) => employee.role === selectedRole.value
    );
  }
  return filtered;
});

function searchByText(employees: Employee[], search: string): Employee[] {
  return employees.filter((employee: Employee) => {
    return employee.name?.toLowerCase().includes(search.toLowerCase());
  });
}
</script>
