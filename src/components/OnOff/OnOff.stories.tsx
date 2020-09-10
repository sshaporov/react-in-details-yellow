import React, {useState} from "react";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff
}

export const OnMode = () => <OnOff onChange={x=>x} on={true}/>
export const OffMode = () => <OnOff onChange={x=>x} on={false}/>

export const ModeChanging = () => {
    let [on, setOn] = useState<boolean>(true)
    return <OnOff on={on} onChange={setOn} />
}

