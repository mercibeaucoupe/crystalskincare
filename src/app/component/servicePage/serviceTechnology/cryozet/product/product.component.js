import 'app/component/servicePage/serviceTechnology/cryozet/product/product.style'
import templateUrl from 'app/component/servicePage/serviceTechnology/cryozet/product/product.template'

export const controller = class ProductController {
  constructor($log) {
  	'ngInject'
  }
}

export const cryProduct = {
  controller,
  templateUrl,
  controllerAs: 'product'
}