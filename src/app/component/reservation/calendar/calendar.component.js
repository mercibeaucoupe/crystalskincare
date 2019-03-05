import 'app/component/reservation/calendar/calendar.style'
import templateUrl from 'app/component/reservation/calendar/calendar.template'

const controller = class CalendarController {
  constructor($log, $scope, $element, dateService) {
    'ngInject'
    this.logger = $log
    this.scope = $scope
    this.element = $element
    this.dateService = dateService
    this.month = new Date().getMonth()
    this.year = new Date().getFullYear()
    this.monthObject = this.getMonth(this.month, this.year)
    this.startDate = this.monthObject.startsOn()
    this.numberOfDays = []

    this.today = (new Date()).getDate()
  }

  selectedDate(index) {
    let selectedDay
    if (this.day == null) selectedDay =  this.numberOfDays[this.today - 1].date
    else selectedDay = this.day.date
    if (index + 1 === selectedDay) {
      return 'hover'
    } else {
      return ''
    }
  }

  getDay(day) {
    this.day = day
  }

  getTime() {
  	let timeArr = this.dateService.getTime().split(',')
  	return timeArr[0]
  }

  getDate() {
  	let dateArray = []
  	for (let i = 0; i < this.monthObject.numberOfDays; i++) {
      dateArray.push({
        month: {
          month_string: this.monthObject.month,
          month_numeral: this.monthObject.month_numeral
        },
        date: i + 1,
        year: this.year
      })
  	}
  	this.numberOfDays = dateArray;
    this.day.month.month_string = this.monthObject.month
    this.day.month.month_numeral = this.monthObject.month_numeral
  }

  getMonth(month, year) {
    return this.dateService.getMonth(month, year)
  }

  prevMonth() {
    this.month = this.month - 1
    if (this.month < 0) {
      this.month = 11;
      this.year = this.year - 1
    }
    this.monthObject = this.getMonth(this.month, this.year)
    this.startDate = this.monthObject.startsOn()
    this.getDate()
  }

  nextMonth() {
  	this.month = this.month + 1
  	if (this.month > 11) {
  	  this.month = 0
  	  this.year = this.year + 1
  	}
  	this.monthObject = this.getMonth(this.month, this.year)
  	this.startDate = this.monthObject.startsOn()
  	this.getDate()
  }

  setToday() {
  	this.month = new Date().getMonth()
  	this.year = new Date().getFullYear()
  	this.monthObject = this.getMonth(this.month, this.year)
  	this.startDate = this.monthObject.startsOn()
  	this.getDate()
  }

  getNumberOfDays() {
  	return Array.from(new Array(this.monthObject.numberOfDays), (x,i) => i + 1)
  }

  findDayOfWeek(index) {
    if (index === 0) {
  	  switch (this.startDate) {
  	    case 0:
  	      return 'sundaywk1'
  	      break
  	    case 1:
  	      return 'mondaywk1'
  	      break
  	    case 2:
  	      return 'tuesdaywk1'
  	      break
  	    case 3:
  	      return 'wednesdaywk1'
  	      break
  	    case 4:
  	      return 'thursdaywk1'
  	      break
  	    case 5:
  	      return'fridaywk1'
  	      break
  	    case 6:
  	      return 'saturdaywk1'
  	  }
    }


  }
}

export const cryCalendar = {
  controller,
  templateUrl,
  controllerAs: 'calendar',
  bindings: {
    day: '='
  }
}
