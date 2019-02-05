import 'app/component/navbar/navbar.style'
import templateUrl from 'app/component/navbar/navbar.template'

const controller = class CryNavBarController {
  constructor($log, $window, $state, $location, $scope) {
  	'ngInject'
  	this.logger = $log
  	this.window = $window
  	this.state = $state
  	this.location = $location
  	this.logger.log('cry-navbar is a go')
  /*
  	$scope.navClass = 'largeNav'
    $scope.navLayout = 'largeLayout'
    $scope.navLogo = 'largeLogo'
    $scope.navSelect = 'largeSelect'

    $scope.navService = 'largeNavService'
    $scope.navReservations = 'largeNavReservations'
    $scope.navLocation = 'largeNavLocation'
    $scope.navAbout = 'largeNavAbout'
    $scope.service = 'largeService'
    $scope.reservations = 'largeReservations'
    $scope.location = 'largeLocation'
    $scope.about = 'largeAbout'
    this.isLarge = true;

  	ng.element(this.window).bind('scroll', () => {
  	  if (this.window.pageYOffset > 0) {
  	  	$scope.navClass = 'smallNav'
  	  	$scope.navLayout = 'smallLayout'
  	  	$scope.navLogo = 'smallLogo'
  	  	$scope.navSelect = 'smallSelect'
  	  	$scope.navService = 'smallNavService'
        $scope.navReservations = 'smallNavReservations'
        $scope.navLocation = 'smallNavLocation'
        $scope.navAbout = 'smallNavAbout'
  	  	$scope.service = 'smallService'
  	  	$scope.reservations = 'smallReservations'
  	  	$scope.location = 'smallLocation'
  	  	$scope.about = 'smallAbout'

  	  	this.isLarge = false;
  	  } else {
  	  	$scope.navClass = 'largeNav'
  	  	$scope.navLayout = 'largeLayout'
  	  	$scope.navLogo = 'largeLogo'
  	  	$scope.navSelect = 'largeSelect'
  	  	$scope.navService = 'largeNavService'
        $scope.navReservations = 'largeNavReservations'
        $scope.navLocation = 'largeNavLocation'
        $scope.navAbout = 'largeNavAbout'
  	  	$scope.service = 'largeService'
        $scope.reservations = 'largeReservations'
        $scope.location = 'largeLocation'
        $scope.about = 'largeAbout'
  	  	this.isLarge = true;
  	  }
  	  $scope.$apply()
  	})
    */
  }  	
}

export const cryNavBar = {
  controller,
  templateUrl,
  controllerAs: "navbar"
}