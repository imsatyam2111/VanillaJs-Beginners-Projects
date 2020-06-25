// Create an array of images
let imgArr = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img4.jpg" ]
let i = 0;

// Get previous and next button
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

// Fire click event
prev.addEventListener("click",prevImg)
next.addEventListener("click",nextImg)

// Function -> Show previous exam
function prevImg() {
  var img = document.querySelector("#img");
  i--;
  if ( i < 0 ) {
    i = imgArr.length - 1;
  }
  img.src = imgArr[i];
}
// function -> Show next image
function nextImg() {
  var img = document.querySelector("#img");
  i++;
  if( i >= imgArr.length ) {
    i = 0;
  }
  img.src = imgArr[i]
}
// call function 'nextImg' on an interval of 5 seconds
setInterval(nextImg,5000);
