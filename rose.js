$(document).ready(function () {
    $('.left-rose, .right-rose').on('animationend', function () {
        setTimeout(() => {
            $(this).fadeOut('slow');
        }, 6000);
    });
});