var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("img_exemplos");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 1500); // Change image every 2 seconds
}

carousel()

const zap = document.querySelector(".wps_js_msg")
zap.addEventListener("click", function(e) {
    e.preventDefault()
    let msg = "Olá! Tenho interesse e queria mais informações. por favor."
    let link = "https://wa.me/558897043513/?text=" + encodeURIComponent(msg);
    window.open(link);
})