import 'app/component/servicePage/serviceTechnology/magicpeel/magicpeel.style'
import templateUrl from 'app/component/servicePage/serviceTechnology/magicpeel/magicpeel.template'

export const controller = class MagicpeelController {
  constructor($log, $scope, $interval, $window) {
  	'ngInject'
    this.logger = $log
    this.scope = $scope
    this.interval = $interval
    this.window = $window

    this.peelActive = false;
    this.peel2Active = false;
    this.peel3Active = false;
    this.peel4Active = false;
  }

  peel() {      
    let blue = 70
    let blueShadow = 88
    let white = 88
    let left = 78.5
    let top = 6.1
    let height = 9
    let width = 20

    if (!this.peelActive) {
      let gradient = this.interval(() => {
        blue = blue - 2
        left = left - 1.2
        blueShadow--
        white--
        top = top + .03
        height = height + .15
        width = width + .15
        this.scope.peelRegress = {
          'background' : 'linear-gradient(50deg, #267eb0' + ' ' + blue +'%, #1d5d81' + ' ' + blueShadow + '%, whitesmoke' + ' ' + white + '%, whitesmoke 100%)'
        }
        this.scope.peelProgress = {
          'left' : left + 'vw',
          'top' : top + 'vw',
          'height' : height + 'vw',
          'width' : width + 'vw'
        }
        this.scope.step1_desc = {
          'opacity' : '1',
          'visibility' : 'visible'
        }
        if (blueShadow == 0) {
          this.interval.cancel(gradient)
        }
        if (blueShadow == 30) {
          this.scope.step1_text = {
            'color' : '#267eb0',
            'transition' : 'color .15s'
          }
        } else if (blueShadow > 30) {
          this.scope.step1_text = {
            'color' : '#fff'
          }
        }
      }, 19)
      this.peelActive = true;
    }
  }

  peel2() {
    let blue = 70
    let blueShadow = 88
    let white = 88
    let left = 78.5
    let top = 6.1
    let height = 9
    let width = 20
    if (!this.peel2Active) {
      let gradient = this.interval(() => {
        blue = blue - 2
        left = left - 1.2
        blueShadow--
        white--
        top = top + .03
        height = height + .15
        width = width + .15
      
        this.scope.peelRegress2 = {
          'background' : 'linear-gradient(50deg, #76bde5' + ' ' + blue +'%, #6aa6c8' + ' ' + blueShadow + '%, whitesmoke' + ' ' + white + '%, whitesmoke 100%)'
        }
        this.scope.peelProgress2 = {
          'left' : left + 'vw',
          'top' : top + 'vw',
          'height' : height + 'vw',
          'width' : width + 'vw'
        }
        this.scope.step2_desc = {
          'opacity' : '1',
          'visibility' : 'visible'
        }

        if (blueShadow == 0) {
          this.interval.cancel(gradient)
        }
        if (blueShadow == 30) {
          this.scope.step2_text = {
            'color' : '#76bde5',
            'transition' : 'color .15s'
          }
        } else if (blueShadow > 30) {
          this.scope.step2_text = {
            'color' : '#fff'
          }
        }
      }, 19)
      this.peel2Active = true;
    }
  }
  peel3() {
    let blue = 70
    let blueShadow = 88
    let white = 88
    let left = 78.5
    let top = 6.1
    let height = 9
    let width = 20
    if (!this.peel3Active) {
      let gradient = this.interval(() => {
        blue = blue - 2
        left = left - 1.2
        blueShadow--
        white--
        top = top + .03
        height = height + .15
        width = width + .15
      
        this.scope.peelRegress3 = {
          'background' : 'linear-gradient(50deg, #b1cbfe' + ' ' + blue +'%, #869bc5' + ' ' + blueShadow + '%, whitesmoke' + ' ' + white + '%, whitesmoke 100%)'
        }
        this.scope.peelProgress3 = {
          'left' : left + 'vw',
          'top' : top + 'vw',
          'height' : height + 'vw',
          'width' : width + 'vw'
        }
        this.scope.step3_desc = {
          'opacity' : '1',
          'visibility' : 'visible'
        }

        if (blueShadow == 0) {
          this.interval.cancel(gradient)
        }
        if (blueShadow == 30) {
          this.scope.step3_text = {
            'color' : '#b1cbfe',
            'transition' : 'color .15s'
          }
        } else if (blueShadow > 30) {
          this.scope.step3_text = {
            'color' : '#fff'
          }
        }
      }, 19)
      this.peel3Active = true
    }
  }
  peel4() {
    let blue = 70
    let blueShadow = 88
    let white = 88
    let left = 78.5
    let top = 6.1
    let height = 9
    let width = 20
    if (!this.peel4Active) {
      let gradient = this.interval(() => {
        blue = blue - 2
        left = left - 1.2
        blueShadow--
        white--
        top = top + .03
        height = height + .15
        width = width + .15
        this.scope.peelRegress4 = {
          'background' : 'linear-gradient(50deg, #b4b5b7' + ' ' + blue +'%, #848688' + ' ' + blueShadow + '%, whitesmoke' + ' ' + white + '%, whitesmoke 100%)'
        }
        this.scope.peelProgress4 = {
          'left' : left + 'vw',
          'top' : top + 'vw',
          'height' : height + 'vw',
          'width' : width + 'vw'
        }
        this.scope.step4_desc = {
          'opacity' : '1',
          'visibility' : 'visible'
        }

        if (blueShadow == 0) {
          this.interval.cancel(gradient)
        }
        if (blueShadow == 30) {
          this.scope.step4_text = {
            'color' : '#b4b5b7',
            'transition' : 'color .15s'
          }
        } else if (blueShadow > 30) {
          this.scope.step4_text = {
            'color' : '#fff'
          }
        }
      }, 19)
      this.peel4Active = true
    }
  }
}

export const cryMagicpeel = {
  controller,
  templateUrl,
  controllerAs: 'magicpeel'
}