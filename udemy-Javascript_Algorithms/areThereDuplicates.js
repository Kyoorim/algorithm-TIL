// areThereDuplicates(1,2,3) // false
// areThereDuplicates(1,2,2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// areThereDuplicates(1,2,2) 라면,
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  } // 1R {1:1} //2R {1:1, 2:1} // 3R {1:2, 2:1}
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

//  if (lookup[val]) {
//     lookup[val] = lookup[val] + 1;
//   } else {
//     lookup[val] = 1;
//     }
// lookup[val] = (lookup[val] || 0) + 1;
