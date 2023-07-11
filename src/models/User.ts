export interface IUser {
    error: boolean
    message: string
    user_session: string
}

export interface UserCredentials {
    email: string
    password: string
    username?: string
    pin: string
    referral_link: string
}
