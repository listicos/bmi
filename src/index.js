import { AppRegistry } from 'react-native'
import App from './Containers/App'

AppRegistry.registerComponent('App', () => App)

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root')
})
