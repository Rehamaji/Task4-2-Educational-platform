    window.onscroll = function () {
        myFunction();
        myFunction1();

    };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    var end = navbar.offsetHeight;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.remove("nav-absolute")

            navbar.classList.add("sticky")
        } else {
            navbar.classList.add("nav-absolute")

            navbar.classList.remove("sticky");
        }
    }
    var hero = document.getElementById("hero");

    var bgnav = hero.offsetHeight/10;
    function myFunction1() {
        console.log('top', hero.offsetTop)
        console.log(hero.offsetHeight/10)
        console.log('windo', window.pageYOffset)
        if (window.pageYOffset >= bgnav) {
            // navbar.classList.remove("nav-absolute")
            //
            navbar.classList.add("bg-color-blue")
            navbar.classList.remove("bg-trans")
            console.log('test')
        } else {
            // navbar.classList.add("nav-absolute")
            //
            navbar.classList.remove("bg-color-blue");
            navbar.classList.add("bg-trans")

        }
        // if (window.pageYOffset >= bgnav) {
        //     navbar.classList.add("bg-color-blue")}
        // console.log('done');
        // }
    }