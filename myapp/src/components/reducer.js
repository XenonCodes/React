export const profileReducer = (state = false, action) => {
    switch (action.type) {
        case 'SWITCH_PROFILE':
            return !state
        default: return state
    }
}