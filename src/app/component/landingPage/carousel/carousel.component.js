import 'app/component/landingPage/carousel/carousel.style'
import templateUrl from 'app/component/landingPage/carousel/carousel.template'

const controller = class CarouselController {
  constructor($log, $scope, $interval) {
    'ngInject'
    this.logger = $log
    this.scope = $scope

    this.isRight;
    this.isLeft;

    this.acneClick = false;
    this.chemClick = false;
    this.laserClick = false;
    this.liftClick = false;
    this.lightClick = false;
    this.wrinkleClick = false;

    this.translate = 0;

    this.interval = $interval
    this.interval(() =>
      this.updateCarousel(), 20)
  }

  updateCarousel() {
    if (this.isRight && this.translate > -49) {
      this.translate = this.translate - .1;
      this.logger.log(this.translate)
      this.scope.slideshow = {
        'transform' : 'translateX('+ this.translate +'%)'
      }
    }
    if (this.isLeft && this.translate < 0) {
      this.translate = this.translate + .1;
      this.logger.log(this.translate)
      this.scope.slideshow = {
        'transform' : 'translateX('+ this.translate +'%)'
      }
    }
  }

  rightStart() {
    this.isRight = true
  }

  leftStart() {
    this.isLeft = true
  }

  rightEnd() {
    this.isRight = false
  }

  leftEnd() {
    this.isLeft = false
  }

  acneFlip() {
    this.acneClick = !this.acneClick
  }

  chemFlip() {
    this.chemClick = !this.chemClick
  }

  laserFlip() {
    this.laserClick = !this.laserClick
  }

  liftFlip() {
    this.liftClick = !this.liftClick
  }

  lightFlip() {
    this.lightClick = !this.lightClick
  }
  wrinkleFlip() {
    this.wrinkleClick = !this.wrinkleClick
  }
}

export const cryCarousel = {
  controller,
  templateUrl,
  controllerAs: 'carousel'
}
