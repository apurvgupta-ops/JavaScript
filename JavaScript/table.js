const table = (num, count) => {
  if (count > 10) {
    return;
  }
  console.log(num * count);
  table(num, count + 1);
};

table(2, 1);
