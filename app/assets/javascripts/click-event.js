$( document ).ready(function() {
  $( window ).click(function(e){
    var x = e.pageX;
    var y = e.pageY;
    console.log("X: " + x + ", Y: " + y);
    $frame = $( "<div>", {class: 'frame', } );
    $frame.css( "margin-top", y );
    $( '#container' ).append( $frame );
  });
});