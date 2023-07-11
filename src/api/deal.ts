import {instance} from "./index";
import {DealShow, DealAdd} from "../models/Deal";


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

export interface GetDealsProps {
    session: string
    time: Time,
    plan_id: Plan
}

export interface AddDealProps {
    session: string
    payload: DealAdd
}

export class DealAPI {
    static async getDeals(payload: GetDealsProps){
        const {data} = await instance.post<DealShow[]>('deal/look', payload)
        return data
    }

    static async addDeal({session, payload}: AddDealProps){
        const {data} = await instance.post(`deal/add/${session}`, payload)
        return data
    }
}
