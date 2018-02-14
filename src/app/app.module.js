import uiRouter from 'angular-ui-router'
import ngMap from 'ngmap'

// Services
import { DateService } from 'app/service/date.service'
import { ReservationService } from 'app/service/reservation.service'

// Components
import { cryApp } from 'app/app.component'
import { cryNavBar } from 'app/component/navbar/navbar.component'
import { cryLandingPage } from 'app/component/landingPage/landingPage.component'
import { cryReservation } from 'app/component/reservation/reservation.component'
import { cryCalendar } from 'app/component/reservation/calendar/calendar.component'
import { cryDate } from 'app/component/reservation/calendar/date/date.component'
import { cryTimes } from 'app/component/reservation/calendar/date/times/times.component'
import { reservationConfirm } from 'app/component/reservation/calendar/date/reservationConfirm/reservationConfirm.component'
import { cryServicePage } from 'app/component/servicePage/service.component'
import { cryServiceBanner } from 'app/component/servicePage/serviceBanner/serviceBanner.component'
import { cryServiceTechnology } from 'app/component/servicePage/serviceTechnology/serviceTechnology.component'
import { cryBiolight } from 'app/component/servicePage/serviceTechnology/biolight/biolight.component'
import { cryCryozet } from 'app/component/servicePage/serviceTechnology/cryozet/cryozet.component'
import { cryProduct } from 'app/component/servicePage/serviceTechnology/cryozet/product/product.component'
import { cryHydroimpact } from 'app/component/servicePage/serviceTechnology/hydroimpact/hydroimpact.component'
import { cryMagicpeel } from 'app/component/servicePage/serviceTechnology/magicpeel/magicpeel.component'
import { cryRfzet } from 'app/component/servicePage/serviceTechnology/rfzet/rfzet.component'
import { cryLocationPage } from 'app/component/locationPage/locationPage.component'
import { cryFooter } from  'app/component/footer/footer.component'


// Config
import { routing } from 'app/app.routes'
import { config } from 'app/app.config'

export default ng
  .module('CrystalSkinCare', [uiRouter, ngMap])
  .service('dateService', DateService)
  .service('reservationService', ReservationService)
  .component('cryApp', cryApp)
  .component('cryNavbar', cryNavBar)
  .component('cryLandingPage', cryLandingPage)
  .component('cryReservation', cryReservation)
  .component('cryCalendar', cryCalendar)
  .component('cryDate', cryDate)
  .component('cryTimes', cryTimes)
  .component('cryReservationConfirm', reservationConfirm)
  .component('cryServicePage', cryServicePage)
  .component('cryServiceBanner', cryServiceBanner)
  .component('cryServiceTechnology', cryServiceTechnology)
  .component('cryBiolight', cryBiolight)
  .component('cryCryozet', cryCryozet)
  .component('cryProduct', cryProduct)
  .component('cryHydroimpact', cryHydroimpact)
  .component('cryMagicpeel', cryMagicpeel)
  .component('cryRfzet', cryRfzet)
  .component('cryLocationPage', cryLocationPage)
  .component('cryFooter', cryFooter)
  .config(routing)
  .config(config)
  .name