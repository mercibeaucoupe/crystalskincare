import 'app/component/reservation/calendar/calendar.style'
import templateUrl from 'app/component/reservation/calendar/calendar.template'

const controller = class CalendarController {
  constructor($log, $scope, dateService) {
    'ngInject'
    this.logger = $log
    this.scope = $scope
    this.dateService = dateService
    this.month = dateService.date.getMonth()
    this.year = dateService.date.getFullYear()
    this.day = dateService.date.getDay()
    this.date = dateService.date.getDate()

    this.daysOfWeek = this.getDaysOfWeek()
    this.logger.log(this.daysOfWeek)

  }

  getStringMonth() {
    return this.dateService.getMonth(this.month, this.year).month
  }

  getDaysOfWeek() {
    let currentDate = this.date;
    let weekArray = []
    for (let i = 0; i < 7; i++) {
      if (this.date >= this.dateService.getMonth(this.month, this.year).numberOfDays) {
        this.month++
        this.date = 1
        this.day = this.dateService.getMonth(this.month, this.year).startsOn()
      } else {
        this.date++
        if (this.day >= 6) {
          this.day = 0
        } else {
          this.day++
        }
      }
      weekArray.push({
        date : this.date,
        month : this.month + 1,
        day : this.dateService.getStringDay(this.day)
      })
    }
    console.log(weekArray)
    return weekArray

  }

  prevMonth() {
    this.month = this.month - 1
    if (this.month < 0) {
      this.month = 11;
      this.year = this.year - 1
    }
  }

  nextMonth() {
  	this.month = this.month + 1
  	if (this.month > 11) {
  	  this.month = 0
  	  this.year = this.year + 1
  	}
  }
}

export const cryCalendar = {
  controller,
  templateUrl,
  controllerAs: 'calendar'
}
