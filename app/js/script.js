//let photoAvatar = document.getElementById("photo-avatar");
let root = document.documentElement;
let colors = document.getElementById('colors');
colors.addEventListener('click', (e) => {
  let color = e.target.getAttribute("data-color");
  localStorage.setItem('targetColor', color);
  root.style.setProperty('--accent-color', color);

});

document.addEventListener("DOMContentLoaded", () => {

});

function initCChanger() {
  let toolbarColors = document.querySelectorAll(".page_color-colors div");
  if(localStorage.getItem('targetColor')) {
  } else {
    localStorage.setItem('targetColor' , "#2196F3");
  }
  ToolbarUncheck(toolbarColors);
  document.querySelector(`[data-color = "${localStorage.getItem('targetColor')}"]`);
  root.style.setProperty('--accent-color', localStorage.getItem('targetColor'));
}

function ToolbarUncheck(toolbarColors) {
  for(var i = 0; i < toolbarColors.length; i++) {
    toolbarColors[i].innerHTML = "";   //uncheck
  }
}
initCChanger();