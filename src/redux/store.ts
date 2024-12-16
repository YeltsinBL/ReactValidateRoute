import { UserInfo } from "@/models"
import userSliceReducer from "./states/user"
import { configureStore } from "@reduxjs/toolkit"

export interface AppStore {
  user: UserInfo
}

// configuración del Redux
export default configureStore<AppStore>({
  reducer:{
    user: userSliceReducer
  }
})