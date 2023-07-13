import {instance} from "./index";
import {IUser} from "../models/User";


export interface GetUserPayload extends IUser {}

export interface ChangeLoginPayload {
    message: string
}

export interface ChangeMailingPayload {
    message: string
}

export interface ChangePhotoPayload {
    info: string
}


export interface IGetUserProps {
    session: string
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
    static async getUser({session}: IGetUserProps) {
        const {data} = await instance.get<GetUserPayload>(`user/${session}`)
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
