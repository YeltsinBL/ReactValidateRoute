import { PrivateRoutes } from "@/models"
import { Navigate, Route } from "react-router-dom"
import { RouteWithNotFound } from "@/utilities"
import { lazy } from "react"

const Dashboard = lazy(() => import('./Dashboard/Dashbard'))
const Home = lazy(()=> import('./Home/Home'))

function Private() {
  return (
    <RouteWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RouteWithNotFound>
  )
}
export default Private