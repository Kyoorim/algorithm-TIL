let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  // 재귀로 풀 수 있음
  // 세로를 m, 가로를 n이라고 놓고
  // function(n) = function(n-2) + function(n-1) => 이것을 최적화기법으로 업그레이드 해야함
  // Memoization 필요
  const save = [0, 1, 2];

  const subTiling = (size) => {
    if (save[size] !== undefined) return save[size]; // 이미 해결한 문제는 풀지 않음. 이 줄을 쓰지 않으면 시간초과가 생겨버림
    if (size <= 2) return save[size];
    save[size] = subTiling(size - 1) + subTiling(size - 2);
    return save[size];
  };
  return subTiling(n);
};
