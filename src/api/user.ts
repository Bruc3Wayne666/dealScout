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

export interface ChangeLoginPayload {
    message: string
}

export interface ChangeMailingPayload {
    message: string
}

export interface ChangePhotoPayload {
    info: string
}

export interface ILoginArgs {
    email: string
    password: string
}

export interface IRegisterArgs extends ILoginArgs {
    username: string
    referral_link: string
}

export interface IRequestPinProps {
    email: string
}

export interface IResetPasswordProps {
    email: string,
    password: string
    pin: string
}

export interface IChangeLoginProps {
    user_session: string
    new_login: string
}

export interface IChangePhotoProps {
    session: string
    image: any
}

export interface IChangeMailingProps {
    session: string
}


export class UserAPI {
    static async register({email, password, username, referral_link = ''}: IRegisterArgs) {
        const {data} = await instance.post<RegistrationPayload>('user/registration', {
            email,
            password,
            login: username,
            referral_link
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

    static async changeLogin(payload: IChangeLoginProps) {
        const {data} = await instance.post<ChangeLoginPayload>('user/change_login', payload)
        return data
    }

    static async changePhoto({session, image}: IChangePhotoProps) {
        const payload = new FormData()
        payload.append('image', image)
        const {data} = await instance.post<ChangePhotoPayload>(
            `user/change_photo/${session}`, payload,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        return data
    }

    static async changeMailing({session}: IChangeMailingProps) {
        const {data} = await instance.post<ChangeMailingPayload>(`user/change_mailing/${session}`)
        return data
    }
}
