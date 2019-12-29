import App from '../src/app.js'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import reducers from './redux/index'
import { LocaleProvider,message } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  
ReactDOM.render(<Provider store={store}>
    <Router>
      <LocaleProvider locale={zh_CN}>
        <App />
      </LocaleProvider>
    </Router>
  </Provider>
  , document.getElementById('app'))
