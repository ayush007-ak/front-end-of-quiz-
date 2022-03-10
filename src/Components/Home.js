import React, { Component } from 'react'
import HomeCss from '../Css/Home.module.css';
import logo from '../Images/undraw_quiz_nlyh.svg';

import { Navbar, Navlink, Container, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>

                <body className={HomeCss}>

                    <div className={HomeCss.main_header}>
                        <nav className="navbar navbar-expand-lg">
                            <div className="container">
                                <a className="navbar-brand" href="#">QuizGenius</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">AboutUs</a>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>



                    <div className={HomeCss.header_hero}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-10 mx-auto">
                                    <div className={HomeCss.header_hero_text}>
                                        <h2><span>QuizGenius</span> For Everyone</h2>
                                        <p>Here You can check your MCQ skills by taking different test and quiz of different subjects please take a moment to login and register to take the quiz  </p>
                                        <div className={HomeCss.header_text_btn}>
                                            <Link to="/login" className={HomeCss.my_btn1}>Sign In</Link>
                                            <Link to="/register" className={HomeCss.my_btn}>Register</Link>


                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-6 col-10 mx-auto">
                                    <figure className={HomeCss.images}>
                                        <div className={HomeCss.animated}>
                                            <img src={logo} className="img-fluid" alt="" />
                                        </div>

                                    </figure>

                                </div>
                            </div>
                        </div>

                    </div>


                </body>


            </div>
        )
    }
}
