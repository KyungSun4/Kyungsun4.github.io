$(window).scroll(function() {
  if ($(".quote").scrollTop() == 0) {
    $(".quote").addClass('expandAnimation');
  }
  console.log($(window).scrollTop());
});
