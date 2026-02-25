import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store, { persist } from './store/store.ts'
import { PersistGate } from 'redux-persist/lib/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}/>
      <App />
    </Provider>
  </StrictMode>,
)
