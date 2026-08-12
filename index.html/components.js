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
const cycleSection = document.querySelector(".cycle-section");

window.addEventListener("scroll", () => {
    if (!cycleSection) return;

    const rect = cycleSection.getBoundingClientRect();
    const move = (window.innerHeight - rect.top) * 0.03;

    cycleSection.style.setProperty(
        "--scroll-move",
        `${Math.max(-15, Math.min(15, move))}px`
    );
});
   
