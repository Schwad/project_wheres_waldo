$( document ).ready(function() {
  $( window ).click(function(e){
    console.log("X: " + e.pageX);
    console.log("Y: " + e.pageY);
  });
});