import { PrivateRoutes } from "@/models"
import { createUser } from "@/redux/states/user"
import { getMorty } from "@/services"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const  login = async() =>{
    try {
        const result = await getMorty()
        // una vez que se obtiene los datos, lo agregamos al Store
        dispatch(createUser(result))
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