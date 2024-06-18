import React, { Fragment } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainNavigation from './Components/mainNavigation/MainNavigation';
import AllQuotes from './Components/pages/AllQuotes';
import NewQuotes from './Components/pages/NewQuotes';  
import ShowQuotes from './Components/pages/ShowQuotes';

function App() {
  return (
    <Fragment>
      <MainNavigation/>
      <Routes>
        <Route path='/' element = {<AllQuotes/>} />
        <Route path='/new' element={<NewQuotes/>}/>
        <Route path='/quotes/:id' element={<ShowQuotes/>}/>
      </Routes>
    </Fragment>
  )
}

export default App