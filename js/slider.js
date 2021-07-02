var $links = $(".itemLinks");

$links.click(function (e) {
    $links.removeClass("active");
    var clickedLink = e.target;
    var clickedLink = $(clickedLink)
    var position = clickedLink.attr("data-pos");
    var translateValu = "translateX("+position * 25 +"%)";
    $("#wrapper").css({
         transform: translateValu
    });

    clickedLink.addClass("active");

});

$($links[0]).addClass("active");
