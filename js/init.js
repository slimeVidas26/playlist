

(function($){

  
  $(function(){
    $('.sidenav').sidenav();
  });
  
  
// MODAL
   $('.modal').modal();


  //  $('.addAnotherSong').click(function(){
  //    $('.inner').append(`<div class="row">
  //    <div class="input-field col s8">
  //      <textarea id="song_url" type="text" class="materialize-textarea validate"></textarea>
  //      <label for="song_url">Song URL</label>
  //    </div>
  //    <div class="input-field col s4">
  //      <textarea id="name" type="text" class="materialize-textarea validate"></textarea>
  //      <label for="name">Name</label>
  //    </div>
  //  </div>`     )
  //  })

  

  const appendToForm = (function(){
    // private definitions
     var _row = "";
    var  _newRow = function() {
      _row += `<div class="row">
      <div class="input-field col s12 m8">
        <input id="song_url" type="text" class="validate">
        <label for="song_url">Song URL</label>
      </div>
      <div class="input-field col s12 m4">
        <input id="name" type="text" class="validate">
        <label for="name">Name</label>
      </div>
    </div>`;
    }
    
    const _getRow = function() {
      return _row;
    }
    // revealing interface
    return {
      add: _newRow,
      get: _getRow
    }
  })();

  const dispCtr = (function() {
    const _appendToForm = appendToForm;
    
    const appendRow = $('#inner').append(_appendToForm.get());
     $('a.left.addAnotherSong').click( function() {
      _appendToForm.add()
      _dump( _appendToForm.get() );
    });
    const _dump = function(val) {
        $(appendRow).append(val);
    }
    $('#inner').append(appendRow);
    
  })();


   
  // end of document ready
})(jQuery); // end of jQuery name space



