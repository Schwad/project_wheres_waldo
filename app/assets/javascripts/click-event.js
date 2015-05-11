$( document ).ready(function() {
  $( window ).click(function(e){
    $frame = $( "<div>", {class: 'frame' } );
    $frame.css( "margin-top", e.pageY );
    $frame.css( "margin-left", e.pageX );
    $( '#container' ).append( $frame );
    $dropdown = $( "<div>", {class: 'dropdown' } );
    $dropdown.css( "margin-top", e.pageY );
    $dropdown.css( "margin-left", e.pageX );
    $( '#container' ).append( $dropdown );
  });
});