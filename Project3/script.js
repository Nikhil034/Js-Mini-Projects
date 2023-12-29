const maindiv = document.querySelector("#main");
const crsr = document.querySelector(".cursor");

maindiv.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
});