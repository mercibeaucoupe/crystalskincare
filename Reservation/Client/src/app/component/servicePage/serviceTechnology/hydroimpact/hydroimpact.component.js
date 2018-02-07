import 'app/component/servicePage/serviceTechnology/hydroimpact/hydroimpact.style'
import templateUrl from 'app/component/servicePage/serviceTechnology/hydroimpact/hydroimpact.template'

export const controller = class HydroimpactController {
  constructor($log, $scope) {
  	'ngInject'
    
    this.scope = $scope
  }
}

export const cryHydroimpact = {
   controller,
   templateUrl,
   controllerAs: 'hydroimpact'
}