<template>
  <div class="flex w-full p-4 justify-center bg-black">
    <div class="flex flex-col w-[400px]">
      <div class="flex items-center pb-4">
        <NuxtLink to="/" class="flex flex-row">
          <img class="" src="/icons/back.svg" alt="Voltar" />
          <h1 class="cal text-[26px] mt-1 ml-2 text-zinc-100">
            Detalhes do Funcionário
          </h1>
        </NuxtLink>
      </div>
      <EmployeeRoot :employee="employee">
        <template v-slot:photo>
          <EmployeePhoto :photo="employee?.photo" />
        </template>
        <template v-slot:description>
          <EmployeeDescription :description="employee?.description" />
        </template>
      </EmployeeRoot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useEmployeesStore } from "~/stores/employees";
import { useRouter } from "vue-router";

const route = useRouter();
const employeeId: string = String(route.currentRoute.value.params.id);
const employeeStore = useEmployeesStore();

let employee = ref<Employee>();
employee.value = employeeStore.findById(employeeId);
</script>
