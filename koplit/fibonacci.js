function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.
  // 동적 계획법???
  let newArr = [0, 1]; // 0번쨰와 1번째 요소는 고정시키기

  let fib = (n) => {
    // 함수 1개 선언
    if (newArr[n] !== undefined) {
      return newArr[n]; // 기존꺼 리턴
    }
    newArr[n] = fib(n - 1) + fib(n - 2); // 새로운 합
    return newArr[n];
  };
  return fib(n);
}
