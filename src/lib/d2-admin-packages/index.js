import D2Iconify from './packages/Iconify/index.js'

const components = [
  D2Iconify
]

export default function (app) {
  components.forEach(component => {
    app.component(component.name, component)
  })
}
