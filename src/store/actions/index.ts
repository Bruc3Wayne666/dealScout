import * as AuthThunks from '../reducers/auth/authActions'
import * as UserThunks from '../reducers/user/userActions'
import * as DealThunks from '../reducers/deal/dealActions'
import {userActions} from '../reducers/user/userSlice'
import {authActions} from '../reducers/auth/authSlice'
import {sidebarActions} from '../reducers/sidebar/sidebarSlice'
import {modalActions} from '../reducers/modal/modalSlice'

export default {
    ...authActions,
    ...AuthThunks,
    ...UserThunks,
    ...DealThunks,
    ...sidebarActions,
    ...userActions,
    ...modalActions
}
