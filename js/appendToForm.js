var moduleAddToDom = (function () {

    var row = ` <div class="row">
    <div class="input-field col s12 m8">
      <input id="song_url" type="text" class="validate">
      <label for="song_url">Song URL</label>
    </div>
    <div class="input-field col s12 m4">
      <input id="name" type="text" class="validate">
      <label for="name">Name</label>
    </div>
  </div>   `;

    var dest = $('#inner');
    var modal = $("#modal-add-playlist-songs");

    var count = 3;

    var displayCounter = function () {
        var displayCounter = $('.modal-footer .count span');
        displayCounter.text("(" + count + ")");


    }

    var appendRow = function () {
        dest.append(row)
        count++;
        displayCounter();
        modal.animate({
            scrollTop: $(modal)[0].scrollHeight
        }, 1000);

    }

    return {
        _appendRow: appendRow,
    }

})();

var displayRow = (function () {
    var btn = $('.modal-footer a.left.addAnotherSong');
    btn.click(function () {
        moduleAddToDom._appendRow();

    });
})();