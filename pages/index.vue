<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-4xl font-extrabold">Summary</h1>
    <div>
      <USelectMenu v-model="selectedView" :options="transactionViewOptions" />
    </div>
  </section>

  <section
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10"
  >
    <Trend
      :amount="4000"
      :last-amount="3000"
      :loading="false"
      color="green"
      title="Income"
    />
    <Trend
      :amount="4000"
      :last-amount="5000"
      :loading="false"
      color="red"
      title="Expense"
    />
    <Trend
      :amount="4000"
      :last-amount="3000"
      :loading="false"
      color="green"
      title="Investments"
    />
    <Trend
      :amount="4000"
      :last-amount="4100"
      :loading="false"
      color="red"
      title="Savings"
    />
  </section>
  <section>
    <Transaction />
    <Transaction />
    <Transaction />
    <Transaction />
  </section>
</template>

<script setup>
import { transactionViewOptions } from "~/constants";

const selectedView = ref(transactionViewOptions[1]);
</script>
