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
  
  const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
    //console.log("We are in the render Tweets");
    for (const twt of tweets) {
      let $tweet = createTweetElement(twt);
      $('.other-tweets').append($tweet);
    }
  }
  // fix this
  const createTweetElement = function(tweet) {

    let $heartIcon = $("#heart-icon")

    let $tweet = $(`<article class="old-tweet">
      <header>
        <div class="thumbnail">${tweet.user.name}</div>
        <div><img src="${tweet.user.avatars}"></img></div>
        <div class="handle">${tweet.user.handle}</div>
      </header>
    <content>
      <div>${tweet.content.text}</div>
      <div>${tweet.created_at}</div>
    </content>
    <footer>
      <div><i class="fa-solid fa-heart"></i></div>
      <div><i class="fa-solid fa-flag"></i></div>
      <div><i class="fa-solid fa-retweet"></i></div>
    </footer>
    </article>`);
  
    return $tweet;
  }
  
  renderTweets(data);
});

// add an event listener that listens for the submit event
// prevent the default behaviour of the submit event (data submission and page refresh)
// create an AJAX POST request in client.js that sends the form data to the server.

$(document).submit(function(event) {
  event.preventDefault();

  const createPost = (posts) => {
    const $header = $(`
    <header>
        <div class="thumbnail">${post.user.name}</div>
        <div><img src="${tweet.user.avatars}"></img></div>
        <div class="handle">${post.user.handle}</div>
      </header>
    `);
    const $content = $(`
    <content>
      <div>${tweet.content.text}</div>
      <div>${tweet.created_at}</div>
    </content>
    `);
    const $footer = $(`
    <footer>
      <div><i class="fa-solid fa-heart"></i></div>
      <div><i class="fa-solid fa-flag"></i></div>
      <div><i class="fa-solid fa-retweet"></i></div>
    </footer>
    `);
    const $post = $('<article class="old-tweet"></article>');
    $post.append($header, $content, $footer);
    return $post;
  }




});