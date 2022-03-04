var maps = new Map();
maps.set(0, "apu");
maps.set(1, "appu");
maps.set(2, "apppu");
maps.set(3, "appppu");
console.log(maps);

for (let key of maps.keys()) {
  console.log(`keys are :${key}`);
}

for (let values of maps.values()) {
  console.log(`Values are :${values}`);
}

for (let [key, values] of maps) {
  console.log(`keys are :${key} and values are :${values}`);
}
