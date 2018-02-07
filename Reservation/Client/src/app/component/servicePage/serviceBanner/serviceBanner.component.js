import 'app/component/servicePage/serviceBanner/serviceBanner.style'
import templateUrl from 'app/component/servicePage/serviceBanner/serviceBanner.template'

const controller = class serviceBannerController {
  constructor($log) {
  	'ngInject'

  	this.logger = $log
  	this.logger.log('Service Banner is a go')

  }
}

export const cryServiceBanner = {
  controller,
  templateUrl,
  controllerAs: 'serviceBanner'
}