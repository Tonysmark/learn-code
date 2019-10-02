function* simpleGenerator() {
  yield () => {
    console.log('匿名函数');
  };
  yield 'two check point';
  console.log('到达检查点');
  yield '过去了';
}
let simple = simpleGenerator();
console.log(simple);
console.log((simple.next().done = true));
console.log(simple.next());
