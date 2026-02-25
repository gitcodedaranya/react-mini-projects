import React from 'react';
import "./App.css";   // CSS included
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Counter from './pages/Counter'
import TodoApp from './pages/TodoApp'
import FormValidationApp from './pages/FormValidation'

function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/' element={<Home/>} />
        <Route path='/counter' element={< Counter/>} />
        <Route path='/todoapp' element={< TodoApp />} />
        <Route path='/formvalidationapp' element={< FormValidationApp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;