$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  

  const createTweetElement = function(tweet) {
    let $top = $(`
      <header>
        <div class="thumbnail">${tweet.user.name}</div>
        <div><img src="${tweet.user.avatars}"></img></div>
        <div class="handle">${tweet.user.handle}</div>
      </header>
    `);

    let $body = $(`
      <content>
        <div>${tweet.content.text}</div>
      </content>
    `);

    let $bottom = $(`
      <footer>
      <div>ID: ${tweet.created_at}</div>
        <span class="need_to_be_rendered" datetime="2016-07-07T09:24:17Z">March 27, 2022</span>
        <div><i class="fa-solid fa-heart"></i></div>
        <div><i class="fa-solid fa-flag"></i></div>
        <div><i class="fa-solid fa-retweet"></i></div>
      </footer>
    `)
  
    let $tweet = $(`<article class="old-tweet"></article>`);
    $tweet.append($top, $body, $bottom);
  
    return $tweet;
  }

  const renderTweets = function(tweets) {
    $container = $('.other-tweets');
    tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $container.prepend($tweet);
    })
    console.log("We are in Render Tweets");
  }

  renderTweets(data);
  const loadTweets = () => {
    $.ajax('/tweets', {
      method: "GET",
      success: posts => {
        console.log(posts)
        renderTweets(posts)
      },
      error: error => console.log(error)
    });
  }

  loadTweets();

  const $form = $('#new-tweet-form');
  $form.on('submit', function(event) {
    event.preventDefault();

    const serializedData = $(this).serialize();
    $txt = $('#tweet-text').val().trim().length;

    if (!$txt) {
      $("#error-1").html("Tweet must be greater than zero characters, buddy");
      $("#error-1").css("border", "5px outset silver");
      $("#error-1").css("padding", "20px");
      $("#error-1").css("background-color", "red");
      $("#number-count").css("font-weight", "bold");
      
    } else if ($txt > 140) {

      $("textarea").css("background-color", "red");
      $("#error-1").html("Tweet must be 140 characters or less");
      $("#error-1").css("border", "5px outset silver");
      $("#error-1").css("padding", "20px");
      $("#error-1").css("background-color", "red");
      $("#number-count").css("font-weight", "bold");
      
    } else {
      this.reset();
        $.ajax('/tweets', {
          method: "POST",
          data: serializedData
        }).then((resp) => {
        $('#number-count').val(140)
        loadTweets();
      });
      
    }
  });

});