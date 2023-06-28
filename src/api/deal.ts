import {instance} from "./index";


export enum Time {
    TODAY = 'today',
    WEEK = 'week',
    MONTH = 'month',
    ALL = 'all'
}

export enum Plan {
    ALL = -1,
    STARTER = 1,
    ADVANCED = 2,
    PRO = 3
}

export interface IGetDeals {
    user_session: string
    time: Time,
    plan: Plan
}

export class DealAPI {
    static async getDeals({user_session, time, plan}: IGetDeals){
        const {data} = await instance.post('user_deals', {
            user_session,
            time,
            plan
        })
        return data
    }
}
