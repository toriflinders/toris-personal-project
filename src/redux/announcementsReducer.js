const initialState = {
  announcement: {}
}

const GET_ANNOUNCE = 'GET_ANNOUNCE'
const CREATE_ANNOUNCE = 'CREATE_ANNOUNCE'
const EDIT_ANNOUNCE = 'EDIT_ANNOUNCE'
const DELETE_ANNOUNCE = 'DELETE_ANNOUNCE'


export function getAnnounce(announceObj){
  return {
    type: GET_ANNOUNCE,
    payload: announceObj
  }
}
export function createAnnounce(announceObj){
  return {
    type: CREATE_ANNOUNCE,
    payload: announceObj
  }
}
export function editAnnounce(announceObj){
  return {
    type: EDIT_ANNOUNCE,
    payload: announceObj
  }
}
export function deleteAnnounce(){
  return {
    type: DELETE_ANNOUNCE,
    payload: {}
  }
}

export default function announcementsReducer(state = initialState, action){
  const {type, payload} = action

  switch(type){
    case GET_ANNOUNCE:
      return {...state, announcement: payload}
    case CREATE_ANNOUNCE:
      return {...state, announcement: payload}
    case EDIT_ANNOUNCE:
      return {...state, announcement: payload}
    case DELETE_ANNOUNCE:
      return {...state, announcement: payload}
    default:
      return state
  }
}


