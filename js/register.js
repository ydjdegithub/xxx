$(function() {
    var arr = ['../img/1.png', '../img/2.png', '../img/3.png', '../img/4.png', '../img/5.png'];

    var arr2 = ['7dcs', 'nxs5', '9rb7', 't2n9', '24uwd'];
    var ran = 0;
    $('.i-yzm').on('click', function() {
        ran = Math.round(Math.random() * arr.length);
        $(this).attr("src", arr[ran]);
    })

    $('.checkinput .icom').on('blur', function() {
        if ($(this).val() != arr2[ran]) {
            $('.tf').css("background-image", "url('../img/f.jpg ')");

        } else if ($(this).val() == arr2[ran]) {
            $('.tf').css("background-image", "url('../img/t.jpg ')");

        }
    })
})