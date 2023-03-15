import { RESTAURANT_LIST_SUCCESS, RESTAURANT_LIST_FAIL } from '../CONSTANTS/constants'


export const restaurantListReducer = (state = { resto: [] }, action) => {
    switch(action.type)
    {
        case RESTAURANT_LIST_SUCCESS:
            return { resto: action.payload }
        case RESTAURANT_LIST_FAIL:
            return { resto: action.payload }
        default:
            return state
    }
}