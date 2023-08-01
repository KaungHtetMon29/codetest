import { addview } from './action'
import { ADD, ADDTEAM, ADDVIEW, DELETE, SIGNIN, UPDATE, VIEW } from './consts'
const initialState = {
  signed: false,
  view: false,
  update: {},
  del: {},
  add: [],
  addview: {},
  addteam: {}
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return { ...state, signed: action.payload }
    case VIEW:
      return { ...state, view: action.payload }
    case UPDATE:
      return { ...state, update: action.payload }
    case DELETE:
      return { ...state, del: action.payload }
    case ADD:
      return { ...state, add: [...action.payload] }
    case ADDVIEW:
      return { ...state, addview: { ...addview, ...action.payload } }
    case ADDTEAM:
      return { ...state, addteam: { ...action.payload } }
    default:
      return state
  }
}
export default rootReducer
