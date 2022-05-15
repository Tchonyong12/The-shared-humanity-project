    var typed = new Typed(".auto-type", {
        strings: ["THE SHARED HUMANITY PROJECT", "Change the world"],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true

    })

    var typed = new Typed(".auto-type2", {
        strings: ["It Academy"],
        typeSpeed: 150,
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

