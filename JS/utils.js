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
