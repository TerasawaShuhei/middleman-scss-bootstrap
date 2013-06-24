// SVGをカーソルポインターに IE9用
function pointer(){
    var object = document.getElementById('object');
    if (object.contentDocument)
    var svgdoc = object.getSVGDocument();
    var svgelm = svgdoc.documentElement.style.cursor='pointer';
}

// GoogleAnalytics
var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));

// カルーセル
$(function(){
  $('.carousel').carousel({
  interval: 3000});
});
