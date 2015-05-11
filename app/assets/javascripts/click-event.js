$( document ).ready(function(){
  clickEvent.init();
});

var clickEvent = {
  init: function(){
    $( '#background' ).click(function(e){
      var x = e.pageX;
      var y = e.pageY;
      clickEvent.addFrame(x, y);
      clickEvent.addDropdown(x, y);
    });
  },

  addFrame: function(x, y){
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
  },

  addDropdown: function(x, y){
    var $dropdown = $( "<div>", { class: 'dropdown' } );
    $dropdown.css( "margin-top", y );
    $dropdown.css( "margin-left", x );
    $dropdown.append( "<form id='character-selection'><select name='characters'><option value='waldo'>Waldo</option><option value='wenda'>Wenda</option><option value='odlaw'>Odlaw</option><option value='wizard'>Wizard Whitebeard</option><option value='woof'>Woof</option></select><input type='submit' value='Submit' class='submit'></form>");
    $( '#container' ).append( $dropdown );
    $( '.submit' ).click(function(event){
      event.preventDefault();
      console.log( "hello?" );
    });
  }
}