const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
const ages = [10, 20, 33, 12, 45, 32, 55, 22, 11, 7, 65, 34];

// //
// // ─── FOREACH ────────────────────────────────────────────────────────────────────
// //

// companies.forEach((e, i) => {
//   // console.log(i, e.directors);
// });
// for (let coname of companies) {
//   // console.log(coname.name)
// }
// let doubel = ages.map(e => e * 2);//
// // ─── FILL ───────────────────────────────────────────────────────────────────────
// //  修改原来数组,而不会返回新的数组

// // ages.fill(0)  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
// // ages.fill(e=>Math.floor(Math.random()*10))  // fill 不是这么玩的 。。。

// // let arr = new Array(100)
// // let vals = arr.fill(0).map(()=>Math.random())
// // console.log(vals)
// // let eachDoub = ages.forEach(e => e * 2);

// //
// // ─── FILL ───────────────────────────────────────────────────────────────────────
// //  修改原来数组,而不会返回新的数组

// ages.fill(0); // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
// ages.fill(e => Math.floor(Math.random() * 10)); // fill 不是这么玩的 。。。

// let arr = new Array(100);
// let vals = arr.fill(0).map(() => Math.random());
// //
// // ─── FILTER ─────────────────────────────────────────────────────────────────────
// //

// // let canDrink = [];
// // for(let i=0;i<ages.length;i++){ // for loop
// //   if(ages[i]>=18) canDrink.push(ages[i])
// // }
// // console.log(canDrink)

// // const canDrink = ages.filter(age => age >= 18);
// // console.log(canDrink);
// // ES5
// // const retailCompanyies = companies.filter(function(company){
// //   if(company.category === 'Retail') return true
// // })
// // console.log(retailCompanyies)
// //ES6
// const retailCompanyies = companies.filter(company => company.category == "Retail");
// // get 80's
// const eightiesCompany = companies.filter(company => company.start > 1980 && company.start < 1990);
// // lasted 10 years of more
// const lastedTenYears = companies.filter(company => company.end - company.start >= 10);

// //
// // ─── MAP ────────────────────────────────────────────────────────────────────────
// // 不同于 filter , Map 其实可以创建数组
// // creat arr of company names
// const companyNames = companies.map(company => company.name);
// // 开平方根
// const ageSquare = ages.map(age => Math.sqrt(age)).map(age => age * 2);
// console.log(ageSquare)
//
// ─── SORT ───────────────────────────────────────────────────────────────────────
// 每次比对两个元素 , 返回 1 或者 -1
// const sortedCompanies = companies
//   .sort(function(c1, c2) {
//     if (c1.start > c2.start) return 1; // A > B 返回 1
//     return -1; // A < B 返回 -1
//   })
//   .map(e => e.start);
// 若 a 小于 b，即 a - b 小于零，则返回一个小于零的值，数组将按照升序排列。
// 若 a 等于 b，则返回 0。
// 若 a 大于 b, 即 a - b 大于零，则返回一个大于零的值，数组将按照降序排列。
// const sortedCompanies = companies.sort((c1,c2)=>c1.start-c2.start).map(e=>e.start)
// const soredAges = ages.sort((a,b)=>a-b)
// console.log(soredAges);

//
// ─── REDUCE ─────────────────────────────────────────────────────────────────────
// reduce 冗余 ?
// old way
// let ageSum = 0;
// for(let i=0;i<ages.length;i++){
//   ageSum+=ages[i]
// }
// for (let val of ages) {
//   sum += val;
// }
// console.log(sum);
// function sum(acc,curr){
//   console.log('acc '+acc)
//   console.log('curr '+curr)
//   return acc+curr
// }
// let biggest = ages.reduce((acc, val) => (val < acc ? (acc = val) : acc));
let biggest = ages.reduce((acc, val) => (acc > val ? acc : val));
console.log(biggest);
// //new way
// let ageSum = ages.reduce((total, age) => total + age, 0); // total 第一次取值 = 0

// // 获取所有公司年月累加和 这里就可以很好解释为什么需要你添加 0 这个第二参数

// let allComYear1 = companies.reduce((total, company) => total + (company.end - company.start)); //返回值 [object Object]168215231058
// let allComYear2 = companies.reduce((total, company) => total + (company.end - company.start), 0); // 118
// console.log(allComYear2);
