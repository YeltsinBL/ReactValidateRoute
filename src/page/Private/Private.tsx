import { PrivateRoutes, Roles } from "@/models"
import { Navigate, Route } from "react-router-dom"
import { RouteWithNotFound } from "@/utilities"
import { lazy } from "react"
import { RoleGuard } from "@/guards"

const Dashboard = lazy(() => import('./Dashboard/Dashbard'))
const Home = lazy(()=> import('./Home/Home'))
const Other = lazy(()=> import('./Other/Other'))

function Private() {
  return (
    <RouteWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
      <Route element={<RoleGuard roles={[Roles.USER, Roles.ADMIN]} />}>
        <Route path={PrivateRoutes.OTHER} element={<Other />} />
      </Route>
    </RouteWithNotFound>
  )
}
export default Private