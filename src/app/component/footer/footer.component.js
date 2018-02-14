import 'app/component/footer/footer.style'
import templateUrl from 'app/component/footer/footer.template'

export const controller = class FooterController {
  constructor($log) {
  	'ngInject'
  }
}

export const cryFooter = {
  controller,
  templateUrl,
  controllerAs: 'footer'
}