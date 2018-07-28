$(document).ready(function () {
  $(".s").hover(
    function () {
      $(this).text($(this).attr("data-value"));
    }, function () {
      $(this).text($(this).attr("data-txt"));
    });
});
