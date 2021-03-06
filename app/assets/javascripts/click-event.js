$( document ).ready(function(){
  clickEvent.init();
});

var clickEvent = {
  init: function(){

    $.ajax({
      url: '/tags.js',
      method: 'get',
      dataType: 'script'
    });

    $( '#background' ).click(function(e){
      $.ajax({
        url: '/tags/new.js',
        method: 'get',
        data: { x: e.pageX, y: e.pageY },
        dataType: "script"
      });
    });
  },

  addFrame: function(x, y){
    var $frame = $( "<div>", {class: 'frame' } );
    $frame.css( "margin-left", x ).css( "margin-top", y );
    clickEvent.addCloseFrame($frame);
    $( '#container' ).append( $frame );
    clickEvent.addCloseFrameListener();
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
      var tagID = this.parentElement.id;
      $.ajax({
        url: '/tags/' + tagID + '.js',
        method: 'delete',
        dataType: "script"
      });
    });
  },

  removeFrame: function(tagID){
    $('#' + tagID).remove();
  },

  addNameToFrame: function(name){
    var $name = $( "<div>", { class: 'name', text: name } );
    $( '.frame' ).last().append( $name );
  },

  addTagIDToFrame: function(tagID){
    $( '.frame' ).last().attr( 'id', tagID );
  },

  addDropdownListener: function(frame){
    $( '.submit' ).click(function(event){
      var character = $("select").val();
      var $name = $( "<div>", { class: 'name', text: character } );
      frame.append( $name );
    });
  }
}