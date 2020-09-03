import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RaitingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledRatingVersion2} from "./components/UncontrolledRating/UncontrolledRatingVersion2";

function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RaitingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)


  return (
      <div>
          <Accordion titleValue={'Menu collaps'} onClick={setAccordionCollapsed} collapsed={accordionCollapsed}/>
          <UncontrolledAccordion titleValue={'Menu'}/>

          <Rating onClick={setRatingValue} value={ratingValue}/>
          <UncontrolledRating />
          <UncontrolledRatingVersion2 />

          <OnOff />

      </div>
  );
}

type AppTitlePropsType = {
    title: string
}
function AppTitle(props: AppTitlePropsType) {
    console.log('AppTitle rendering')
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
