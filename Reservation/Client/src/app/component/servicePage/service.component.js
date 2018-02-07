import 'app/component/servicePage/service.style'
import templateUrl from 'app/component/servicePage/service.template'

const controller = class ServicePageController {
  constructor($log, $scope) {
  	'ngInject'
  	this.logger = $log
  	this.scope = $scope
  	this.logger.log('Service Page is a go')
  	this.slideArray = ['wrinkle', 'acne', 'laser', 'lighten', 'chemical', 'lift']
  	this.currentSlide = 0;
  }

  displaySlideshow() {
  	if (this.slideArray[this.currentSlide] === 'wrinkle') {
  	  this.expandWrinkle()
  	} else if (this.slideArray[this.currentSlide] === 'acne') {
  	  this.expandAcne()
  	} else if (this.slideArray[this.currentSlide] === 'laser') {
  	  this.expandLaser()
  	} else if (this.slideArray[this.currentSlide] === 'lighten') {
  	  this.expandLighten()
  	} else if (this.slideArray[this.currentSlide] === 'chemical') {
  	  this.expandChemical()
  	} else if (this.slideArray[this.currentSlide] === 'lift') {
  	  this.expandLift()
  	}
  }

  next() {
    this.currentSlide++;
    if (this.currentSlide > 5) {
      this.currentSlide = 0
    }
    this.displaySlideshow()
  }

  prev() {
  	this.currentSlide--;
  	if(this.currentSlide < 0) {
  	  this.currentSlide = 5
  	}
  	this.displaySlideshow()
  }

  expandWrinkle() {
  	this.currentSlide = 0
  	this.scope.wrinkle = 'large_wrinkle'
  	this.scope.acne = 'small_acne'
  	this.scope.laser ='small_laser'
  	this.scope.lighten = 'small_lighten'
  	this.scope.chemical = 'small_chemical'
  	this.scope.lift = 'small_lift'
  }

  expandAcne() {
  	this.currentSlide = 1
  	this.scope.acne = 'large_acne'
  	this.scope.wrinkle = 'small_wrinkle'
  	this.scope.laser = 'small_laser'
  	this.scope.lighten = 'small_lighten'
  	this.scope.chemical = 'small_chemical'
  	this.scope.lift = 'small_lift'
  }

  expandLaser() {
  	this.currentSlide = 2
  	this.scope.laser = 'large_laser'
  	this.scope.acne = 'small_acne'
  	this.scope.wrinkle = 'small_wrinkle'
  	this.scope.lighten = 'small_lighten'
  	this.scope.chemical = 'small_chemical'
  	this.scope.lift = 'small_lift'
  }

  expandLighten() {
  	this.currentSlide = 3
  	this.scope.lighten = 'large_lighten'
  	this.scope.laser = 'small_laser'
  	this.scope.acne = 'small_acne'
  	this.scope.wrinkle = 'small_wrinkle'
  	this.scope.chemical = 'small_chemical'
  	this.scope.lift = 'small_lift'
  }

  expandChemical() {
  	this.currentSlide = 4
  	this.scope.chemical = 'large_chemical'
  	this.scope.laser = 'small_laser'
  	this.scope.acne = 'small_acne'
  	this.scope.wrinkle = 'small_wrinkle'
  	this.scope.lighten = 'small_lighten'
  	this.scope.lift = 'small_lift'
  }

  expandLift() {
  	this.currentSlide = 5
  	this.scope.lift = 'large_lift'
  	this.scope.chemical = 'small_chemical'
  	this.scope.laser = 'small_laser'
  	this.scope.acne = 'small_acne'
  	this.scope.wrinkle = 'small_wrinkle'
  	this.scope.lighten = 'small_lighten'
  }

  isAcneLarge() {
  	return this.scope.acne === 'large_acne'
  }

  isWrinkleLarge() {
  	return this.scope.wrinkle === 'large_wrinkle'
  }

  isLaserLarge() {
  	return this.scope.laser === 'large_laser'
  }

  isLightenLarge() {
  	return this.scope.lighten === 'large_lighten'
  }

  isChemicalLarge() {
  	return this.scope.chemical === 'large_chemical'
  }

  isLiftLarge() {
  	return this.scope.lift === 'large_lift'
  }

}

export const cryServicePage = {
  controller,
  templateUrl,
  controllerAs: 'servicePage'
}