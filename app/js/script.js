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





/*
Scroll / header fix
 */

//main scripts
let headerRow = document.querySelector('.header-row');
window.onscroll = function() {
  if(document.documentElement.clientWidth > 992) {
    if(window.pageYOffset > 25) {
      headerRow.classList.add('sticked');
      root.style.setProperty('--header-height', '60px');
    } else {
      headerRow.classList.remove('sticked');
      root.style.setProperty('--header-height', "100px");
    }
  } else {
    root.style.setProperty('--header-height', "50px")
  }
};

//
//
// let homeBtn = document.getElementById('homeBtn');
// let home = document.getElementById('home');
// let portfolioBtn = document.getElementById('portfolioBtn');
// let portfolio = document.getElementById('portfolio');
// portfolioBtn.addEventListener('click', ()=> {
//   // portfolio.style.opacity = "1";
//   // portfolio.style.height = "auto";
//   // portfolio.style.transform = "scale(1)";
//   // home.style.opacity = "0";
//   // home.style.height = "0";
//   // home.style.transform = "scale(0)";
//   //home.classList.add('animate');
//   // portfolio.style.display = "none";
// });
//
// // homeBtn.addEventListener('click', ()=> {
// //   // home.style.opacity = "1";
// //   home.style.height = "auto";
// //   home.style.transform = "scale(1)";
// //   // portfolio.style.opacity = "0";
// //   portfolio.style.height = "0";
// //   portfolio.style.transform = "scale(0)";
// // });


let testimonial_next = document.getElementById('testimonial_next');
let testimonial_prev = document.getElementById('testimonial_prev');
let testimonial_position = 0;
let testimonial_width = 98;
root.style.setProperty("--testimonial-position", testimonial_position + "%");
root.style.setProperty("--testimonial-item-width", testimonial_width + "%");
console.log(root.style.getPropertyValue("--testimonial-position"));

testimonial_next.addEventListener('click', ()=> {
  if(testimonial_position > -100) {
    testimonial_position = testimonial_position - 51;
    root.style.setProperty("--testimonial-position",  testimonial_position + "%");
    console.log(root.style.getPropertyValue("--testimonial-position"));
  }
});

testimonial_prev.addEventListener('click', ()=> {
  if(testimonial_position < 0) {
    testimonial_position = testimonial_position + 51;
    root.style.setProperty("--testimonial-position", testimonial_position + "%");
    console.log(root.style.getPropertyValue("--testimonial-position"));
  }
});

