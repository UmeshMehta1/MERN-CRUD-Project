import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './User';
import Create from './Create';
import Update from './Update';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<User/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/update/:id" element={<Update/>} />
        
      </Routes>
    </BrowserRouter>
   

  )
}

export default App