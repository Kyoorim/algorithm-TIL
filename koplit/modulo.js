// 두 수(num1, num2)를 입력받아, num1를 num2로 나눈 나머지를 리턴해야 합니다.

// let output = modulo(25, 4);
// console.log(output); // --> 1

// for문이 아닌 while문을 이용한다

function modulo(num1, num2) {
  if (num2 === 0) {
    return "Error: cannot divide by zero";
  }

  while (num1 >= num2) {
    num1 = num1 - num2;
  }
  return num1;
}
