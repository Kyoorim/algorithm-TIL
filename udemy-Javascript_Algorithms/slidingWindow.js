// maxSubarraySum([1, 2, 3, 2, 8, 1, 5], 2) // 10
// maxSubarraySum([1, 2, 3, 2, 8, 1, 5], 4) // 17
// maxSubarraySum([4, 2, 1, 6], 1) // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
// maxSubarraySum([], 4) // null

// ## 풀이
// 1. function maxSubarraySum(arr, num) 이라고 할 때,
// 2. 시간을 줄일 수 있는 binary 접근방법으로 푼다면,
// 3. 처음 n개를 서로 더해준 후
// 4. 그 다음 n개로 옮겨갈 때,
// 5. 맨 앞 요소만큼 빼고 그 다음에 올 요소만큼 더하는 방식을 취하게 되면
// 6. 매번 일일히 다 더하는 수고를 하지 않아도 된다

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null; // num이 배열길이보다 큰 경우는 합을 구할 수가 없으므로 null 리턴

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]; // arr[0]부터 num개 요소만큼 더한 합 maxSum에 저장
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]; // 합한 요소들 중 맨 앞에 요소만큼 빼고 바로 뒤에있는 요소만큼 더해서 새로운 합을 구함
    maxSum = Math.max(tempSum, maxSum); // 그 중 큰 값(최대값)을 리턴
  }
  return maxSum;
}
