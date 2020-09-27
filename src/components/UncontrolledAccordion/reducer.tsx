type ActionType = {
    type: string
}
type StateType = {
    collapsed: boolean
}

export const TOGGLE_CONSTANT = 'TOGGLE_CONSTANT'

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            const stateCopy = {...state}
            state.collapsed = !state.collapsed
            return state
        default:
            throw new Error("Bad action type")
    }
    return state
}