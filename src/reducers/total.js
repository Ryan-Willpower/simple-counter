import { ADD, REMOVE } from '../actions/index'

export default (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1
        
        case REMOVE:
            return state - 1

        default:
            return state
    }
}