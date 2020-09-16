import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action("Accordion mode change event fired")
const onClickCallBack = action("Some item was clicked")

export const CollapsedMode = () => <Accordion titleValue='Menu Collapsed'
                                              onChange={callback}
                                              collapsed={true}
                                              items={[]}
                                              onClick={onClickCallBack}/>



export const ExpandedMode = () => <Accordion titleValue='Menu Expanded'
                                             onChange={callback}
                                             collapsed={false}
                                             items={[{title: "Sergey", value: 1}, {title: "Kiti", value: 2},{title: "Gleb", value: 3}]}
                                             onClick={onClickCallBack}/>



export const ChangingMode = () => {
    let [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue='Expanded'
                      onChange={() => setValue(!value)}
                      collapsed={value}
                      items={[
                          {title: "Sergey", value: 1},
                          {title: "Kiti", value: 2},
                          {title: "Gleb", value: 3}
                          ]}
                      onClick={ (id) => {alert('userID = ' + id )}}/>
}