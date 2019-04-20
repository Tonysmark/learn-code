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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
let post = {
  title: "title 3",
  body: "lorem ipsum"
};
getPosts();
createPost(post, getPosts);
