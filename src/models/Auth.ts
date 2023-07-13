export interface IAuth {
    error: boolean
    message: string
    user_session: string
}

export interface AuthCredentials {
    email: string
    password: string
    username?: string
    pin: string
    referral_code: string
}
