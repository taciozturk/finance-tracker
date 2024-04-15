<template>
  <div>
    <div :class="[color]" class="font-bold">{{ title }}</div>
    <div class="text-2xl font-extrabold text-black dark:text-white mb-2">
      <USkeleton v-if="loading" class="h-8 w-full" />
      <div v-else>{{ currency }}</div>
    </div>

    <div>
      <USkeleton v-if="loading" class="h-6 w-full" />
      <div v-else class="flex space-x-1 items-center text-sm">
        <UIcon
          :class="{ green: trendingUp, red: !trendingUp }"
          :name="icon"
          class="h-6 w-6"
        />
        <div class="text-gray-500 dark:text-gray-400">
          {{ percentageTrend }} vs last period
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCurrency } from "~/composables/useCurrency.js";

const props = defineProps({
  title: String,
  amount: Number,
  lastAmount: Number,
  color: String,
  loading: Boolean,
});

const trendingUp = computed(() => props.amount >= props.lastAmount);

const icon = computed(() =>
  trendingUp.value
    ? "i-heroicons-arrow-trending-up"
    : "i-heroicons-arrow-trending-down",
);

const { currency } = useCurrency(props.amount);
const percentageTrend = computed(() => {
  if (props.amount === 0 || props.lastAmount === 0) return "∞%";
  const ratio = Math.ceil(
    ((props.amount - props.lastAmount) / props.amount) * 100,
  );
  return `${Math.round(ratio)}%`;
});
</script>

<style scoped>
.green {
  @apply text-green-600 dark:text-green-400;
}

.red {
  @apply text-red-600 dark:text-red-400;
}
</style>
