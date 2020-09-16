import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

const onChangeCallback = action("Item was clicked")

export const CustomSelectWithValue = () => {
   const [value, setValue] = useState("2")
    return (
            <Select onChange={setValue}
                    value={value}
                    items={[
                        {title: "gomel", value: "1"},
                        {title: "minsk", value: "2"},
                        {title: "moskow", value: "3"}
                    ]}
            />
    )
}

export const CustomSelectWithoutValue = () => {
    const [value, setValue] = useState(null)
    return (
            <Select onChange={onChangeCallback}
                    items={[
                        {title: "gomel", value: "1"},
                        {title: "minsk", value: "2"},
                        {title: "moskow", value: "3"}
                    ]}
            />
    )
}