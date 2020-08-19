import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log('App rendering')
  return (
      <div>
{/*          <AppTitle title={'The first AppTitle'}/>
          <AppTitle title={'The second AppTitle'}/>
          <Rating value={3}/>*/}
          <Accordion titleValue={'The first Accordion title'} collapsed={true}/>
          <Accordion titleValue={'The second Accordion title'} collapsed={false}/>
{/*          <Rating value={0}/>
          <Rating value={1}/>
          <Rating value={2}/>
          <Rating value={3}/>
          <Rating value={4}/>
          <Rating value={5}/>*/}
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
