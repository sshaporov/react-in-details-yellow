import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

test ("reducer should change value to opposite", () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(true)
    expect( () => {
        reducer(state, {type: "FAKE"})
    }).toThrowError();
})