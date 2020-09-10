import React, {useState} from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}
const callback = action("On or Off clicked")
export const OnMode = () => <UncontrolledOnOff onChange={ callback } defaultOn={true} />
export const OffMode = () => <UncontrolledOnOff onChange={ callback } defaultOn={false} />

