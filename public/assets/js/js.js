

/*  start modification button */

$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();
        $(this).children(".buttons").fadeOut();
    }else{
    $(this).children(".video").get(0).pause();
        $(this).children(".buttons").fadeIn();
    }

});





/*  End modification button  

        Read More   */


function readMore1() {
var dots1 = document.getElementById("dots1");
var moreText4 = document.getElementById("more1");
var btnText4 = document.getElementById("btn1");

if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText4.innerHTML = "Read more"; 
    moreText4.style.display = "none";
    $('.inside-card-1').css({"background-color":"white","height":"290px","bottom":"-70px","transition":"1s"});


} else {
    dots1.style.display = "none";
    btnText4.innerHTML = "Read less"; 
    moreText4.style.display = "inline";
    $('.inside-card-1').css({"background-color":"rgb(235, 235, 235)","height":"390px","bottom":"-20px","transition":"1s"});

}
}

function readMore2() {
var dots2 = document.getElementById("dots2");
var moreText5 = document.getElementById("more2");
var btnText5 = document.getElementById("btn2");

if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText5.innerHTML = "Read more"; 
    moreText5.style.display = "none";
    $('.inside-card-2').css({"background-color":"white","height":"290px","bottom":"-70px","transition":"1s"});


} else {
    dots2.style.display = "none";
    btnText5.innerHTML = "Read less"; 
    moreText5.style.display = "inline";
    $('.inside-card-2').css({"background-color":"rgb(245, 245, 245)","height":"390px","bottom":"-20px","transition":"1s"});

}
}

function readMore3() {
var dots3 = document.getElementById("dots3");
var moreText6 = document.getElementById("more3");
var btnText6 = document.getElementById("btn3");

if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText6.innerHTML = "Read more"; 
    moreText6.style.display = "none";
    $('.inside-card-3').css({"background-color":"white","height":"290px","bottom":"-70px","transition":"1s"});


} else {
    dots3.style.display = "none";
    btnText6.innerHTML = "Read less"; 
    moreText6.style.display = "inline";
    $('.inside-card-3').css({"background-color":"rgb(235, 235, 235)","height":"390px","bottom":"-20px","transition":"1s"});

}
}


/*  end Read More satrt nav bar */


$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $(".home-sec").height());
    });
});



/*  end nav bar  start  GO to place  */

$(function() {
// Smooth Scrolling
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
        $('html, body').animate({
        scrollTop: target.offset().top
        }, 1800);
        return false;
    }
    }
});
});

/* end GO to place  */


// $('.inputbox').parent().click(function () {
//     if($('.inputbox').css({"background-color":"blue"})){
//         $('.inputbox').css({"background-color":"rgba(240, 54, 76, 0.9)","transition":"1s"});
//     }else{
//         $('.inputbox').css({"background-color":"blue","transition":"1s"});
//     }

// }); 


