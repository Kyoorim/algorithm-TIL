// Section 5: Problem Solving Patterns
// 32. Count Unique Value Solution

// function countUniqueValues(arr){
//     // add whatever parameters you deem necessary - good luck!
//       let count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] !== arr[i+1]) {
//             count++;
//         }
//     }
//     return count;
//   }

function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
    return 0;
  }
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[count] !== arr[i]) {
      count++;
      arr[count] = arr[i];
    }
  }
  return count + 1;
}
