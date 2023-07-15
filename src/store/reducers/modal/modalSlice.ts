import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const plans = {
    'start': {
        plan: 'start', price: 24.99,
        description: ['For $24.99, gain access to 5 daily profitable deals and start boosting your sales.', 'Designed for first-time sellers or those who want to try the service.^For $24.99, you get access to 5 profitable trades a day to help you start increasing your profits.']
    },
    'advanced': {
        plan: 'advanced', price: 34.99,
        description: ['$34.99 for 7 unique daily deals. Fewer people per group for more personalized service.', 'Perfect for sellers who want to accelerate their growth.^For $34.99 you get access to 7 profitable deals per day and a guarantee of fewer people in your group, allowing you to get a more personalized service.']
    },
    'pro': {
        plan: 'pro', price: 49.99,
        description: ['At $49.99, enjoy 10 exclusive deals daily and the most individualized experience.', 'This plan is for serious sellers looking to maximize profits.^For $49.99, you get access to 10 exclusive deals per day and a guarantee of the least number of people in your group, providing the most personalized experience.']
    },
}


interface IModalState {
    show: boolean
    plan: string
    price: number
    description: string[]
}

const initialState: IModalState = {
    show: false,
    plan: '',
    price: 0,
    description: []
}

export const modalSlice = createSlice({
        name: 'modal',
        initialState,
        reducers: {
            setShow: (state, {payload}: PayloadAction<string>) => {
                state.show = true
                state.plan = payload
                state.price = plans[payload as keyof typeof plans].price
                state.description = plans[payload as keyof  typeof  plans].description
            },
            setClose: (state) => {
                state.show = false
                state.plan = ''
                state.price = 0
                state.description = []
            }
        }
    }
)

export const modalActions = modalSlice.actions
export default modalSlice.reducer
