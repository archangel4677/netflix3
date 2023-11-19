function myResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "browse") {
      x.className += ".responsive";
    } else {
      x.className = ".browse";
    }
  }