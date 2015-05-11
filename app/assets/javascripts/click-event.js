$( document ).ready(function(){
  clickEvent.init();
});

var clickEvent = {
  init: function(){
    $( '#background' ).click(function(e){
      var x = e.pageX;
      var y = e.pageY;
      clickEvent.addFrame(x, y);
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
    clickEvent.addDropdown($frame);
    $( '#container' ).append( $frame );
    $closeFrame.click(function() {
      this.parentElement.remove();
    });
    $( '.submit' ).click(function(event){
      event.preventDefault();
      var name = $("select").val();
      var $name = $( "<div>", { class: 'name', text: name } );
      $frame.append( $name );
      $( '.dropdown' ).remove();
    });
  },

  addDropdown: function(frame){
    var $dropdown = $( "<div>", { class: 'dropdown' } );
    $dropdown.append( "<form id='character-selection'><select name='characters'><option value='Waldo'>Waldo</option><option value='Wenda'>Wenda</option><option value='Odlaw'>Odlaw</option><option value='Wizard'>Wizard Whitebeard</option><option value='Woof'>Woof</option></select><input type='submit' value='Submit' class='submit'></form>");
    frame.append($dropdown);
  }
}