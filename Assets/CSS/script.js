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

    var bgnav = navbar.offsetTop;
    function myFunction1() {
        if (window.pageYOffset >= bgnav) {
            // navbar.classList.remove("nav-absolute")
            //
            navbar.classList.add("bg-blue2");//"bg-color-blue");
            navbar.classList.remove("bg-trans")
            console.log('test')
        } else {
            // navbar.classList.add("nav-absolute")
            //
            navbar.classList.remove("bg-blue2");//"bg-color-blue");
            navbar.classList.add("bg-trans")

        }
        // if (window.pageYOffset >= bgnav) {
        //     navbar.classList.add("bg-color-blue")}
        // console.log('done');
        // }
    }
        // Close the navbar when a link is clicked
      /*  document.querySelectorAll('.navbar-nav a.nav-link').forEach(function (elem) {
        elem.addEventListener('click', function () {
            var navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });*/
