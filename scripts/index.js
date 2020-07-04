/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function indexFunc() {
    document.getElementById("indexFuncBtn").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.indexbtn')) {
    var indexFuncBtn = document.getElementById("indexFuncBtn");
      if (indexFuncBtn.classList.contains('show')) {
        indexFuncBtn.classList.remove('show');
      }
    }
  }
