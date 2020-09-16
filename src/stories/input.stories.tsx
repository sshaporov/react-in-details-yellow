import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input',
    //component: UncontrolledRating
}

export const UncontrolledInput = () => <input/>

export const UncontrolledInputWithTrackingValue = () => {
    const [value, setValue] = useState("")
    const change = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={change}/> - {value} </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value} </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    return <input value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={1}>minsk</option>
        <option value={2}>gomel</option>
        <option value={3}>moskow</option>
    </select>


}

export const ControlledInputWithFixedValue = () =>
    <input value={"test"}/>