fetch("components.html")
    .then(response => response.text())
    .then(data => {

        const temp = document.createElement("div");
        temp.innerHTML = data;

        // Lấy MENU
        document.getElementById("menu-content").innerHTML =
            temp.querySelector("#menu-content").innerHTML;

        // Lấy FOOTER
        document.getElementById("footer-content").innerHTML =
            temp.querySelector("#footer-content").innerHTML;

    });