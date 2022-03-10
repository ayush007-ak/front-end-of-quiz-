import React, { Component } from 'react'


import CssData from './CssData'

import JavaData from './JavaData';
import { Routes, Route, Switch } from 'react-router-dom';
import Login from './Login';
import PythonData from './PythonData';
import Database from './Database';
import Welcome from './Welcome';
import Home from './Home';
import Register from './Register';



export default class Quiz extends Component {
    render() {
        return (

            <React.Fragment>


                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="/css" element={<CssData />} />
                    <Route path="/java" element={<JavaData />} />
                    <Route path="/python" element={<PythonData />} />
                    <Route path="/database" element={<Database />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/login" element={<Login/>} />



                </Routes>



            </React.Fragment>

        )
    }
}
