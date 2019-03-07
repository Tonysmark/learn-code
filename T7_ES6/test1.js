// import { resolve } from "path";

// const request = require("superagent");
// const cheerio = require("cheerio");

// let p = request.get("https://github.com");
// console.log(p)
// console.log(exports)
// console.log(module.exports === exports)

// function arr() {
//     return [10,30]
// }
// let [num1,num2] = arr()
// console.log(num1,num2)

// function sum({ x = 1, y = 2 }) {
//   return x + y;
// }
// console.log(sum({}));
// console.log(sum({ x: 10 }));
// console.log(sum({ x: 10, y: 20 }));
// Array.prototype.Cons=()=>{}
// let list = [12,3,44,11,23]
// for(let i of list){
//     console.log(i)
// }
// let list2={
//     name:'wanghuahua',
//     sex:'female',
//     age:10,
//     fn:function(){
//         console.log('内建函数')
//     }
// }
// for(let obj in list2){
//     console.log(obj,list2[obj])
// }
// let str = "hello world";
// let buffer = Buffer.from(str)
// console.log(buffer.toString())

// let buffer = Buffer.alloc(10)
// buffer[0]=255
// buffer[9]=13
// buffer[6]=17
// buffer.forEach((e,i)=>{
//     console.log(i,e)
// })
// const fs = require("fs");
// const superagent = require("../node_modules/superagent");
// const cheerio = require("../node_modules/cheerio");
// async function page() {
//   const page = await superagent.get("https://movie.douban.com/subject_search?search_text=%E6%88%98%E6%96%97%E5%A4%A9%E4%BD%BF&cat=1002");
//   let body = cheerio.load(page.text);
//   fs.open("res.html", "w", async (err, fd) => {
//     if (err) {
//       console.log(err);
//     } else {
//       await fs.writeFile(fd, body, err => {
//         if (err) throw err;
//         console.log("successed");
//       });
//     }
//   });
// }
// page();

function asyn1() {
  console.log('function 1 start')
   asyn2();
  console.log('function 1 end')
}
function asyn2() {
  console.log('function 2')
}
asyn1()
console.log("script don't blone anyone")