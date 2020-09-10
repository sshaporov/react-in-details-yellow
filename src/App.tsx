import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';
// import {OnOff} from "./components/OnOff/OnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(true)

  return (
      <div>
          <Accordion titleValue={'Menu collaps'}
                     onClick={ () => {setAccordionCollapsed(!accordionCollapsed)} }
                     collapsed={accordionCollapsed}/>
          <UncontrolledAccordion titleValue={'Menu'}/>

          {/*<Rating onClick={setRatingValue} value={ratingValue}/>*/}
          <UncontrolledRating onChange={ setRatingValue }/>

          {/*<OnOff onChange={ setOn } on={on}/>*/}
          <UncontrolledOnOff onChange={setOn}/> {on.toString()}

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
