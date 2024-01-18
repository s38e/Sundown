const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

const featuredList = document.querySelector(".featured_list");
const fixedImg = document.querySelector(".fixed-img");
featuredList.addEventListener("mouseenter", function () {
  fixedImg.style.display = "block";
});
featuredList.addEventListener("mouseleave", function () {
  fixedImg.style.display = "none";
});

const items = document.querySelectorAll(".item");
items.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    const image = e.getAttribute("data-img");
    fixedImg.style.backgroundImage = `url(${image})`;
  });
});
function addHoverBehavior(trigger, video) {
  trigger.addEventListener("mouseenter", function () {
    video.style.display = "block";
  });

  trigger.addEventListener("mouseleave", function () {
    video.style.display = "none";
  });
}

const NYFWPopup = document.querySelector("#NYFWPopup");
const PlayNewKidvision = document.querySelector("#PlayNewKidvision");
const SOHO2023 = document.querySelector("#SOHO2023");

const VIDNYFWPopup = document.querySelector("#VIDNYFWPopup");
const VIDPlayNewKidvision = document.querySelector("#VIDPlayNewKidvision");
const VIDSOHO2023 = document.querySelector("#VIDSOHO2023");

addHoverBehavior(NYFWPopup, VIDNYFWPopup);
addHoverBehavior(PlayNewKidvision, VIDPlayNewKidvision);
addHoverBehavior(SOHO2023, VIDSOHO2023);
