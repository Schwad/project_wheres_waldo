$( document ).ready(function() {
  $( '#background' ).click(function(e){
    var x = e.pageX;
    var y = e.pageY;
    addFrame(x, y);
    addDropdown(x, y);
  });



  var addFrame = function(x, y){
    var $frame = $( "<div>", {class: 'frame' } );
    $frame.css( "margin-top", y );
    $frame.css( "margin-left", x );
    var $closeFrame = $( "<div>", {
        class: 'close-frame',
        text: "X"
        });
    $frame.append( $closeFrame);
    $( '#container' ).append( $frame );
    $closeFrame.click(function() {
      this.parentElement.remove();
    });
  };

  var addDropdown = function(x, y){
    var $dropdown = $( "<div>", {class: 'dropdown' } );
    $dropdown.css( "margin-top", y );
    $dropdown.css( "margin-left", x );
    $dropdown.append( "<select name='characters' form='character'><option value='waldo'>Waldo</option><option value='wenda'>Wenda</option><option value='odlaw'>Odlaw</option><option value='wizard'>Wizard Whitebeard</option><option value='woof'>Woof</option></select>")
    $( '#container' ).append( $dropdown );
  };
});