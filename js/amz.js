const img1 = document.getElementById("img-small-1")
const img2 = document.getElementById("img-small-2")
const img3 = document.getElementById("img-small-3")
const img4 = document.getElementById("img-small-4")
const img5 = document.getElementById("img-small-5")
const img6 = document.getElementById("img-small-6")
const img7 = document.getElementById("img-small-7")

img1.addEventListener("mouseover", function () {
    document.getElementById("big-hover").style.background = "url('/assest/bigimg-balls.jpg') no-repeat center center/contain";

}, false);

img2.addEventListener("mouseover", function () {
    document.getElementById("big-hover").style.background = "url('/assest/ballshoot.jpg') no-repeat center center/contain";

}, false);

img3.addEventListener("mouseover", function () {
    document.getElementById("big-hover").style.background = "url('/assest/ballshoot-side.jpg') no-repeat center center/contain";

}, false);

img4.addEventListener("mouseover", function () {
    document.getElementById("big-hover").style.background = "url('/assest/basketball-hight.jpg') no-repeat center center/contain";

}, false);
img5.addEventListener("mouseover", function () {
    document.getElementById("big-hover").style.background = "url('/assest/basketball-readys.jpg') no-repeat center center/contain";

}, false);
img6.addEventListener("mouseover", function () {
    document.getElementById("big-hover").style.background = "url('/assest/ballshoot-side.jpg') no-repeat center center/contain";

}, false);
img7.addEventListener("mouseover", function () {
    document.getElementById("big-hover").style.background = "url('/assest/basketball-last.jpg') no-repeat center center/contain";

}, false);



let currentImg = 0;
const imgs = ["/assest/firstimgballs.png", "/assest/secondimgballs.png", "/assest/thirdimgballs.png", "/assest/fourthimgballs.png", "/assest/fimgballs.png", "/assest/simg-balls.png", "/assest/seventhimg-balls.png", "/assest/8img-balls.png", "/assest/9img-balls.png", "/assest/10imgballs.png"];
const gridItems = document.getElementsByClassName("grid-item");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

function changeImgs(offset) {
    currentImg = (currentImg + offset + imgs.length) % imgs.length;
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].src = imgs[(currentImg + i) % imgs.length];
    }
}

leftArrow.addEventListener("click", function () {
    changeImgs(-5);
});

rightArrow.addEventListener("click", function () {
    changeImgs(5);
});


