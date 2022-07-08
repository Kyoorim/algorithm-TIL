// 1. (2, 3, 5)만을 사용하여 곱한 결과를 오름차순대로 나열하는 것이 포인트
// 2. let result = [1]를 선언하고 result[0]을 1로 고정시킨다
// 3. result[0]에 각각 2, 3, 5로 곱한 값을 따로 변수선언한다
// 4. Math.min()을 통해 그 중 최소값을 뽑아 result.push(최소값)으로 result 배열에 밀어 넣는다
// 5. 최소값으로 뽑힌 값은 index++를 적용한다
// 6. 계속 비교한다
// 7. result[n-1]의 값을 구한다

const uglyNumbers = function (n) {
  const result = [1];

  let idx2 = 0;
  let idx3 = 0;
  let idx5 = 0;

  for (let i = 0; i < n; i++) {
    let mulBy2 = result[idx2] * 2;
    let mulBy3 = result[idx3] * 3;
    let mulBy5 = result[idx5] * 5;

    let nextNum = Math.min(mulBy2, mulBy3, mulBy5);
    result.push(nextNum);

    if (nextNum === mulBy2) idx2++;
    if (nextNum === mulBy3) idx3++;
    if (nextNum === mulBy5) idx5++;
  }
  return result[n - 1];
};
