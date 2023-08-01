import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from 'components/reducer'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
const store = createStore(rootReducer)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
