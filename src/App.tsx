import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";
// import {OnOff} from "./components/OnOff/OnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(true)

    // const onClick = (value: string) => {
    //     console.log("click with id = " + value)
    // }

  return (
      <div>
          asd
          {/*<Accordion titleValue={'Menu collaps'}*/}
          {/*           onChange={ () => {setAccordionCollapsed(!accordionCollapsed)} }*/}
          {/*           collapsed={accordionCollapsed}*/}
          {/*           items={[*/}
          {/*               {title: "Sergey", value: 1},*/}
          {/*               {title: "Kiti", value: 2},*/}
          {/*               {title: "Gleb", value: 3}*/}
          {/*           ]}*/}
          {/*           onClick={onClick}/>*/}

          {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
          {/*<Rating onClick={setRatingValue} value={ratingValue}/>*/}
          {/*<UncontrolledRating onChange={ setRatingValue }/>*/}
          {/*<OnOff onChange={ setOn } on={on}/>*/}
          {/*<UncontrolledOnOff onChange={setOn}/> {on.toString()}*/}

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
