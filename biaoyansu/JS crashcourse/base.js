// function user(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }
// var whh = new user("王花花", 10, "male");
// var lsd = new user("里栓但", 20, "female");
// console.log(whh);

// JS原生
// function User  (name,age){
//     this.name = name;
//     this.age = age;
//     this.eat = function(){
//         console.log("吃");

//     }
// }
// var whh = new User("王花花",18)
// console.log(whh)
// whh.eat()

// function A(){

// }
// A.prototype.name = 'whh';
// var a=new A()
// console.log(a.__proto__)
// function User  (name,age){
//     this.name = name;
//     this.age = age;
// }
// User.prototype.greet = function () {
//     console.log("你好，我叫" + this.name + "今年" + this.age + "了");
// }
// var whh = new User("王花花",18);
// var lsd = new User("里栓但",20);
// var zks = new User("赵克爽",16);
// // console.log(whh)
// console.log(whh +":"+whh.greet()) //执行 .greet() 方法，而不是使用greet函数本体
// console.log(lsd +":"+lsd.greet())

// var a={}
// var b=new Object();
// console.log(a.constructor===b.constructor);

// 创建一个干净的对象
// var a = Object.create(null);
// console.log(a);
// var b = {};
// console.log(b); // B 自带有很多属性，在浏览器端就能看出来

// function Animal() {
//     this.eat = function () {
//         console.log("吃。。。。。");
//     }
//     this.sleep = function () {
//         console.log("zzz.....")
//     }
// }

// function Mammal() {

// }

// function Person() {

// }
// var a = new Animal();
// var b = new Animal();
// console.log(a.eat===b.eat) // false 明明一样的东西，这样写却拷贝了一份一模一样的东西

// function Animal() {}
// this.prototype = function () {
//     this.eat = function () {
//         console.log("吃。。。。")
//     }
//     this.sleep = function () {
//         console.log("zzz...")
//     }
// }
// var a = new Animal();
// var b = new Animal();
// console.log(
//     a.eat === b.eat //  ture 这就不再是纯粹的拷贝
// )
// 多级继承连
// function Animal() {}
// Animal.prototype = function () {
//     this.eat = function () {
//         console.log("吃。。。。");
//     };
//     this.sleep = function () {
//         console.log("zzz...");
//     };
// };
// function Mammal() {
//     this.prototype = function () {
//         this.suckle = function () {
//             console.log("mia! 奶妈");
//         };
//     };
//     // 如果现在想让哺乳动物继承动物的属性
//     this.prototype = Object.create(Animal.prototype);
// }
// var a = new Mammal();
// console.log(a);  //FIXME: 这里输出与表哥写的不一样
// Mammal
// prototype: Function
// __proto__: ƒ()
// arguments: null
// caller: null
// length: 0
// name: ""
// prototype: {
//     constructor: ƒ
// }
// __proto__: ƒ()[[FunctionLocation]]: base.js: 89[[Scopes]]: Scopes[1]
// __proto__:
//     constructor: ƒ Mammal()
// arguments: null
// caller: null
// length: 0
// name: "Mammal"
// prototype: {
//     constructor: ƒ
// }
// __proto__: ƒ()[[FunctionLocation]]: base.js: 97[[Scopes]]: Scopes[1]
// __proto__: Object

// TODO:
/*
function A(){
    this.prototype = fucntion(){
        this.eat = function(){}
    }
}
function B(){}
B.prototype.eat = function(){}
B.prototype.eatMore = function(){}

A 与 B这样的写法有什么区别？ 有区别，但是具体是什么
*/

// 重写一下
// function Animal(color, weight) {
//     this.color = color;
//     this.weight = weight;
// }
// Animal.prototype.eat = function () {
//     console.log("吃。。。")
// }
// Animal.prototype.sleep = function () {
//     console.log("zzz.....")
// }
// var a = new Animal("brown", 100);
// // console.log(a);

// function Mummal() {}
// Mummal.prototype = Object.create(Animal.prototype)
// Mummal.prototype.constructor = Mummal;
// Mummal.prototype.suckle = function () {
//     console.log("奶我");
// }
// // var m = new Mummal();
// // console.log("m: " + m);
// function Person() {}
// Person.prototype = Object.create(Mummal.prototype);
// Person.prototype.constructor = Person;
// Person.prototype.lie = function () {
//     console.log("你不帅")
// }

// // var lsd = new Person();
// // console.log(lsd)

// this
// this 指代什么不取决于他在代码的什么位置，而取决于他在函数中是如何调用的

// let Person={
//     fname:"花花",
//     lname:"王",
//     fullname:function(){
//         console.log(this)
//         return this.lname+this.fname
//     }
// }
// var getFull = Person.fullname
// console.log(Person.fullname())

// function User(){
//     console.log(this)
// }
// var whh = new User()
// console.log()

// function Yo() {
//     console.log('Yo 我是' + this.name)
// }

// var whh = {
//     name: '王花花'
// }
// var lsd = {
//     name: '里栓但'
// }
// Yo.call(whh)

// function yo(callback){
//     console.log('Yo')
//     if(callback){
//         callback();
//     }
// }
// yo(function(){
//     console.log("我是甘地")
// })

// var a = [2, 4, 6, 8];
// function each(arr, callback) {
//   for (var i = 0; i < arr.length; i++) {
//     var item = arr[i];
//     callback(item);
//   }
// }
// each(a, function(item) {
//   if (item < 5) {
//     console.log(item);
//   }
// });
// each(a,MAX);
// function MAX(item) {
//     if (item > 5) {
//         console.log(item);
//     }
// }


// let Person={
//     fname:"花花",
//     lname:"王",
//     full_name:function(){
//         console.log(this)
//         return this.lname+this.fname
//     },
//     a:{
//         fullname:function(){
//             console.log(this);
//             return this.lname+this.fname;
//         }
//     }
// }
// // var getFull = Person.fullname  // 方法不能用值来代替不然this指向就会出错
// console.log(Person.a.fullname())

function User(){
    console.log(this);
}
new User();