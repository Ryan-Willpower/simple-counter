export const ADD = 'ADD', REMOVE = 'REMOVE'

export function add() {
    return {
        type: ADD
    }
}

export function minus() {
    return {
        type: REMOVE
    }
}