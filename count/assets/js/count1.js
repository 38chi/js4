/*js file*/
$(function(){

  var count = 0;
  var $inc = $(".increment");

  $("up").click(function(){
    cnt = 0;
    $(".cnt").test(cnt);
  })

  function countUp(){
    count = count + 1;
    console.log(count);
  }

  countUp();





})//end function
