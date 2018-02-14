import 'app/app.styles'
import templateUrl from 'app/app.template'

const controller = class CrystalAppController {
  constructor($log) {
    'ngInject'
    $log.debug('Crystal-app is a go')
  }
}

export const cryApp = {
  controller,
  templateUrl,
  controllerAs: 'app'
}