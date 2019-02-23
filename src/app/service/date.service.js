export class DateService {
  constructor($log, $http) {
    'ngInject'
    this.http = $http
    this.log = $log
    this.date = new Date();
  }

  getStringMonth(month) {
    switch(month) {
      case 0: return 'January'; break
      case 1: return 'February'; break
      case 2: return 'March'; break
      case 3: return 'April'; break
      case 4: return 'May'; break
      case 5: return 'June'; break
      case 6: return 'July'; break
      case 7: return 'August'; break
      case 8: return 'September'; break
      case 9: return 'October'; break
      case 10: return 'November'; break
      case 11: return 'December'; break
    }
  }
  getStringDay(day) {
    switch(day) {
      case 0: return 'Sunday'; break
      case 1: return 'Monday'; break
      case 2: return 'Tuesday'; break
      case 3: return 'Wednesday'; break
      case 4: return 'Thursday'; break
      case 5: return 'Friday'; break
      case 6: return 'Saturday'; break
    }
  }

  getTime() {
  	var options = {
      hour: "2-digit", minute: "2-digit",
      year: "numeric", month: "numeric", day: "numeric"
    }
    let timestamp = new Date().getTime()
    return new Date(timestamp).toLocaleTimeString('en-us', options)
  }

  getMonth(month, year) {
    switch(month) {
      case 0:
        return {
          month: 'January',
          month_numeral: 1,
          numberOfDays: 31,
          startsOn: function() {
            let refYear = 2012
            let refDay = -1
            for (refYear; refYear <= year; refYear++) {
              if ((refYear - 1) % 4 === 0) {
                refDay = refDay + 2
                if (refDay > 7) {
                  refDay = 1
                } else if (refDay > 6) {
                  refDay = 0
                }
              } else {
              	refDay = refDay + 1
                if (refDay > 6) {
                  refDay = 0
                }
              }
            }
            return refDay
          }
        }
        break
      case 1:
        return {
          month: 'February',
          month_numeral: 2,
          numberOfDays: year % 4 === 0 ? 29:28,
          startsOn: function() {
          	let refYear = 2012
          	let refDay = 2
          	for (refYear; refYear <= year; refYear++) {
          	  if ((refYear - 1) % 4 === 0) {
          	  	refDay = refDay + 2
          	  	if (refDay > 7) {
          	  	  refDay = 1
          	  	} else if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  } else {
          	  	refDay = refDay + 1
          	  	if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  }
          	}
          	return refDay
          }
        }
        break
      case 2:
        return {
          month: 'March',
          month_numeral: 3,
          numberOfDays: 31,
          startsOn: function() {
          	let refYear = 2012
          	let refDay = 2
          	for (refYear; refYear <= year; refYear++) {
          	  if ((refYear) % 4 === 0) {
          	  	refDay = refDay + 2
          	  	if (refDay > 7) {
          	  	  refDay = 1
          	  	} else if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  } else {
          	  	refDay = refDay + 1
          	  	if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  }
          	}
          	return refDay
          }
        }
        break
      case 3:
        return {
          month: 'April',
          month_numeral: 4,
          numberOfDays: 30,
          startsOn: function() {
          	let refYear = 2012
            let refDay = -2
            for (refYear; refYear <= year; refYear++) {
              if (refYear % 4 === 0) {
              	refDay = refDay + 2
              	if (refDay > 7) {
              	  refDay = 1
              	} else if (refDay > 6) {
              	  refDay = 0
              	}
              } else {
              	refDay = refDay + 1
              	if (refDay > 6) {
              	  refDay = 0
              	}
              }
            }
            return refDay
          }
        }
        break
      case 4:
        return {
        	month: 'May',
        	month_numeral: 5,
        	numberOfDays: 31,
        	startsOn: function() {
        	  let refYear = 2012
        	  let refDay = 0
        	  for (refYear; refYear <= year; refYear++) {
        	  	if (refYear % 4 === 0) {
        	  	  refDay = refDay + 2
        	  	  if (refDay > 7) {
        	  	    refDay = 1
        	  	  } else if (refDay > 6) {
        	  	  	refDay = 0
        	  	  }
        	  	} else {
        	  	  refDay = refDay + 1
        	  	  if (refDay > 6) {
        	  	  	refDay = 0
        	  	  }
        	  	}
        	  }
        	  return refDay
        	}
        }
        break
      case 5:
        return {
          month: 'June',
          month_numeral: 6,
          numberOfDays: 30,
          startsOn: function() {
          	let refYear = 2012
          	let refDay = 3
          	for (refYear; refYear <= year; refYear++) {
          	  if (refYear % 4 === 0) {
          	  	refDay = refDay + 2
          	  	if (refDay > 7) {
          	  	  refDay = 1
          	  	} else if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  } else {
          	  	refDay = refDay + 1
          	  	if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  }
          	}
          	return refDay
          }
        }
        break
      case 6:
        return {
          month: 'July',
          month_numeral: 7,
          numberOfDays: 31,
          startsOn: function() {
          	let refYear = 2012
          	let refDay = -2
            for (refYear; refYear <= year; refYear++) {
              if (refYear % 4 === 0) {
              	refDay = refDay + 2
              	if (refDay > 7) {
              	  refDay = 1
              	} else if (refDay > 6) {
              	  refDay = 0
              	}
              } else {
              	refDay = refDay + 1
              	if (refDay > 6) {
              	  refDay = 0
              	}
              }
            }
            return refDay
          }
        }
        break
      case 7:
        return {
          month: 'August',
          month_numeral: 8,
          numberOfDays: 31,
          startsOn: function() {
          	let refYear = 2012
          	let refDay = 1
          	for (refYear; refYear <= year; refYear++) {
          	  if (refYear % 4 === 0) {
          	  	refDay = refDay + 2
          	  	if (refDay > 7) {
          	  	  refDay = 1
          	  	} else if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  } else {
          	  	refDay = refDay + 1
          	  	if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  }
          	}
          	return refDay
          }
        }
        break
      case 8:
        return {
          month: 'September',
          month_numeral: 9,
          numberOfDays: 30,
          startsOn: function() {
          	let refYear = 2012
          	let refDay = 4
          	for (refYear; refYear <= year; refYear++) {
          	  if (refYear % 4 === 0) {
          	    refDay = refDay + 2
          	    if (refDay > 7) {
          	      refDay = 1
          	    } else if (refDay > 6) {
          	      refDay = 0
          	    }
          	  } else {
          	  	refDay = refDay + 1
          	  	if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  }
          	}
          	return refDay
          }
        }
        break
      case 9:
        return {
          month: 'October',
          month_numeral: 10,
          numberOfDays: 31,
          startsOn: function() {
          	let refYear = 2012
          	let refDay = -1
          	for (refYear; refYear <= year; refYear++) {
          	  if (refYear % 4 === 0) {
          	  	refDay = refDay + 2
          	  	if (refDay > 7) {
          	  	  refDay = 1
          	  	} else if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  } else {
          	  	refDay = refDay + 1
          	  	if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  }
          	}
          	return refDay
          }
        }
        break
      case 10:
        return {
          month: 'November',
          month_numeral: 11,
          numberOfDays: 30,
          startsOn: function() {
          	let refYear = 2012
          	let refDay = 2
          	for (refYear; refYear <= year; refYear++) {
          	  if (refYear % 4 === 0) {
          	  	refDay = refDay + 2
          	  	if (refDay > 7) {
          	  	  refDay = 1
          	  	} else if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  } else {
          	  	refDay = refDay + 1
          	  	if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  }
          	}
          	return refDay
          }
        }
        break
      case 11:
        return {
          month: 'December',
          month_numeral: 12,
          numberOfDays: 31,
          startsOn: function() {
          	let refYear = 2012
          	let refDay = 4
          	for (refYear; refYear <= year; refYear++) {
          	  if (refYear % 4 === 0) {
          	  	refDay = refDay + 2
          	  	if (refDay > 7) {
          	  	  refDay = 1
          	  	} else if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  } else {
          	  	refDay = refDay + 1
          	  	if (refDay > 6) {
          	  	  refDay = 0
          	  	}
          	  }
          	}
          	return refDay
          }
        }
    }
  }

  getYear() {
  	return new Date().getFullYear()
  }


}
