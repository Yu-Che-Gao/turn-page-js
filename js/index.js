yepnope({
    test: Modernizr.csstransforms,
    yep: ['lib/turn.js'],
    nope: ['lib/turn.html4.min.js'],
    both: ['css/basic.css'],
    complete: loadApp
});

document.getElementById('turnPage').addEventListener('click', function () {
    $(".flipbook").turn('next');
});

function loadApp() {
    $('.flipbook').turn({
        width: 922,
        height: 600,
        elevation: 50,
        gradients: true,
        autoCenter: true
    });
}