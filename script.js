const header = document.getElementById("header");
let count = 0;
window.addEventListener("scroll", function () {
  count++;
  let fall = this.window.scrollY;
  console.log(fall);
  header.classList.toggle("apa", fall > 0);
  this.document.getElementById("teh").style.color = "#23a00d";
  if (fall === 0) {
    this.document.getElementById("teh").style.color = "#23a00d";
  }
});
