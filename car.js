
$(document).ready(function () {
    function shakeCar() {
        $('.car').css('transform', 'translateX(-50%) translateY(-20px)');
        setTimeout(function () {
            $('.car').css('transform', 'translateX(-50%) translateY(0)');
        }, 300);
    }


    function moveCar() {
        $('.car').animate({ left: '300%' }, 10000, 'linear', function () {
            $(this).css('left', '-300%');
        });
    }



    setInterval(moveCar, 13000);

    // 초기화할 때 한 번 호출
    moveCar();
});
