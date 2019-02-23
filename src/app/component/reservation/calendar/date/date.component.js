import 'app/component/reservation/calendar/date/date.style'
import templateUrl from 'app/component/reservation/calendar/date/date.template'

const controller = class DateController {
  constructor($log, $scope, reservationService, dateService) {
  	'ngInject'
  	this.reservationList = []
    this.logger = $log
    this.scope = $scope
    this.reservationService = reservationService
    this.dateService = dateService

  }


  getAvailableReservation() {
  	this.reservationList = this.reservationService.getTestTime();
  }


}

export const cryDate = {
  controller,
  templateUrl,
  controllerAs: 'date',
  bindings: {
  	days: '='
  }
}
