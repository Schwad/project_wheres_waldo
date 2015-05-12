$( document ).ready(function(){
  clickEvent.init();
});

var clickEvent = {
  init: function(){
    $( '#background' ).click(function(e){
      $.ajax({
        url: '/tags/new.js',
        method: 'get',
        data: { x: e.pageX, y: e.pageY },
        success: function(){
          console.log("It worked!");
        },
        error: function(){
          console.log("wow such fail");
        },
        dataType: "script"
      });
    });
  },

  addFrame: function(x, y){
    var $frame = $( "<div>", {class: 'frame' } );
    $frame.css( "margin-left", x ).css( "margin-top", y );
    clickEvent.addCloseFrame($frame);
    clickEvent.addDropdown($frame);
    $( '#container' ).append( $frame );
    clickEvent.addCloseFrameListener();
    clickEvent.addDropdownListener($frame);
  },

  addCloseFrame: function(frame){
    var $closeFrame = $( "<div>", {
        class: 'close-frame',
        text: "X"
        });
    frame.append( $closeFrame);
  },

  addCloseFrameListener: function(){
    $( '.close-frame' ).click(function() {
      this.parentElement.remove();
    });
  },

  addDropdown: function(frame){
    var $dropdown = $( "<div>", { class: 'dropdown' } );
    $dropdown.append( "<form id='character-selection'><select name='characters'><option value='Waldo'>Waldo</option><option value='Wenda'>Wenda</option><option value='Odlaw'>Odlaw</option><option value='Wizard'>Wizard Whitebeard</option><option value='Woof'>Woof</option></select><input type='submit' value='Submit' class='submit'></form>");
    frame.append($dropdown);
  },

  addDropdownListener: function(frame){
    $( '.submit' ).click(function(event){
      event.preventDefault();
      var character = $("select").val();
      var $name = $( "<div>", { class: 'name', text: character } );
      frame.append( $name );
      $( '.dropdown' ).remove();
    });
  }
}