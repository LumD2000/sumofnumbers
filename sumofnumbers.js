const testList = [1, 2, 3, 4, 5];

function sumFor(list) {
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    result += list[i];
  }
  return result;
}

function sumWhile(list) {
  let result = 0;
  let i = 0;
  while (i < list.length) {
    result += list[i];
    i++;
  }
  return result;
}

function sumRecursion(list, num) {
  if (num <= 0) {
    return 0;
  }
  return (sumRecursion(list, num - 1) + list[num - 1]);
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList, testList.length));
console.log(sumTheSimpleWay(testList));
