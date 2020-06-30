function knapsackProblem(items, capacity) {
  let value = [];
  let result = [];
  let indicies = [];
  for (let i = 0; i <= items.length; i++) {
    let row = [];
    for (let j = 0; j <= capacity; j++) {
      row.push(0);
    }
    value.push(row);
  }

  let max = 0,
    maxY = 0,
    maxX = 0;
  for (let i = 1; i < value.length; i++) {
    let weight = items[i - 1][1];
    let itemValue = items[i - 1][0];
    for (let j = 0; j < value[i].length; j++) {
      if (weight > j) value[i][j] = value[i - 1][j];
      else {
        value[i][j] = Math.max(
          value[i - 1][j],
          value[i - 1][j - weight] + itemValue
        );
      }
      if (value[i][j] > max) {
        max = value[i][j];
        maxY = i;
        maxX = j;
      }
    }
  }
  result.push(max);

  while (maxY || maxX) {
    let weight = items[maxY - 1][1];

    if (value[maxY][maxX] !== value[maxY - 1][maxX]) {
      indicies.unshift(maxY - 1);
      capacity -= weight;
      maxY -= 1;
      maxX -= weight;
    } else {
      maxY--;
    }
  }
  result.push(indicies);

  return result;
}
