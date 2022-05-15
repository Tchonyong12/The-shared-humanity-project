var typed = new Typed(".auto-type3", {
    strings: ["It Academy"],
    typeSpeed: 70,
    backSpeed: 100,
    loop: true

})

var menu = document.getElementById('btn-hamburger')
var nav = document.getElementById('nav')
var exit = document.getElementById('close-mobile')

menu.addEventListener('click', function(e){
     nav.classList.toggle('list-menu-nav-desktop');
     e.preventDefault();
});

exit.addEventListener('click', function(e){
nav.classList.add('list-menu-nav-desktop');
e.preventDefault();
});
