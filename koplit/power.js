function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  const half = parseInt(exponent / 2);
  //parseInt로 소수점 밑에 자리를 날려버린다
  const temp = power(base, half);
  // 2를 나눈 이유는 반으로 끊어서 1차 계산한 후 그 후에 *2하여 계산하면 시간이 훨씬 단축되기 때문이다

  const result = (temp * temp) % 94906249;
  //(temp * temp)의 나머지가 9406249보다 작으면 다시 (temp * temp)가 출력된다.

  if (exponent % 2 === 1) {
    //exponent가 홀수인 경우 base 한번을 덜 곱했기 때문에 경우의 수를 따로 빼준다

    return (base * result) % 94906249;
  } else {
    return result;
  }
}
