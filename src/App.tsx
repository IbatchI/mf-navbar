import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './shared/Routes/AppRoutes'
import { Spinner } from './shared/Components/Spinner/Spinner'
import Layout from './Layout/Components/Layout/Layout'
import './App.css'

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
