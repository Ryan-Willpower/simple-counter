import { combineReducers } from 'redux'

import Total from './total'

const rootReducer = combineReducers({
    total: Total
})

export default rootReducer