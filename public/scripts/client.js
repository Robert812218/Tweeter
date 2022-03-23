/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const text = require("body-parser/lib/types/text");
// const { append } = require("express/lib/response");
// const res = require("express/lib/response");
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
  
  
  // fix this
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
        <div>${tweet.created_at}</div>
      </content>
    `);

    let $bottom = $(`
      <footer>
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
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
      //console.log("We are in the render Tweets");
    $container = $('.other-tweets');
    tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $container.prepend($tweet);
    })
    console.log("We are in Render Tweets");
  }

  renderTweets(data);

  const fetchTweets = () => {
    $.ajax({
      method: "GET",
      dataType: "json",
      url: "../index.html",
      success: posts => {
        console.log(posts)
        renderTweets(posts)
      },
      error: error => console.log(error)
    });
  }

  fetchTweets();

  const form = $('#createPostForm');
  form.on('submit', function(event) {

    event.preventDefault();
    console.log(event);
    const serializedData = $(this).serialize();
    console.log(serializedData);

    $.post('../index.html', serializedData)
    .then((resp) => {
      console.log(resp);
      fetchPosts();
    });

    this.reset();
  });

  console.log("Hello!");
});

// add an event listener that listens for the submit event
// prevent the default behaviour of the submit event (data submission and page refresh)
// create an AJAX POST request in client.js that sends the form data to the server.