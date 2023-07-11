interface IDeal {
    day: number
    shop_price: number
    amazon_price: number
    shop_name: string
    shop_link: string
    amazon_link: string
    plan_id: number
    group_number: number
    roi: string
    net_profit: string
    bsr_percent: string
    fba_seller: string
    fbm_seller: string
    est_monthly_sale: string
    asin: string
    brs_rank: string
    upc_ean: string
    restriction_check: string
    image: string
}

export interface DealShow extends IDeal {
    currency: string
    id: number
}

export interface DealAdd extends IDeal {}
