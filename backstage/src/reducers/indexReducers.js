


import { combineReducers } from 'redux'
import goodsReducer from './goodsReducer'
import messageReducers from './messageReducers'
const indexReducer = combineReducers({
  goodsReducer,messageReducers
})

export default indexReducer
