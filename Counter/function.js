let count = 0;

const minus = document.querySelector(".btn-minus");
const plus = document.querySelector(".btn-plus");
const counts = document.querySelector(".counts");
const clearCount = document.querySelector(".count-clear");

plus.addEventListener("click", () => {
  count += 1;
  counts.innerHTML = count;
});
minus.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    counts.innerHTML = count;
  }
});

clearCount.addEventListener("click", () => {
  count = 0;
  counts.innerHTML = count;
});
