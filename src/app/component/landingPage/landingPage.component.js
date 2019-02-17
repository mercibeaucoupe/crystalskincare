import 'app/component/landingPage/landingPage.style'
import templateUrl from 'app/component/landingPage/landingPage.template'

const controller = class LandingPageController {
  construtor($log) {
  	'ngInject'
  	this.logger = $log
  	this.scope = $scope
  }

}

export const cryLandingPage = {
  controller,
  templateUrl,
  controllerAs: 'landingPage'
}
