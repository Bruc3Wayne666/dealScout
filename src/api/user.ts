import {instance} from "./index";
import {IUser} from "../models/User";


export interface ILoginArgs {
    email: string
    password: string
}

export interface IRegisterArgs extends ILoginArgs {
    username: string
}

export interface IRestorePasswordProps extends ILoginArgs {
    pin: string | number
}

export interface IRequestPinArgs {
    email: string
}




export class UserAPI {
    static async register({email, password, username}: IRegisterArgs){
        const {data} = await instance.post<IUser>('registration', {
            email,
            password,
            login: username
        })
        return data
    }

    static async login({email, password}: ILoginArgs){
        const {data} = await instance.post<IUser>('login', {
            email,
            password
        })
        return data
    }

    static async requestPin({email}: IRequestPinArgs){
        const {data} = await instance.post<{pin: string}>('reset', {
            email
        })
        return data
    }

    static async changePassword({email, password, pin}: IRestorePasswordProps){
        const {data} = await instance.post<IUser>('change_pass', {
            email,
            password,
            pin
        })
        return data
    }
}
