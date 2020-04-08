//let photoAvatar = document.getElementById("photo-avatar");
/*
ColorChange
 */
let root = document.documentElement; // get root
let colors = document.getElementById('colors'); // html elem all colors wrapper
let toolbarColors = document.querySelectorAll(".page_color-colors div"); // get all colors

function ToolbarUncheck(toolbarColors) {
  for(let i = 0; i < toolbarColors.length; i++) {
    toolbarColors[i].innerHTML = "";   //uncheck
  }
} // toolbar uncheck
function initCChanger() { //init ColorChanger
  ToolbarUncheck(toolbarColors);
  document.querySelector(`[data-color = "${localStorage.getItem('targetColor')}"]`);
  root.style.setProperty('--accent-color', localStorage.getItem('targetColor'));
  if(localStorage.getItem('targetColor')) { // if any color in local storage
    document.querySelector(`[data-color = "${localStorage.getItem('targetColor')}"]`).innerHTML = "<i class=\"fas fa-check\"></i>";
  } else {
    localStorage.setItem('targetColor' , "#2196F3"); //if not set default
    toolbarColors[2].innerHTML = "<i class=\"fas fa-check\"></i>";
  }


}
initCChanger();


colors.addEventListener('click', (e) => { // if click get color from data-color attr
  let color = e.target.getAttribute("data-color"); //if it is not null
  if (color != null) {
    ToolbarUncheck(toolbarColors);
    localStorage.setItem('targetColor', color);
    root.style.setProperty('--accent-color', color);
    document.querySelector(`[data-color = "${localStorage.getItem('targetColor')}"]`).innerHTML = "<i class=\"fas fa-check\"></i>";
  }
});






let cog = document.getElementById('cogRot');
let toolbarColorsWrapper = document.getElementById('toolbarColors');
cog.addEventListener('click', () => {
  if (toolbarColorsWrapper.classList.contains('show_toolbar')) {
    toolbarColorsWrapper.classList.remove('show_toolbar')
  } else {
    toolbarColorsWrapper.classList.add('show_toolbar');
  }
});










/*
nav toggle
 */

let navToggle = document.getElementById('nav-toggle');
let nav = document.querySelector('nav');
navToggle.addEventListener('click', () => {
  if (nav.classList.contains('active')) {
    nav.classList.remove('active')
  } else {
    nav.classList.add('active')
  }

});