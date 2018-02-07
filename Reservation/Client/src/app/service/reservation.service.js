export class ReservationService {
  constructor($log, $http) {
  	'ngInject'
  	this.logger = $log
  	this.http = $http
    this.baseUrl = ''

  	this.testTimes = {
  		eightAm: {
  	      startingTime: "8:00am",
  	      endingTime: "9:00am"
  	    },
  	    nineAm: {
  	      startingTime: "9:00am",
  	      endingTime: "10:00am"
  	    },
  	    tenAm: {
  	      startingTime: "10:00am",
  	      endingTime: "11:00am"
  	    },
  	    elevenAm: {
  	      startingTime: "11:00am",
  	      endingTime: "12:00pm"
  	    },
  	    twelevePm: {
  	      startingTime: "12:00pm",
  	      endingTime: "1:00pm"
  	    },
  	    onePm: {
  	      startingTime: '1:00pm',
  	      endingTime: '2:00pm'
  	    },
  	    twoPm: {
  	      startingTime: '2:00pm',
  	      endingTime: '3:00pm'
  	    },
  	    threePm: {
  	      startingTime: '3:00pm',
  	      endingTime: '4:00pm'
  	    },
  	    fourPm: {
  	      startingTime: '4:00pm',
  	      endingTime: '5:00pm'
  	    }
  	}
  }

  getTestTime() {
  	return this.testTimes
  }

  makeReservation(email, phone, date, option) {
    this.logger.log(email)
    this.logger.log(phone)
    this.logger.log(date)
    this.logger.log(option)
  }

  getAvailabelReservations(credentials) {
  	return this.http({
  	      method: 'GET',
  	      url: `${this.baseUrl}/reservations`,
  	      data: credentials
  	    })
  	    .then(result => {
  	  	  return Promise.resolve(result)
  	    })
  	    .catch(error => {
  	      return Promise.reject(error)
  	    })
  }

  createReservation(credentials) {
    return this.http({
      method: 'POST',
      url: `${this.baseUrl}/reservations/`,
      data: credentials
    })
    .then(result => {
      return Promise.resolve(result)
    })
    .catch(error => {
      return Promise.reject(error)
    })
  }

  cancelReservation(credentials) {
    return this.http({
          method: 'POST',
          url: `${this.baseUrl}/`,
          data: credentials
        })
        .then(result => {
          return Promise.resolve(result)
        })
        .catch(error=> {
          return Promise.reject(error)
        })

  }

}