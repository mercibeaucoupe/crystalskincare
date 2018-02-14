import 'app/component/servicePage/serviceTechnology/rfzet/rfzet.style'
import templateUrl from 'app/component/servicePage/serviceTechnology/rfzet/rfzet.template'

export const controller = class RfzetController {
  constructor($log, $scope) {
  	'ngInject'
    
    this.scope = $scope
  }
}

export const cryRfzet = {
   controller,
   templateUrl,
   controllerAs: 'rfzet'
}