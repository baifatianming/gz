


import { combineReducers } from 'redux'
import goodsReducer from './goodsReducer'
import messageReducers from './messageReducers'
import superReducer from './superReducer.js'
const indexReducer = combineReducers({
  goodsReducer,messageReducers,superReducer
})

export default indexReducer
