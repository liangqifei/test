import types from './types'
const actions = {
    setVersion: (data) => {
      return { type: types.VESION, payload: data }
    },
 }
 export default  actions