let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let values = [];
  let queue = [node]; // node = root 이면 queue = [root]
  while (queue.length > 0) {
    const head = queue[0]; //1R: head = root //2R: head = rootChild1 //3R: head = rootChild2 ...
    queue = queue.slice(1); //1R: queue = [] //2R: queue = [rootChild2] //3R: queue = [leaf1, leaf2]...
    values.push(head.value); //1R: values = [1] //2R: values = [1, 2] //3R: values = [1, 2, 3]...
    head.children.forEach((child) => queue.push(child));
    //1R: queue = [rootChild1, rootChild2] //2R: queue = [rootChild2, leaf1, leaf2] //3R: queue = [leaf1, leaf2]...
  }
  return values;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
