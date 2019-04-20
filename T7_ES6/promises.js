const posts = [
  {
    title: "Title one",
    body: "this is body one"
  },
  {
    title: "Title two",
    body: "this is body two"
  }
];
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
      if(!error){
        res()
      }else{
        rej('Ops! Something went wrong')
      }
    }, 2000);
  });
}
let post = {
  title: "title 3",
  body: "lorem ipsum"
};
getPosts();
createPost(post).then(getPosts)
