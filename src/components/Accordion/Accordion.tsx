import React from "react";

type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
    items: ItemType[]
    onClick: (value: any) => void
}
export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle onChange={ props.onChange }
                            title={props.titleValue}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return(
        <h3 onClick={ (e) => props.onChange()}> - {props.title} - </h3>
    )
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return(
        <ul>
            { props.items.map( (i, index) => <li onClick={ () => { props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}


