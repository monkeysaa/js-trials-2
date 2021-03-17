"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(items[i], i);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  let result = []

  for (const idx in items){
    if(idx % 2 === 0) {
      result.push(items[idx]);
    }
  }

  console.log(result);
}


// 3. smallestNItems
// method 1 uses compare as a separate function
function compare(a, b) {
  return a - b;
}

function smallestNItems(items, n) {
  let sorted_items = items.sort(compare); 
  return sorted_items.slice(0, n).reverse();
}

// method 2 uses arrow function
function smallestNItems2(items, n) {
  let sorted_items = items.sort((a, b) => a - b); 
  return sorted_items.slice(0, n).reverse();
}
