import React from "react";

type AccordionPropsType = {
    titleValue: string
    onClick: () => void
    collapsed: boolean
}
function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle onClick={ props.onClick } title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return(
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;

