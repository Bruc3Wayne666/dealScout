import * as UserThunks from '../reducers/user/userActions'
import * as DealThunks from '../reducers/deal/dealActions'
import {userActions} from '../reducers/user/userSlice'
import {sidebarActions} from '../reducers/sidebar/sidebarSlice'

export default {
    ...userActions,
    ...UserThunks,
    ...DealThunks,
    ...sidebarActions
}
