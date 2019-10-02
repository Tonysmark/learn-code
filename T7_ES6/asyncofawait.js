// (async function() {
//   const res = await fetch("http://jsonplaceholder.typicode.com/users");
//   const data = await res.json()
//   console.log(data)
// })();
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((e, i) => {
      output += `<li>${e.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
function createPost(post) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        res();
      } else {
        rej("Ops! Something went wrong");
      }
    }, 2000);
  });
}
let data = {
  title: "title 3",
  body: "lorem ipsum"
};
// 一般情况下直接去跑这两个函数由于create函数延时更长导致getPosts提前在提交数据前就显示了数据
// 但是如果异步请求的话
async function init() {
  await createPost(data); //下面的函数等我创建完再跑
  getPosts();
}
