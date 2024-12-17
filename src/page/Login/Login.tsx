import { PrivateRoutes, PublicRoutes, Roles } from "@/models"
import { createUser, resetUser, UserKey } from "@/redux/states/user"
import { getMorty } from "@/services"
import { clearLocalStorage } from "@/utilities"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    clearLocalStorage(UserKey)
    dispatch(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
  }, [])

  const  login = async() =>{
    try {
        const result = await getMorty()
        // una vez que se obtiene los datos, lo agregamos al Store
        dispatch(createUser({...result, rol: [Roles.SUPPLIER]}))
        navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true})
    } catch (error) { }

  }
  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Inicia Sesión</button>
    </div>
  )
}
export default Login