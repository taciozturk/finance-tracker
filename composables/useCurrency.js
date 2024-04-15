export const useCurrency = (amount) => {
  const currency = computed(() => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).format(isRef(amount) ? amount.value : amount);
  });
  return {
    currency,
  };
};
