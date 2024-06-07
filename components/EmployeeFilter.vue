<template>
  <div class="flex flex-col">
    <input
      class="input__search bg-zinc-900 rounded-md"
      type="search"
      name="userInput"
      placeholder="Procure pelo nome"
      v-model="search"
    />
  </div>
  <div class="mt-4 w-[400px]">
    <div class="flex flex-wrap gap-2 items-center text-gray-800">
      <button
        v-for="(role, $r) in roles"
        :key="$r"
        class="rounded-md px-4 py-2 font-medium text-center text-zinc-100 text-sm"
        :class="
          selectedRole === role
            ? 'bg-primary hover:bg-primary'
            : 'bg-zinc-800 hover:bg-zinc-900'
        "
        @click="handleSelectRole(role)"
      >
        {{ role || "Todos os cargos" }}
      </button>
    </div>
  </div>
  <div class="mt-3 text-sm">
    <span>
      Foram encontrados
      <span class="text-lg font-bold px-1">{{
        filteredEmployees?.length
      }}</span>
      {{ filteredEmployees?.length === 1 ? "resultado" : "resultados" }}
    </span>
  </div>
</template>

<script setup lang="ts">
const roles = [
  "",
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
];

const search = defineModel<string>();

defineProps<{
  selectedRole?: string;
  filteredEmployees?: Employee[];
}>();

const emit = defineEmits<{
  (e: "@filterByRole", role: string): void;
}>();

const handleSelectRole = (role: string) => {
  emit("@filterByRole", role);
};
</script>
