import {instance} from "./index";
import {DealShow, DealAdd} from "../models/Deal";


export enum Time {
    TODAY = 'today',
    WEEK = 'week',
    MONTH = 'month',
    ALL = 'all'
}

export enum Plan {
    ALL = 0,
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

export interface GetAmountProps {
    session: string
    time: string
    plan_id: number
}

export interface AddFavoriteProps {
    session: string
    deal_id: number
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

    static async getDealsAmount(payload: GetAmountProps){
        const {data} = await instance.post('deal/look_size', payload)
        return data
    }

    static async addFavoriteDeal(payload: AddFavoriteProps){
        await instance.post('favorite_deals/add_favorite_deal', payload)
        return payload.deal_id
    }

    static async removeFavoriteDeal(payload: AddFavoriteProps){
        await instance.post('favorite_deals/delete_favorite_deal', payload)
        return payload.deal_id
    }

    static async getFavoriteDealsList(payload: string){
        const {data} = await instance.post('favorite_deals/favorite_deal_list', {
            session: payload
        })
        return data
    }
}
