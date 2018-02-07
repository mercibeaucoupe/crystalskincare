import 'app/component/servicePage/serviceTechnology/serviceTechnology.style'
import templateUrl from 'app/component/servicePage/serviceTechnology/serviceTechnology.template'

export const controller = class serviceTechnologyController {
  constructor($log) {
  	'ngInject'

  	this.logger = $log
  	this.logger.log('Service Technology is a go')
  	this.displayItem2()
  }

  displayItem1() {
  	this.isBiolight = true;
  	this.isCryozet = false;
  	this.isHydro = false;
  	this.isMagic = false;
  	this.isZet = false;
  }

  displayItem2() {
  	this.isCryozet = true;
  	this.isBiolight = false;
  	this.isHydro = false;
  	this.isMagic = false;
  	this.isZet = false;
  }

  displayItem3() {
  	this.isHydro = true;
  	this.isBiolight = false;
  	this.isCryozet = false;
  	this.isMagic = false;
  	this.isZet = false;
  }

  displayItem4() {
  	this.isMagic = true;
  	this.isBiolight = false;
  	this.isCryozet = false;
  	this.isHydro = false;
  	this.isZet = false;
  }

  displayItem5() {
  	this.isZet = true;
  	this.isBiolight = false;
  	this.isCryozet = false;
  	this.isMagic = false;
  	this.isHydro = false;
  }
}

export const cryServiceTechnology = {
  controller,
  templateUrl,
  controllerAs: 'serviceTechnology'
}