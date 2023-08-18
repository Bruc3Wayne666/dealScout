import {instance} from "./index";



export class DashboardAPI {
    static async getMyProcessedGoods() {
        const {data} = await instance.get('dashboard/processed_goods')
        return data
    }

    static async downloadAllDeals(session: string) {
        const {data} = await instance.post('dashboard/download_all_deals', {session}, {
            responseType: 'blob'
        })
        const url = window.URL.createObjectURL(new Blob([data]))
        const link = document.createElement('a')
        link.href = url
        link.download = 'All Deals.xml'
        document.body.appendChild(link)
        link.click()
        link.parentNode?.removeChild(link)
        return data
    }

    static async getMyPlans(session: string) {
        const {data} = await instance.post('dashboard/my_plans', {session})
        return data
    }

    static async getMyActivePlans(session: string) {
        const {data} = await instance.post('dashboard/my_active_plans', {session})
        return data
    }

    static async getProfitDay(session: string) {
        const {data} = await instance.post('dashboard/profit_day', {session})
        return data
    }
}
