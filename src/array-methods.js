export function howMuchPencil(str) {
  let result = [str];
  while (str.length > 0) {
    let newStr = str.slice(1);
    result.push(newStr);
    str = newStr;
  }
  return result;
}

export function wordsToCharList(str) {
  return Array.from(str);
}

export function listFoods(recipe) {
  let shortFoodArray = [];
  let foodString = recipe.ingredients.toString();
  let foodArray = foodString.split(',');
  for (let str of foodArray) {
    let slicedStr = str.split(' ').slice(2, 5).join(' ');
    shortFoodArray.push(slicedStr);
  }
  return shortFoodArray;
}