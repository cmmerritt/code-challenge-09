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

export function stepActions(recipe){
  let verbArray = [];
  let steps = recipe.steps;
  for (let step of steps) {
    let stepChunk = step.split("','");
    let stepChunkStr = stepChunk.toString();
    let stepChunkSep = stepChunkStr.split(' ').slice(0, 1);
    verbArray.push(stepChunkSep.toString());
  }
  return verbArray;
}

export function removeLastCharacters(str, numberOfCharacters){
  if (numberOfCharacters < 0) {
    return str;
  } else if (numberOfCharacters > str.length) {
    return '';
  } else {
    return str.slice(0, -numberOfCharacters);
  }
}

export function totalSumCSV(str){
  let split = str.split(',');
  return split.reduce((a, b) => Number(a) + Number(b), 0);
}

export function removeVowels(str){
  let arr = Array(str);
  let map = arr.map(x => x.replace(/[aeiou]/g, ''));
  return map.toString();
}

export function extractVowels(str){
  let arr = Array(str);
  let map1 = arr.map(x => x.replace(/[aeiou]/g, ''));
  let map2 = arr.map(x => x.replace(/[^aeiou]/g, ''));
  let vowelArr = Array.from(map2.toString());
  let vowelsSorted = vowelArr.sort();
  let vowelsSortedStr = vowelsSorted.join('');
  return [map1.toString(), vowelsSortedStr];
}