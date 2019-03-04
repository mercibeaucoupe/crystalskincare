import 'app/component/reservation/reservation.style'
import templateUrl from 'app/component/reservation/reservation.template'
import calendar from 'app/component/reservation/calendar/calendar.template'

const controller = class ReservationController {
  constructor($log, $state, $location, dateService, $scope) {
    'ngInject'
    this.logger = $log
    this.state = $state
    this.location = $location
    this.dateService = dateService
    this.scope = $scope


    this.logger.log('Reservation Page is a go')

    this.today = this.todayDate()
    this.day = this.dateService.getMonth((new Date()).getMonth, (new Date()).getFullYear)
  }

  getFormatDay() {
    let date
    if (this.day == null) {
      date = new Date()
    } else {
      let dates = this.day.month.month_string + ' ' + this.day.date + ', ' + this.day.year
      date = new Date(dates)
    }
    return date
  }

  getDate(date) {
    return date.toString().length === 1 ? '0' + date : date
  }

  getDayOfWeek(date) {
    switch(date) {
      case 0: return 'Sun'; break
      case 1: return 'Mon'; break
      case 2: return 'Tues'; break
      case 3: return 'Weds'; break
      case 4: return 'Thurs'; break
      case 5: return 'Fri'; break
      case 6: return 'Sat'; break
    }
  }

  getMonth(date) {
    switch(date) {
      case 0: return 'Jan'; break
      case 1: return 'Feb'; break
      case 2: return 'Mar'; break
      case 3: return 'Apr'; break
      case 4: return 'May'; break
      case 5: return 'Jun'; break
      case 6: return 'Jul'; break
      case 7: return 'Aug'; break
      case 8: return 'Sep'; break
      case 9: return 'Oct'; break
      case 10: return 'Nov'; break
      case 11: return 'Dec'; break
    }
  }


  todayDate() {
    let date = new Date();
    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
  }






}

export const cryReservation = {
  controller,
  templateUrl,
  controllerAs: 'reservation',
}
