//事件监听，监听Form
document.getElementById("myForm").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
  // 获取值
  var siteName = document.getElementById("siteName").value;
  var siteUrl = document.getElementById("siteUrl").value;

  if (!vaildateForm(siteName, siteUrl)) {
    //这里接收的值向下,往表单验证的函数里传值
    return false;
  }

  var bookmark = {
    name: siteName,
    url: siteUrl
  };

  //  本地存储
  // localStorage.setItem('test','hello world');
  // localStorage.getItem('test');

  // 现在就要把bookmark中的东西存到localstorage，但是在此之前我们需要先看是否存在这样的值

  if (localStorage.getItem("bookmarks") === null) {
    //如果不存在,就初始化一个空数列
    var bookmarks = [];
    bookmarks.push(bookmark);
    // 保存到本地存储空间
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks)); //JSON化
  } else {
    // 从localstorage获取bookmarks
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    // 向数列中添加bookmark
    bookmarks.push(bookmark);
    //重置localstorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks)); //JSON化
  }
  //填表以后清空表单内容
  document.getElementById("myForm").reset();
  //保存完以后重在页面
  fetchBookmarks();

  // console.log(bookmark);

  e.preventDefault();
}
// 删除网址
function deleteBookmark(url) {
  // 从local storage获取bookmarks
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  //遍历 bookmark
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      // 从数组中踢出去
      bookmarks.splice(i, 1);
    }
  }
  // 重置localstorage
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  // 在上面这样的方法删除后没有重载页面就不会显示删除掉的东西, 所以下面写页面重载
  fetchBookmarks();
}

// 获取 bookmarks

function fetchBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  // 获取输出的ID
  var bookmarkResult = document.getElementById("bookmarksResults");
  // 设置输出
  bookmarkResult.innerHTML = "";
  // 遍历localstorage,然后一个接一个的输出
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarkResult.innerHTML +=
      '<div class="well ">' +
      "<h3>" +
      name +
      '<a class="btn btn-default pull-right" target = "_blank" href = "' +
      url +
      '">访问这个网址</a>' +
      "<a onClick = \"deleteBookmark('" +
      url +
      '\')" class="btn btn-danger pull-right" href = "#">删除这个网址</a>' +
      "</h3>" +
      "</div>";
  }

  // console.log(bookmarks);
}

// 创建一个表单验证的函数
function vaildateForm(siteName, siteUrl) {
  if (!siteName || !siteUrl) {
    alert("请输入名字和地址");
    return false;
  }
  //  利用JS正则表达式来匹配输入的防治是否符合规范 来源 stackoverflow
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert("使用合法的表达式");
    return false;
  }

  return true;
}
