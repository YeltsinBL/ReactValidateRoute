import { BrowserRouter } from 'react-router-dom'
import { Navigate, Route } from 'react-router'
import './App.css'
import { PrivateRoutes, PublicRoutes, Roles } from './models'
import { AuthGuard, RoleGuard } from './guards'
import { RouteWithNotFound } from './utilities'
import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Logout } from './components/Logout'
import { Dashboard } from './page/Private/Dashboard'

const Login = lazy(() => import('./page/Login/Login'))
const Private = lazy(() => import('./page/Private/Private'))

function App() {
  return (
    <div className="App">
      {/* Mostrar Cargando antes de que se muestra la aplicación */}
      <Suspense fallback={<>Cargando</>}>
        {/* Envolver la aplicación en el Provider de Redux para pasarle y usar el store */}
        <Provider store={store}>
          <BrowserRouter>
            <Logout />
            <RouteWithNotFound>
              <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard privateValidation={true} />} > 
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private/>}/>
              </Route>
              <Route element={<RoleGuard rol={Roles.USER} />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>
            </RouteWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
