import { PrivateRoutes, Roles } from "@/models"
import { AppStore } from "@/redux/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

interface Props {
  roles: Roles[]
}

function RoleGuard({roles}: Props) {
  const userState = useSelector((store:AppStore) => store.user)
  
  return roles.some(rol => userState.rol.includes(rol)) ? <Outlet /> 
    : <Navigate replace to={`/${PrivateRoutes.PRIVATE}`} />
}
export default RoleGuard