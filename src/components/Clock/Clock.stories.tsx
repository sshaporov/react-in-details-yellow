import React from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock
}

export const DigitalExample = () => {
    return <Clock mode={'digital'}/>
}

export const AnalogExample = () => {
    return <Clock mode={'analog'}/>
}