var main = function() {

  $('form').submit(function(e) {
    var $input = $(e.target).find('input');
    var comment = $input.val();

    if (comment != "") {
      var html = $('<li>').text(comment);
      html.prependTo('#comments');
      $input.val("");
    }

    //overide default behavior of browser on form submit
    return false;
  });

}

$(document).ready(main);