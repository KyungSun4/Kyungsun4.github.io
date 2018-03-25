var page = "home";
var sethome = function() {
    $("#homeul").animate({
        paddingTop: "-=35vh",
    }, 600);
    $("body").animate({
        color: "white",
    }, 600);
    $("#center").fadeOut();
}
var showprojects = function() {
    $(".projects").delay(700).fadeIn();
    $(".project").each(function() {
        $(this).delay(800 + $(this).attr("num") * 50).fadeIn();
    });
}
var showmore = function() {

    $(".mores").delay(700).fadeIn();
    $(".more").each(function() {
        $(this).delay(800 + $(this).attr("num") * 100).fadeIn();
    });
}
var showblog = function() {
    console.log("eac");
    $(".blogs").delay(400).fadeIn();
    $(".blog").each(function() {

        $(this).delay(400 + $(this).attr("num") * 100).fadeIn();
    });
}
var showabout = function() {

    $(".abouts").delay(700).fadeIn();
    $(".about").each(function() {
        $(this).delay(800 + $(this).attr("num") * 100).fadeIn();
    });
}
var setPage = function() {
    //$("body").scrollTop(0);
    if (page == "projects") {
        $("#greenback").css("z-index", "-2");
        $(".projects").animate({
            marginLeft: "-=100vw",
        }, 400)
        $(".projects").fadeOut(0);
    }
    if (page == "more") {
        $("#redback").css("z-index", "-2");
        $(".mores").animate({
            marginLeft: "-=100vw",
        }, 400)
        $(".mores").fadeOut(0);

    }
    if (page == "blogs") {
        $("#purpleback").css("z-index", "-2");
        $(".blogs").animate({
            marginLeft: "-=100vw",
        }, 400)
        $(".blogs").fadeOut(0);
    }
    if (page == "about") {
        $("#yellowback").css("z-index", "-2");
        $(".abouts").animate({
            marginLeft: "-=100vw",
        }, 400)
        $(".abouts").fadeOut(0);
    }
}

var doHashCheck = function() {
    var hash = location.hash;

    if (hash == "#projects") {
        $("#center").hide();
        loadprojects();
    }
    if (hash == "#more") {
        $("#center").hide();
        loadMores();
    }
    if (hash == "#blog") {
        $("#center").hide();
        loadBlogs();
    }
    if (hash == "#about") {
        $("#center").hide();
        loadAbout();
    }
    if (hash == "#arduinoblogs") {
        $("#center").hide();
        loadBlogs();
        getblog("arduino");
    }
    if (hash == "#physicsblogs") {
        $("#center").hide();
        loadBlogs();
        getblog("physics");
    }
    if (hash == "#3dblogs") {
        $("#center").hide();
        loadBlogs();
        getblog("3d");
    }
    if (hash == "#allblogs") {
        $("#center").hide();
        loadBlogs();

    }
}

