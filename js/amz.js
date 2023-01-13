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
const imgs = ["img1.jpg", "img2.jpg", "img3.jpg"];
const img = document.getElementById("img");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

leftArrow.addEventListener("click", function () {
    currentImg = (currentImg - 1 + imgs.length) % imgs.length;
    img.src = imgs[currentImg];
});

rightArrow.addEventListener("click", function () {
    currentImg = (currentImg + 1) % imgs.length;
    img.src = imgs[currentImg];
});