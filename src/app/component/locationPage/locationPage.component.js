import 'app/component/locationPage/locationPage.style'
import templateUrl from 'app/component/locationPage/locationPage.template'

const controller = class CryLocationPageController {
  constructor($log, $scope) {
  	'ngInject'
  	this.logger = $log
  	this.scope = $scope
    
    this.currentSlide = 0
    this.scope.slide_one = 'activeSlide'
    this.scope.slide_two = 'inactiveSlide'
    this.scope.slide_three = 'inactiveSlide'
    this.scope.slide_four = 'inactiveSlide'
    this.scope.dotpress_one = 'activeDot'
    this.scope.dotpress_two = 'inactiveDot'
    this.scope.dotpress_three = 'inactiveDot'
    this.scope.dotpress_four = 'inactiveDot'
  	this.slideArray = ['activeSlide', 'inactiveSlide', 'inactiveSlide', 'inactiveSlide']
  	this.dotArray = ['activeDot', 'inactiveDot', 'inactiveDot', 'inactiveDot']
  	this.scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB4Z-TX8hp2-gxv8iCEaIPiRn5GQxZDBi0&callback=myMap"
  }

  nextSlide() {
    this.currentSlide++
    if (this.currentSlide > this.slideArray.length - 1) {
      this.currentSlide = 0
    }
    for (let i = 0; i < this.slideArray.length; i++) {
      if (i == this.currentSlide) {
      	this.slideArray[i] = 'activeSlide'
      	this.dotArray[i] = 'activeDot'
      } else {
      	this.slideArray[i] = 'inactiveSlide'
      	this.dotArray[i] = 'inactiveDot'
      }
    }
    this.scope.slide_one = this.slideArray[0]
    this.scope.slide_two = this.slideArray[1]
    this.scope.slide_three = this.slideArray[2]
    this.scope.slide_four = this.slideArray[3]
    this.scope.dotpress_one = this.dotArray[0]
    this.scope.dotpress_two = this.dotArray[1]
    this.scope.dotpress_three = this.dotArray[2]
    this.scope.dotpress_four = this.dotArray[3]
  }
  
  prevSlide() {
    this.currentSlide--
    if (this.currentSlide < 0) {
      this.currentSlide = 3
    }
    for (let i = 0; i < this.slideArray.length; i++) {
      if (i == this.currentSlide) {
        this.slideArray[i] = 'activeSlide'
        this.dotArray[i] = 'activeDot'
      } else {
        this.slideArray[i] = 'inactiveSlide'
        this.dotArray[i] = 'inactiveDot'
      }
    }
    this.scope.slide_one = this.slideArray[0]
    this.scope.slide_two = this.slideArray[1]
    this.scope.slide_three = this.slideArray[2]
    this.scope.slide_four = this.slideArray[3]
    this.scope.dotpress_one = this.dotArray[0]
    this.scope.dotpress_two = this.dotArray[1]
    this.scope.dotpress_three = this.dotArray[2]
    this.scope.dotpress_four = this.dotArray[3]
   }

  slidePick(n) {
  	this.currentSlide = n
  	for (let i = 0; i < this.slideArray.length; i++) {
  	  if (i == n) {
  	  	this.slideArray[i] = 'activeSlide'
  	  	this.dotArray[i] = 'activeDot'
  	  } else {
  	  	this.slideArray[i] = 'inactiveSlide'
  	  	this.dotArray[i] = 'inactiveDot'
  	  }
  	}
  	this.scope.slide_one = this.slideArray[0]
  	this.scope.slide_two = this.slideArray[1]
  	this.scope.slide_three = this.slideArray[2]
  	this.scope.slide_four = this.slideArray[3]
  	this.scope.dotpress_one = this.dotArray[0]
  	this.scope.dotpress_two = this.dotArray[1]
  	this.scope.dotpress_three = this.dotArray[2]
  	this.scope.dotpress_four = this.dotArray[3]
  }
}

export const cryLocationPage = {
  controller,
  templateUrl,
  controllerAs: 'location'
}