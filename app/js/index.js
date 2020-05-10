class AnimatedTransitions {
  pageOn;
  pageOff = document.querySelector('section.current-section');
  animation;
  constructor(pageOn) {
    this.pageOn = pageOn;
    this.animation =   Math.round(Math.random() * 3 + 1);
  }
  // getAnimationTypeNumber() {
  //   return Math.floor(Math.random()*7);
  // }
  showCurrentSection() {
    let sections = document.querySelectorAll('section.section');
    for(let i = 0; i < sections.length; i++) {
      sections[i].classList.add("disable-click")
    }
    this.pageOff.classList.add('animateOff' + this.animation);
    this.pageOn.classList.add("animateOn" + this.animation);
    //
    setTimeout(()=>{
      this.pageOff.classList.remove('current-section');
      this.pageOff.classList.remove('animateOff' + this.animation);
      this.pageOn.classList.remove("animateOn" + this.animation);
      this.pageOn.classList.add("current-section");
      for(let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("disable-click")
      }
    }, 650)
  }
}
function resetNavActiveClass(elements) {
  for(let i = 0; i < elements.length; i++) {
    elements[i].classList.remove('active')
  }
}

let navigationSection = document.querySelector('nav ul');
let navigationSectionLi = document.querySelectorAll('nav ul li');
navigationSection.addEventListener('click', (e)=> {
  if(e.target.hasAttribute('data-section')) {
    let pageOn = document.getElementById(e.target.getAttribute('data-section'));
    sessionStorage.setItem('section', e.target.dataset.section);
    console.log(e.target.dataset.section);
    let q = new AnimatedTransitions(pageOn);
    for(let k = 0; k < navigationSectionLi.length; k++) {
      navigationSectionLi[k].style.pointerEvents = "none";
    }
    setTimeout(function() {
      for(let k = 0; k < navigationSectionLi.length; k++) {
        navigationSectionLi[k].style.pointerEvents = "auto";
      }
    }, 700);
    if (q.pageOff === pageOn) {
      // console.log('same')
      return
    } else {
      resetNavActiveClass(navigationSectionLi);
      e.target.parentElement.classList.add('active');
      nav.classList.remove('active');
      q.showCurrentSection();
    }
  }
});


resetNavActiveClass(navigationSectionLi);
if (sessionStorage.getItem('section')) {
  document.getElementById(sessionStorage.getItem('section')).classList.add('current-section');
} else {
  sessionStorage.setItem('section', 'home');
  document.getElementById(sessionStorage.getItem('section')).classList.add('current-section');
}
document.querySelector(`[data-section = ${sessionStorage.getItem('section')}`).parentElement.classList.add('active');