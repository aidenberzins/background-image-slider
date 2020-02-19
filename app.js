const slide = document.querySelector("img");
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");

const images = [
  "https://image.freepik.com/free-vector/abstract-background_52683-3700.jpg",
  "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  "https://cdn2.hercampus.com/hero-images/2019/10/09/18519%202.jpg"
];

rightBtn.addEventListener("click", function() {
  changeImage("right");
});
leftBtn.addEventListener("click", function() {
  changeImage("left");
});

let imageIndex = 0;

function changeImage(dir) {
  if (dir === "right") {
    if (imageIndex < images.length - 1) {
      imageIndex++;
    } else {
      imageIndex = 0;
    }
    console.log("right image", imageIndex + 1);
  }
  // /////////////////////////////////////////////////////////////////////////////
  if (dir === "left") {
    if (imageIndex <= 0) {
      imageIndex = images.length - 1;
    } else {
      imageIndex--;
    }
    console.log("left  image", imageIndex + 1);
  }

  slide.src = images[imageIndex];
}
