function sumUnique(nums) {
  const no_repetidos = new Set();

  for (const n of nums) {
    if (Number.isFinite(n)) {
      no_repetidos.add(n);
    }
  }

  let suma = 0;
  for (const num of no_repetidos) {
    suma += num;
  }

  return suma;
}

console.log(sumUnique([1, "2", 2, 3, "a"]));
