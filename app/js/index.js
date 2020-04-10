class AnimatedTransitions {
  pageOn;
  pageOff = document.querySelector('section.current-section');
  // sectionDefaultStyles = "visibility: hidden;\n" +
  //   "      z-index: 90;\n" +
  //   "      opacity: 0;\n" +
  //   "      overflow: hidden;\n" +
  //   "      height: 0;\n" +
  //   "      position: absolute;\n" +
  //   "      transform-origin: 0 0;\n" +
  //   "      transform: rotate3d(0,0,0,0deg) translate3d(0,0,0) scale3d(1,1,1);";
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
    console.log(e.toElement.parentElement);
    let q = new AnimatedTransitions(pageOn);
    if (q.pageOff === pageOn) {
      console.log('same')
      return
    } else {
      q.resetNavActiveClass(navigationSectionLi);
      e.toElement.parentElement.classList.add('active');
      nav.classList.remove('active');
      q.showCurrentSection();
    }
  }
});

