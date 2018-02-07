import 'app/component/servicePage/serviceTechnology/cryozet/cryozet.style'
import templateUrl from 'app/component/servicePage/serviceTechnology/cryozet/cryozet.template'

export const controller = class CryozetController {
  constructor($log, $scope) {
  	'ngInject'
    
    this.scope = $scope
  	this.showProducts()
  }

  showProcedure() {
    this.isProcedure = true;
    this.isBenefit = false;
    this.isProducts = false;
  }

  showProducts() {
  	this.isProducts = true;
  	this.isProcedure = false;
  	this.isBenefit = false;
  }
}

export const cryCryozet = {
   controller,
   templateUrl,
   controllerAs: 'cryozet'
}