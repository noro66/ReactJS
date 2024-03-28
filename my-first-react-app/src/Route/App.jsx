import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
       <BrowserRouter>
           <Routes>
               <Route  path='/' element={<Layout/>} >
                   <Route index element={<Home />} />
                   <Route path='contacts' element={<Contact />} />
                   <Route path='*' element={<NotFound/>} />
               </Route>
           </Routes>
       </BrowserRouter>
    );
}