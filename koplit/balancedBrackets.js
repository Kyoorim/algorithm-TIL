// 1. for문으로 str을 탐색한다
// 2. opening 괄호이면 stack이라는 빈 배열에 넣는다
// 3. closing 괄호이면 stack 안에 들어있는 가장 마지막으로 넣은 opening 괄호와 매칭되는지 확인한다
// 4. 매칭되면 stack안에 있는 마지막 괄호를 pop()
// 5. stack.length === 0 이면 true 리턴 // 모두 매칭되어 pop으로 빠져나갔다는 얘기
// 6. stack.length !== 0 이면 false 리턴

const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (
        (str[i] === ")" && stack[stack.length - 1] === "(") ||
        (str[i] === "}" && stack[stack.length - 1] === "{") ||
        (str[i] === "]" && stack[stack.length - 1] === "[")
      ) {
        stack.pop();
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else return false;
};
