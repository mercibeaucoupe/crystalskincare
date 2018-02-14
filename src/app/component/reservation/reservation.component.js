import 'app/component/reservation/reservation.style'
import templateUrl from 'app/component/reservation/reservation.template'

const controller = class ReservationController {
  constructor($log, $state, $location) {
    'ngInject'
    this.logger = $log
    this.state = $state
    this.location = $location
    this.logger.log('Reservation Page is a go')
  }
}

export const cryReservation = {
  controller,
  templateUrl,
  controllerAs: 'reservation'
}