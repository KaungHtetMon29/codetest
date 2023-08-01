import Addplayer from './addplayer/Addplayer'
import { ADD, ADDTEAM, ADDVIEW, DELETE, SIGNIN, UPDATE, VIEW } from './consts'

export const issigned = (value) => {
  return { type: SIGNIN, payload: value }
}
export const tview = (value) => {
  return { type: VIEW, payload: value }
}
export const update = (value) => {
  return { type: UPDATE, payload: value }
}
export const del = (value) => {
  return { type: DELETE, payload: value }
}
export const addplayer = (value) => {
  return { type: ADD, payload: value }
}
export const addview = (value) => {
  return { type: ADDVIEW, payload: value }
}
export const toteam = (value) => {
  return { type: ADDTEAM, payload: value }
}
export const pop = (value) => {
  return { type: Addplayer, payload: value }
}
