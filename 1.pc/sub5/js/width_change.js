var origin = 350;
var min_width = 350;
var max_width = 500;

$('.contlist li').hover(function () {
    $('.contlist li').animate({ width: min_width }, 300).clearQueue();
    $(this).animate({ width: max_width }, 300).clearQueue();
    $(this).find('dt').css({ 'margin-top': '345px', 'color': '#fff', 'font-size': '1.25rem', 'background': 'var(--font-color-point1', 'padding': '13px 0', 'font-weight': '500' });
    $(this).find('dd').css({ 'opacity': '1', 'transition': 'all .3s', 'transition-delay': '.3s' });
    // $(this).find('dl').css('background','rgba(0,0,0,.3)');
    $(this).find('dl').css('background', 'none');
},
    function () {
        $('.contlist li').animate({ width: origin }, 300).clearQueue();
        $(this).find('dt').css({ 'margin-top': '165px', 'color': '#fff', 'font-size': '1.1rem', 'padding': '0', 'background': 'none', 'font-weight': '400' });
        $(this).find('dd').css({ 'opacity': '0', 'transition': 'none' });
        // $(this).find('dl').css('background','none');
        $(this).find('dl').css('background', 'rgba(0,0,0,.5)');
    });