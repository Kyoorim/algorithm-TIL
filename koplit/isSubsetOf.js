const isSubsetOf = function (base, sample) {
  // base와 sample을 모두 오름차순으로 정리
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  // 3개의 변수를 가진 findItem 함수 선언
  // start는 base와 sample이 동시에 가지고 있는 요소가 시작되는 지점
  const findItem = (item, arr, start) => {
    for (let i = start; i < arr.length; i++) {
      if (item === arr[i]) return i; // 같은 요소가 i번째
      // arr[i]가 item 보다 커져버리면 이미 arr가 base의 교집합이 아니라는 얘기
      else if (item < arr[i]) return false;
    }
    return false;
  };

  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    baseIdx = findItem(sample[i], base, baseIdx);
    if (baseIdx === false) return false;
  }
  return true;
};
