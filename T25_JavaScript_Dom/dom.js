// //DOM 节点 示例
// // console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
var headerTitle = document.getElementById('header-title');

// headerTitle.style.borderBottom = 'solid 2px #000'

// 获取类名

var item = document.getElementsByClassName('list-group-item');
console.log(item);
console.log(item[0]);
item[0].textContent = 'hello'
item[0].style.fontWeight = 'bold'
item[0].style.backgroundColor = 'green'
