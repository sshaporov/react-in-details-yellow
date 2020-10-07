import React, {Dispatch, SetStateAction, useMemo, useState} from "react";
import {Select} from "./Select";

export default {
    title: 'Select.Memo',
    component: Select
}

const SelectContainer = React.memo(Select)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [value, setValue] = useState(null)
    const [cities, setCities] = useState([
        {title: "gomel", contryID: 1, count: 999, value: "1"},
        {title: "grodmo", contryID: 1, count: 999, value: "2"},
        {title: "mogilev", contryID: 1, count: 999, value: "3"},
        {title: "minsk", contryID: 1, count: 1001, value: "4"},
        {title: "vitebsk", contryID: 1, count: 999, value: "5"},
        {title: "moscov", contryID: 2, count: 1001, value: "6"},
        {title: "kiev", contryID: 3, count: 1001, value: "7"},
        {title: "brest", contryID: 1, count: 999, value: "8"},

    ])

    const newCitiesArrMore1000 = useMemo(() => {
        const newCitiesArrMore1000 = cities.filter((c) => c.count > 1000)
        return newCitiesArrMore1000
    }, [cities])

    const newCitiesArrCountyID = useMemo(() => {
        const newCitiesArrCountyID = cities.filter((c) => c.contryID === 1)
        return newCitiesArrCountyID
    }, [cities])

    const newCitiesArrStartM = useMemo(() => {
        const newCitiesArrCountyID = cities.filter((c) => c.title.toLowerCase().indexOf("m") === 0)
        return newCitiesArrCountyID
    }, [cities])

    console.log("rendering")

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <SelectContainer onChange={setValue}
                         value={value}
                         items={newCitiesArrMore1000}
        />
        <SelectContainer onChange={setValue}
                         value={value}
                         items={newCitiesArrCountyID}
        />
        <SelectContainer onChange={setValue}
                         value={value}
                         items={newCitiesArrStartM}
        />
    </>
}


