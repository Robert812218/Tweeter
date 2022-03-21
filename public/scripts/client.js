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
    // console.log("Tweet Object received", tweet);
    // console.log(`Name: ${tweet.user.name}`);
    // console.log(`Image: ${tweet.user.avatars}`);
    // console.log(`Handle: ${tweet.user.handle}`);

    // console.log(`Content: ${tweet.content.text}`);
    // console.log(`Created at: ${tweet.created_at}`);
    

    let $tweet = $(`<article class="old-tweet">
      <header>
        <div class="thumbnail">${tweet.user.name}</div>
        <div>${tweet.user.avatars}</div>
        <div class="handle">${tweet.user.handle}</div>
      </header>
    <content>
      <div>${tweet.content.text}</div>
      <div>${tweet.created_at}</div>
    </content>
    <footer>
      <div></div>
      <div></div>
      <div></div>
    </footer>
    </article>`);
  
    return $tweet;
  }
  
  renderTweets(data);
});
// Fake data taken from initial-tweets.json
