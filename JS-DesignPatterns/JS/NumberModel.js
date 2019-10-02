class NumberModel {
  constructor() {
    this.number = 0;
    this.color = "red";
    this.observers = [];
  }
  // 计数器
  increment() {
    const colors = ["orange", "red", "green", "blue"];
    this.number++;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    // 计数完成后通知观察者
    this.notifyObservers();
  }
  // 增加观察者
  addObserver(o) {
    this.observers.push(o);
  }
  // 通知观察者
  notifyObservers() {
    this.observers.forEach(e => {
      e.update(this);
    });
  }
}
