
jQuery.fn.animateAuto = function(prop, speed, callback){
    var elem, height, width;
    return this.each(function(i, el){
        el = jQuery(el), elem = el.clone().css({"height":"auto","width":"auto"}).appendTo("body");
        height = elem.css("height"),
        width = elem.css("width"),
        elem.remove();

        if(prop === "height")
            el.animate({"height":height}, speed, callback);
        else if(prop === "width")
            el.animate({"width":width}, speed, callback);
        else if(prop === "both")
            el.animate({"width":width,"height":height}, speed, callback);
    });
}

var quoteOut = false;
$(".armContainer").hover(function() {
  $(".rotateOnHover").css("animation-play-state","running");
},function() {
  $(".rotateOnHover").css("animation-play-state","paused");
});

$(window).scroll(function() {
  if ($(window).scrollTop() > $(".quote").offset().top-$(window).height() && !quoteOut) {
    $(".quote").animateAuto("width",1000);
    quoteOut = true;
  }
  if ($(window).scrollTop() == 0) {
    $(".quote").css("width",0);
    quoteOut=false;
  }
  console.log($(window).scrollTop());
});
