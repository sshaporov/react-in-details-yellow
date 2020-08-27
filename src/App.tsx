import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";

function App() {
    console.log('App rendering')
  return (
      <div>
          {/*<Accordion titleValue={'Menu collaps'} collapsed={true}/>*/}
          {/*<Accordion titleValue={'Menu expand'} collapsed={false}/>*/}
          <UncontrolledAccordion titleValue={'Menu'}/>

          {/*<Rating value={0}/>*/}
          {/*<Rating value={1}/>*/}
          {/*<Rating value={2}/>*/}
          {/*<Rating value={3}/>*/}
          {/*<Rating value={4}/>*/}
          {/*<Rating value={5}/>*/}
          <UncontrolledRating />

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
