// 1. count, left(arr1의 0번째), right(arr2의 0번째)와 k번째 요소인 target을 변수로 선언한다
// 2. left와 right에 해당하는 요소 둘을 대소비교한다 => while문 사용
// 3. 더 작은 숫자를 확인한 후 count++ 한다
// 4. count가 k-1이 되는 순간 배출된 target이 k번째 요소다
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let count = 0;
  left = 0; // arr1의 0번째부터 시작
  right = 0; // arr2의 0번째부터 시작
  let target;
  while (count < k) {
    if (arr[left] < arr[right]) {
      target = arr[left];
      left++;
    } else {
      // arr[left] > arr[right]일 경우
      target = arr[right];
      right++;
    }
    count++; // if문을 돌아도, else문을 돌아도 count는 모두 한번씩 올라간다
  }
  return target;
};
