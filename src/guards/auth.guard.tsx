import { PrivateRoutes, PublicRoutes } from "@/models"
import { AppStore } from "@/redux/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

interface Props {
  privateValidation: boolean
}
// Validar si el usuario a iniciado sesión, 
// sino regresar al Login
export const AuthGuard = ({privateValidation}: Props) =>{
  const userState = useSelector((store: AppStore) => store.user)
  return userState.name ? (
    privateValidation ? (
      <Outlet />
    ) : (
    <Navigate replace to={PrivateRoutes.PRIVATE} />
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN}/>
  )
}

export default AuthGuard