import { configDefault, configSet } from './utils/config.js'

import D2Button from './packages/Button/index.js'
import D2Popper from './packages/Popper/index.js'
import D2Svg from './packages/Svg/index.js'
import D2SvgGroup from './packages/SvgGroup/index.js'

import './packages/ThemeDefault/index.scss'

const components = [
  D2Button,
  D2Popper,
  D2Svg,
  D2SvgGroup
]

function install (app, option) {
  const optionMixed = Object.assign({}, configDefault, option)

  configSet(optionMixed)

  app.config.globalProperties.$D2COMPONENT = optionMixed

  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
