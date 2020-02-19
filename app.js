const slide = document.querySelector("img");
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");

const images = [
  [
    "https://image.freepik.com/free-vector/abstract-background_52683-3700.jpg",
    "Waves Freeform"
  ],
  [
    "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "boy sitting looking at the night sky"
  ],
  [
    "https://cdn2.hercampus.com/hero-images/2019/10/09/18519%202.jpg",
    "girl looking up at the night sky with the outline of birds in the background"
  ],
  [
    "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
    "butterfly"
  ],
  [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCY226163yr291rPEAKy-8WINLovlFGWnu-TyJxRz7LqJLtZyH",
    "picture of fairytale prince and princess"
  ],
  [
    "https://www.geek.com/wp-content/uploads/2019/12/baby-yoda-625x351.jpg",
    "Baby yoda drinking tea"
  ]
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

  slide.src = images[imageIndex][0];
  slide.alt = images[imageIndex][1];
}
