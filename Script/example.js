var isNavOpen = false;
var navBar = document.getElementById("navigationBar");
var navBarButton = document.getElementById("nav_button")


function NavBarOnclick() {
    if (!isNavOpen) {
        navBar.style.display = "block";
        isNavOpen = true;
    } else {
        navBar.style.display = "none";
        isNavOpen = false;
    }
}