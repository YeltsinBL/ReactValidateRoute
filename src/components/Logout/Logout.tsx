import { PublicRoutes } from "@/models"
import { resetUser, UserKey } from "@/redux/states/user"
import { clearLocalStorage } from "@/utilities"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function Logout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logOut = () =>{
    clearLocalStorage(UserKey)
    dispatch(resetUser())
    navigate(`${PublicRoutes.LOGIN}`, {replace:true})
  }
  return (
    <button onClick={logOut}>Logout</button>
  )
}
export default Logout