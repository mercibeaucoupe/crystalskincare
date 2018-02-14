import 'app/component/reservation/calendar/date/times/times.style'
import templateUrl from 'app/component/reservation/calendar/date/times/times.template'

const controller = class TimesController {
  constructor($log) {
  	'ngInject'
  	this.logger = $log
  }
}

export const cryTimes = {
  controller,
  templateUrl,
  controllerAs: 'times',
  bindings: {
  	times: '='
  }
}