function anaText() {
  var words = document.getElementById("#user-text");
   $('button').click(function(event) {
   $('#user-text').text(words.length);
   });
}
$(document).ready(anaText);