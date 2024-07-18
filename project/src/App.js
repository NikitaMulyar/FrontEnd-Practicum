// import libs:
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import MyForm from './components/Form';
import About from './components/About';
import Contacts from './components/Contacts';
import { Route, Routes } from 'react-router-dom';

import './styles/App.css';

const App = () => {
    return (
        <div id="base">
            <Header/>
            <Routes>
                <Route path="" element={<Main/>}/>
                <Route path="regform" element={<MyForm/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contacts" element={<Contacts/>}/>
            </Routes>
        </div>
    );
};

export default App;
