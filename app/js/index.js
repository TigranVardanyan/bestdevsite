class AnimatedTransitions {
  pageOn;
  pageOff = document.querySelector('section.current-section');
  constructor(pageOn) {
    this.pageOn = pageOn;
  }
  getAnimationTypeNumber() {
    return Math.floor(Math.random()*7);
  }
  resetNavActiveClass(elements) {
    for(let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('active')
    }
  }
  showCurrentSection() {
    // let sections = document.querySelectorAll('section.section')
    // for(let i = 0; i < sections.length; i++) {
    //   sections.classList.remove("current-section")
    // }
    this.pageOff.classList.add('animateOff');
    this.pageOn.classList.add("animateOn");
    //
    setTimeout(()=>{
      this.pageOff.classList.remove('current-section');
      this.pageOff.classList.remove('animateOff');
      this.pageOn.classList.remove("animateOn");
      this.pageOn.classList.add("current-section");
    }, 400)
  }
}
let navigationSection = document.querySelector('nav ul');
let navigationSectionLi = document.querySelectorAll('nav ul li');
navigationSection.addEventListener('click', (e)=> {
  if(e.target.hasAttribute('data-section')) {
    let pageOn = document.getElementById(e.target.getAttribute('data-section'));
    sessionStorage.setItem('section', e.target.dataset.section)
    console.log(e.target.dataset.section);
    let q = new AnimatedTransitions(pageOn);
    if (q.pageOff === pageOn) {
      // console.log('same')
      return
    } else {
      q.resetNavActiveClass(navigationSectionLi);
      e.target.parentElement.classList.add('active');
      nav.classList.remove('active');
      q.showCurrentSection();
    }
  }
});

if (sessionStorage.getItem('section')) {
  document.getElementById(sessionStorage.getItem('section')).classList.add('current-section');
} else {
  sessionStorage.setItem('section', 'home');
  document.getElementById(sessionStorage.getItem('section')).classList.add('current-section');
}