function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


function submitForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let tel = document.getElementById("tel").value;
  let TsC = document.getElementById("TsC").checked;

  if (name === "" || email === "" || tel === "" || !TsC) {
  } else {
    alert("Veti fi contactat(a) in cel mai scurt timp");
  }
}


