export function howMuchPencil(str) {
  let result = [str];
  while (str.length > 0) {
    let newStr = str.slice(1);
    result.push(newStr);
    str = newStr;
  }
  return result;
}