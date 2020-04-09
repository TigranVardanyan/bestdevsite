class AnimatedTransitions {
  pageOn;
  pageOff;
  constructor(pageOn, pageOff) {
    this.pageOn = pageOn;
    this.pageOff = pageOff;
  }
  getAnimationTypeNumber() {
    return Math.floor(Math.random()*7);
  }
  animationType = {}
}

