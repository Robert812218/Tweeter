$(document).ready(function() {
  console.log("werkin'");


  $("#tweet-text").keyup(function() {
    const textVal = $(this).val();
    const len = textVal.length;
    console.log(len);

    const remainder = 140 - len;
    $(".counter").html(remainder);

    if (remainder < 0) {
      $(".counter").addClass("redText");
    } else {
      $(".counter").removeClass("redText");
    }
  });

});