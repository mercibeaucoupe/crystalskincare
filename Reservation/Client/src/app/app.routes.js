export function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject'

  const welcomeState = {
  	name: 'welcome',
  	url: '/welcome',
  	component: 'cryLandingPage'
  }

  const servicePageState = {
    name: 'service',
    url: '/service',
    component: 'cryServicePage'
  }

  const reservationState = {
  	name: 'reservation',
  	url: '/reservation',
  	component: 'cryReservation'
  }

  const reservationConfirmState = {
    name: 'reservationConfirm',
    url: '/reservation/{year}/{date}/{month}/{time}/confirm',
    component: 'cryReservationConfirm'
  }

  const locationPageState = {
    name: 'location',
    url: '/location',
    component: 'cryLocationPage'
  }

  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/welcome')

  $stateProvider.state(welcomeState)
  $stateProvider.state(reservationState)
  $stateProvider.state(reservationConfirmState)
  $stateProvider.state(servicePageState)
  $stateProvider.state(locationPageState)
}