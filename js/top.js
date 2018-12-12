$(document).ready(function() {
    $('.slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
         fade: true,
         arrows: false,
    });
});

$(window).load(function() {
    // loadModal()
    checkcookie()
    // setCookie();
    //
});

function loadModal() {
    $("#modal").modal();
    $('.modal_content').addClass('active');
    $('.modal_content li').addClass('show');
    $('.txt_modal p').addClass('show');

    $("#close_modal").click(function(event) {
        $('.modal_content').removeClass('active');
        $('.modal_content li').removeClass('show');
        $('.txt_modal p').removeClass('show');
    });
}

function setCookie(cvalue, exdays) {
    var d = new Date();
    // cvalue = 1;
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "time=" + cvalue + ";" + expires + ";   path=/";
    // alert(document.cookie);
    // var modal = document.cookie;
    // if (modal = 1)
    // {
    //     alert("modal" + modal);
    // }
    // else{
    //     // alert("none");
    //     loadModal()
    // }
}

function checkcookie() {
    var check = document.cookie;
    if (check != "") {
        // alert("modal" + check);

    } else {
        setCookie("1", 1);
        loadModal();
        // alert("null");
    }
}
