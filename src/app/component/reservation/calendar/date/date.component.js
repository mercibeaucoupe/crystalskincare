import 'app/component/reservation/calendar/date/date.style'
import templateUrl from 'app/component/reservation/calendar/date/date.template'

const controller = class DateController {
  constructor($log, $scope, reservationService) {
  	'ngInject'
  	this.reservationList = []
    this.logger = $log
    this.scope = $scope
    this.reservationService = reservationService
  }

  getAvailableReservation() {
  	this.reservationList = this.reservationService.getTestTime();
  }

  passedTime(time, date, month, year) {
  	let timeArr = time.startingTime.split(':')
  	let hour = timeArr[0]
  	let min = timeArr[1]
  	let compareDate = new Date(year, month.month_numeral, date, hour)
  	let currentDate = new Date()
  	return (currentDate < compareDate)
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