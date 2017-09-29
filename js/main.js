/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/.json';
var postArray = [];

$(document).ready(function(){
  function postCall(){
    $.ajax({
      method: 'GET',
      url: frontPage,
      data: 'json',
      success: onSuccess/*,
      error: onError*/
    });
  }

  function onSuccess(resource){
    console.log("fuck");
    resource.data.children.forEach (function (postData) {
    postArray.push(new Post({
      image: postData.data.thumbnail,
      title: postData.data.title,
      user: postData.data.author,
      date: postData.data.created
      }));
    });
  }

  function Post(options = {}) {
    this.image = options.image;
    this.title = options.title;
    this.user = options.user;
    //make method for date shit
    this.date = options.date;
  }
  postCall();
  console.log(postArray)
  Post.prototype.assignTitle = function () {
    $('#image').append()

  }
})



