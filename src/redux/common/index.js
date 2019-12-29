
import TYPE from './types'

const initState = {
  version: 'v1.0.0'
}

export function common(state = initState, action) {
    switch (action.type) {
        case TYPE.VESION:
            return { ...state, version:action.version }
        default:
            return state
    }
}