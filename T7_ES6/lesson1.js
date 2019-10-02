let obj = {
  name: "foo",
  foo() {
    console.log(super.name, this.name);
  }
};
Object.setPrototypeOf(obj, { name: "Super" });
obj.foo();
