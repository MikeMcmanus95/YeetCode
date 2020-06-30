class Task {
  getDependencies() {
    return [task1, task2, task3];
  }
}

function getOrder(latestTask) {
  let dependencies = latestTask.getDependencies();
  let order = [];
  if (!dependencies.length) {
    return [latestTask];
  } else {
    for (let i = 0; i < dependencies.length; i++) {
      order.push(...getOrder(dependencies[i]));
    }
    order.push(latestTask);
  }

  return order;
}
