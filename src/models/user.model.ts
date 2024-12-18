import { Roles } from "./Roles.model";

export interface UserInfo {
    id: number,
    name: string,
    email: string,
    rol: Roles[]
}