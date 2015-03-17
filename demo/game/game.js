/**
 * Created by fyh on 15/3/17.
 */
$(function () {
    var i = 0;
    document.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);

    $("#reset").click(function () {
        i = 0;
        $("#count").text(i);
        $("#block").css({left: '0%'});
        $("#sum").text('')
        $("#stage").on('swipeUp', swipeHandler)
    })

    $("#stage").on('swipeUp', swipeHandler)
    function swipeHandler() {
        $("#red").animate({
            top: '-100px'
        }, {
            duration: 120,
            easing: 'ease-in',
            complete: function () {
                if (i == 0) {
                    $("#block").animate({left: '100%'}, {
                        duration: 10000, easing: 'linear', complete: function () {
                            $("#stage").off();
                            $("#sum").text('手速：' + i / 10.0 + '次/s')
                        }
                    })
                }
                $("#red").css('top', '50%')
                $("#count").text(++i)
            }
        })
    }
})