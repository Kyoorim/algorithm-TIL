// 문제
// 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

// 입력
// 인자1 : arr
// number 타입을 요소로 갖는 임의의 배열

// 출력
// number 타입을 리턴해야 합니다

// 주의사항
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// 배열의 요소는 음수와 0을 포함하는 정수입니다.
// 배열의 길이는 3 이상입니다.

// 입출력 예시
// let output = largestProductOfThree([2, 1, 3, 7]);
// console.log(output); // --> 42 (= 2 * 3 * 7)

// output = largestProductOfThree([-1, 2, -5, 7]);
// console.log(output); // --> 35 (= -1 * -5 * 7)
// 풀이
// sort()함수 오름차순으로 나열하기
// 음수 + 양수인 조합 시
// 2.1. 맨앞 2개 + 맨뒤 1개
// all 음수 or all 양수 조합 시
// 3.1. 맨 뒤에서 3개
// 그중 큰 값을 고르기
const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let head = 0;
  let tail = 0;

  arr.sort((a, b) => a - b); // 오름차순으로 정리

  head = arr[0] * arr[1] * arr[arr.length - 1]; // 음수 양수 혼합시
  tail = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]; // 모두 음수이거나 모두 양수일 때

  if (head > tail) {
    return head;
  } else {
    return tail;
  }
  // or return Math.max(head, tail);
};
