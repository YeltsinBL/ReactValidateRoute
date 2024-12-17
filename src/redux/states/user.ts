import { UserInfo } from "@/models";
import { clearLocalStorage, persistLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

// Crear un estado vacío inicial
export const EmptyUserState:UserInfo ={
  id:   0,
  name: '',
  email:'',
  rol:[]
}

export const UserKey = 'user'

// Se usa para asignar, obtener y manipular el estado global de la aplicación
export const userSlice = createSlice({
  name:'user',
  initialState: localStorage.getItem(UserKey) ? JSON.parse(localStorage.getItem(UserKey) as string) : EmptyUserState,
  reducers:{
    createUser: (_, action) => {
      persistLocalStorage<UserInfo>(UserKey,action.payload)
      return action.payload
    },
    updateUser: (state, action) => {
      const update = {...state, ...action.payload}
      persistLocalStorage<UserInfo>(UserKey,update)
      return update
    },
    resetUser: () => {
      clearLocalStorage(UserKey)
      return EmptyUserState
    }
  }
})

export const {createUser, updateUser, resetUser} = userSlice.actions

export default userSlice.reducer