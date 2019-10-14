
var width = 100,
    perfData = window.performance.timing,
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = 100 * parseInt(EstimatedTime / 1e3 % 60);
$(".loadbar").animate({
    width: width + "%"
}, time), $(".glow").animate({
    width: width + "%"
}, time);
var PercentageID = $("#precent"),
    start = 0,
    end = 100,
    durataion = time;

function animateValue(a, t, e, i) {
    var n = e - t,
        r = t,
        o = e > t ? 1 : -1,
        d = Math.abs(Math.floor(durataion / n)),
        m = $(a),
        l = setInterval(function() {
            r += o, $(m).text(r + "%"), r == e && clearInterval(l)
        }, d)
}

function removeLoader() {
    $(".preloader-wrap").fadeOut(500)
}
animateValue(PercentageID, start, end, durataion), $(window).on("load", function() {
    setTimeout(removeLoader, time)
});
