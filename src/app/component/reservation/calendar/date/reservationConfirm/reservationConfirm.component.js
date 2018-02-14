import 'app/component/reservation/calendar/date/reservationConfirm/reservationConfirm.style'
import templateUrl from 'app/component/reservation/calendar/date/reservationConfirm/reservationConfirm.template'

const controller = class ReservationConfirmController {
  constructor($log, $state, reservationService) {
  	'ngInject'

  	this.logger = $log
  	this.state = $state
  	this.options = ['Acne Treatment', 'Face Lifting', 'Skin Lightening', 'Chemical Peeling', 'Wrinkle Treatment', 'Laser Treatment']
  	this.year = this.state.params.year
  	this.month = this.state.params.month
  	this.date = this.state.params.date
    this.time = this.state.params.time
    this.dateObject = new Date(this.year, this.month, this.date, this.time.slice(0,1))
  	this.reservationService = reservationService
  }

  getDayOfWeek() {
  	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  	return days[this.dateObject.getDay()]
  }

  getDay() {
  	return this.dateObject.getDate()
  }

  getMonth() {
  	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  	return months[this.dateObject.getMonth()]
  }

  getTime() {
  	return this.time.slice(0,1) + ':00am'
  }

  confirm() {
  	this.reservationService.makeReservation(this.email, this.phone.replace(/[^0-9]/g, ''), this.dateObject, this.selectedTreatment)
  }
}

export const reservationConfirm = {
  controller,
  templateUrl,
  controllerAs: 'reservationConfirm'
}