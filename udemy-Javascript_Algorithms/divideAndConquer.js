// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

// search([1,2,3,4,5,6], 4) // 3
// search([1,2,3,4,5,6], 6) // 5
// search([1,2,3,4,5,6], 11 // -1

function search(arr, num) {
  // min과 max는 각각 index를 가리킨다
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2); // 배열의 중간지점을 구한다
    let currentElement = arr[middle]; // 중간지점에 해당하는 요소의 값을 currentElement에 넣어준다

    if (currentElement < num) {
      min = middle + 1;
    } else if (currentElement > num) {
      max = middle - 1;
    } else {
      return middle; // if 와 else if에도 해당하지 않으면 답은 middle을 인덱스로 갖는 요소이기 때문
    }
  }
  return -1; // 위 경우에 모두 해당하지 않으면 배열에 존재하지 않은 요소이므로
}
