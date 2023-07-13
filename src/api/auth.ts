import {instance} from "./index";


export interface LoginPayload {
    session: string
}

export interface RegistrationPayload extends LoginPayload {
}

export interface ResetPasswordPayload {
    info: string
    user_session: string
}

export interface RequestPinPayload {
    pin: string
}


export interface ILoginArgs {
    email: string
    password: string
}

export interface IRegisterArgs extends ILoginArgs {
    username: string
    referral_code: string
}

export interface IRequestPinProps {
    email: string
}

export interface IResetPasswordProps {
    email: string,
    password: string
    pin: string
}


export class AuthAPI {
    static async register({email, password, username, referral_code = ''}: IRegisterArgs) {
        const {data} = await instance.post<RegistrationPayload>('user/registration', {
            email,
            password,
            login: username,
            referral_code
        })
        return data
    }

    static async login({email, password}: ILoginArgs) {
        const {data} = await instance.post<LoginPayload>('user/login', {
            login_or_email: email,
            password
        })
        return data
    }

    static async requestPin({email}: IRequestPinProps) {
        const {data} = await instance.post<RequestPinPayload>(`user/reset/${email}`)
        return data
    }

    static async resetPassword({email, password, pin}: IResetPasswordProps) {
        const {data} = await instance.post<ResetPasswordPayload>('user/reset_check', {
            login_or_email: email,
            new_password: password,
            pin
        })
        return data
    }
}