var loadprojects = function() {
    $("#greenback").css("marginLeft", "100vw");
    $("#redback").css("z-index", "-3");
    $("#purpleback").css("z-index", "-3");
    $("#yellowback").css("z-index", "-3");
    $("#greenback").css("z-index", "-1");
    $("footer").hide();
    if (page == "home") {
        sethome();
    } else {
        $(".projects").css("display", "none");
        $(".project").css("display", "none");
        $(".projects").css("marginLeft", "20vw");
    }
    setPage();
    $("#greenback").animate({
        marginLeft: "-=100vw",
    }, 500);
    //$("#redback").delay(1000).css("marginLeft", "100vw");
    showprojects();
    $("footer").delay(2350).fadeIn();
    page = "projects";
}
var loadMores = function() {
    $("#redback").css("marginLeft", "100vw");
    $("#redback").css("z-index", "-1");
    $("#purpleback").css("z-index", "-3");
    $("#greenback").css("z-index", "-3");
    $("#yellowback").css("z-index", "-3");
    $("footer").hide();
    if (page == "home") {
        sethome();
    } else {
        $(".mores").css("display", "none");
        $(".more").css("display", "none");
        $(".mores").css("marginLeft", "20vw");
    }
    setPage();
    $("#redback").animate({
        marginLeft: "-=100vw",
    }, 500);
    //$("#greenback").delay(1000).css("marginLeft", "100vw");
    showmore();
    $("footer").delay(1000).fadeIn();
    page = "more";
}
var loadBlogs = function() {

    $("#purpleback").css("marginLeft", "100vw");
    $("#purpleback").css("z-index", "-1");
    $("#redback").css("z-index", "-3");
    $("#greenback").css("z-index", "-3");
    $("#yellowback").css("z-index", "-3");
    $("footer").hide();
    if (page == "home") {
        sethome();
    } else {
        $(".blogs").css("display", "none");
        $(".blog").css("display", "none");
        $(".blogs").css("marginLeft", "20vw");
    }
    setPage();
    $("#purpleback").animate({
        marginLeft: "-=100vw",
    }, 500);
    //$("#greenback").delay(1000).css("marginLeft", "100vw");
    showblog();
    $("footer").delay(1250).fadeIn();
    page = "blogs";
}

var loadAbout = function() {

    $("#yellowback").css("marginLeft", "100vw");
    $("#purpleback").css("z-index", "-3");
    $("#redback").css("z-index", "-3");
    $("#greenback").css("z-index", "-3");
    $("#yellowback").css("z-index", "-1");
    $("footer").hide();
    if (page == "home") {
        sethome();
    } else {
        $(".abouts").css("display", "none");
        $(".about").css("display", "none");
        $(".abouts").css("marginLeft", "20vw");
    }
    setPage();
    $("#yellowback").animate({
        marginLeft: "-=100vw",
    }, 500);
    //$("#greenback").delay(1000).css("marginLeft", "100vw");
    showabout();
    $("footer").delay(1250).fadeIn();
    page = "about";
}

var getblog = function(type) {
    if (type == "all") {
        $(".blog").each(function() {
            $(this).slideDown();

        });
        return true;
    }
    $(".blog").each(function() {

        if ($(this).attr("data-topic") !== type) {
            $(this).slideUp();
        } else {

            if ($(this).css("display") == "none") {
                $(this).slideDown();
            }
        }
    });
}
var isMobile = false; //initiate as false
// device detection

$(function() {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

    if (isMobile) {
        $(".projects").css({
            marginLeft: 0,
            marginRight: 0,
            padding: "2.5vw",
        });
        $(".title").css({
            width: "95vw"
        });

        $(".project").css({
            width: "90vw",
            marginLeft: 0,
        });
    }

    $("#img").hide();
    $(".fadeinb").hide();
    $(".projects").hide();
    $(".project").hide();
    $(".mores").hide();
    $(".more").hide();
    $(".abouts").hide();
    $(".about").hide();
    $("footer").hide();
    $(".fadeinb").fadeIn(1000);
    window.setTimeout(doHashCheck, 10)

/**    $(".homeli").hover(function() {
        $(this).css("text-decoration", "underline")
    }, function() {
        $(this).css("text-decoration", "inherit")
    });
    **/
    $("#projects").click(function(event) {
        event.preventDefault();
        window.location.hash = $(this).attr("id");
        if (page != "projects") {
            loadprojects();
        }
    });
    $("#more").click(function(event) {
        event.preventDefault();
        window.location.hash = $(this).attr("id");
        if (page != "more") {
            loadMores();
        }
    });
    $("#blog").click(function(event) {
        event.preventDefault();
        window.location.hash = $(this).attr("id");
        if (page != "blogs") {

            loadBlogs();

        }
    });
    $("#about").click(function(event) {
        event.preventDefault();
        window.location.hash = $(this).attr("id");
        if (page != "loadAbout") {
            loadAbout();
        }
    });
    $(".bloglink").click(function(event) {
        event.preventDefault();
        window.location.hash = $(this).attr("href");
        getblog($(this).attr("data-seltype"));
    });
});
