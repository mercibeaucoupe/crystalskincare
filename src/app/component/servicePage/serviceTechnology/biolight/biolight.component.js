import 'app/component/servicePage/serviceTechnology/biolight/biolight.style'
import templateUrl from 'app/component/servicePage/serviceTechnology/biolight/biolight.template'

export const controller = class BiolightController {
  constructor($log) {
  	'ngInject'

  	this.displayRed()

  }

  displayBlue() {
  	this.isBlue = true;
  	this.isYellow = false;
  	this.isRed = false;
  }

  displayYellow() {
  	this.isYellow = true;
  	this.isBlue = false;
  	this.isRed = false;
  }

  displayRed() {
    this.isRed = true;
    this.isBlue = false;
    this.isYellow = false;
  }
}

export const cryBiolight = {
  controller,
  templateUrl,
  controllerAs: 'biolight'
}