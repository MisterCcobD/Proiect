function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


function scrollToForm() {
  const form = document.getElementById("form");
  if (form) {
    window.scrollTo({
      top: form.offsetTop,
      behavior: "smooth"
    });
  }
}
function showSpan() {
  window.open("T&C.html", "newWindow", "width=400,height=400");
}

