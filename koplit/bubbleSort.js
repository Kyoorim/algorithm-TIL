const swap = function (idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  
  let bubbleSort = function (arr) {
    let N = arr.length;
  
    for (let i = 0; i < N; i++) {
      let count = 0;
      for (let j = 0; j < N - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          count++;
          swap(j, j + 1, arr);
        }
      }
      // count가 0 이라는 것은 모든 요소들이 제자리(i번째)에 들어있다는 이야기이므로
      if (count === 0) {
        break; // 거기서 멈추기
      }
    }
  
    return arr;