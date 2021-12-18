var SideBar = document.getElementById("SideBar_Nav");
var mainContent = document.getElementById("main_content");
var width = window.screen.availWidth;


function openSideBar() {
    if (parseInt(window.innerWidth) > 800) {
        SideBar.style.width = "330px";
        mainContent.style.marginLeft = "330px";
    }
    else if (parseInt(window.innerWidth) > 600) {
        SideBar.style.width = "330px";
        mainContent.style.marginLeft = "0";
    }
    else {
        SideBar.style.width = window.innerWidth + "px";
        mainContent.style.marginLeft = "0px";
    }
}

function closeSideBar() {
    SideBar.style.width = "0";
    mainContent.style.marginLeft = "0";
}

window.onresize = function () {
    if (document.getElementById("SideBar_Nav").style.width != "0px") {
        openSideBar();
    }
}

function alertItemOrder(first_text = "Thanks for visiting", second_text=", feel free to contact") {
    var alertFirstText = document.getElementById("alert_first_text");
    var alertSecondText = document.getElementById("alert_second_text");
    var alertInfo = document.getElementById("alert_info");
    // var alertStrong = document.getElementById("alert_strong_text");

    // alertText.style.display = "block";
    alertInfo.style.display = "block";
    alertFirstText.textContent = first_text;
    alertSecondText.textContent = second_text;

    alertInfo.children[1].onclick = function () {
        alertInfo.style.opacity = "0";
        setTimeout(function () {alertInfo.style.display = "none"}, 600);
    };
}

window.onload = function () {
    setTimeout(alertItemOrder, 4000);
}