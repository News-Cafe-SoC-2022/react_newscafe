import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsCafe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" to="/" value="ae">United Arab Emirates</a></li>
                                    <li><a className="dropdown-item" to="/" value="ar">Argentina</a></li>
                                    <li><a className="dropdown-item" to="/" value="in">India</a></li>
                                    <li><a className="dropdown-item" to="/" value="at">Austria</a></li>
                                    <li><a className="dropdown-item" to="/" value="au">Australia</a></li>
                                    <li><a className="dropdown-item" to="/" value="be">Belgium</a></li>
                                    <li><a className="dropdown-item" to="/" value="bg">Bulgaria</a></li>
                                    <li><a className="dropdown-item" to="/" value="br">Brazil</a></li>
                                    <li><a className="dropdown-item" to="/" value="ca">Canada</a></li>
                                    <li><a className="dropdown-item" to="/" value="ch">Switzerland</a></li>
                                    <li><a className="dropdown-item" to="/" value="cn">China</a></li>
                                    <li><a className="dropdown-item" to="/" value="co">Colombia</a></li>
                                    <li><a className="dropdown-item" to="/" value="cu">Cuba</a></li>
                                    <li><a className="dropdown-item" to="/" value="cz">Czech Republic</a></li>
                                    <li><a className="dropdown-item" to="/" value="de">Germany</a></li>
                                    <li><a className="dropdown-item" to="/" value="eg">Egypt</a></li>
                                    <li><a className="dropdown-item" to="/" value="fr">France</a></li>
                                    <li><a className="dropdown-item" to="/" value="gb">United Kingdom</a></li>
                                    <li><a className="dropdown-item" to="/" value="gr">Greece</a></li>
                                    <li><a className="dropdown-item" to="/" value="hk">Hong Kong</a></li>
                                    <li><a className="dropdown-item" to="/" value="hu">Hungary</a></li>
                                    <li><a className="dropdown-item" to="/" value="id">Indonesia</a></li>
                                    <li><a className="dropdown-item" to="/" value="ie">Ireland</a></li>
                                    <li><a className="dropdown-item" to="/" value="il">Israel</a></li>
                                    <li><a className="dropdown-item" to="/" value="it">Italy</a></li>
                                    <li><a className="dropdown-item" to="/" value="jp">Japan</a></li>
                                    <li><a className="dropdown-item" to="/" value="kr">South Korea</a></li>
                                    <li><a className="dropdown-item" to="/" value="lt">Lithuania</a></li>
                                    <li><a className="dropdown-item" to="/" value="lv">Latvia</a></li>
                                    <li><a className="dropdown-item" to="/" value="ma">Morocco</a></li>
                                    <li><a className="dropdown-item" to="/" value="mx">Mexico</a></li>
                                    <li><a className="dropdown-item" to="/" value="my">Malaysia</a></li>
                                    <li><a className="dropdown-item" to="/" value="ng">Nigeria</a></li>
                                    <li><a className="dropdown-item" to="/" value="nl">Netherlands</a></li>
                                    <li><a className="dropdown-item" to="/" value="no">Norway</a></li>
                                    <li><a className="dropdown-item" to="/" value="nz">New Zealand</a></li>
                                    <li><a className="dropdown-item" to="/" value="ph">Philippines</a></li>
                                    <li><a className="dropdown-item" to="/" value="pl">Poland</a></li>
                                    <li><a className="dropdown-item" to="/" value="pt">Portugal</a></li>
                                    <li><a className="dropdown-item" to="/" value="ro">Romania</a></li>
                                    <li><a className="dropdown-item" to="/" value="rs">Serbia</a></li>
                                    <li><a className="dropdown-item" to="/" value="ru">Russia</a></li>
                                    <li><a className="dropdown-item" to="/" value="sa">Saudi Arabia</a></li>
                                    <li><a className="dropdown-item" to="/" value="se">Sweden</a></li>
                                    <li><a className="dropdown-item" to="/" value="sg">Singapore</a></li>
                                    <li><a className="dropdown-item" to="/" value="si">Slovenia</a></li>
                                    <li><a className="dropdown-item" to="/" value="sk">Slovakia</a></li>
                                    <li><a className="dropdown-item" to="/" value="th">Thailand</a></li>
                                    <li><a className="dropdown-item" to="/" value="tr">Turkey</a></li>
                                    <li><a className="dropdown-item" to="/" value="tw">Taiwan</a></li>
                                    <li><a className="dropdown-item" to="/" value="ua">Ukraine</a></li>
                                    <li><a className="dropdown-item" to="/" value="us">United States</a></li>
                                    <li><a className="dropdown-item" to="/" value="ve">Venezuela</a></li>
                                    <li><a className="dropdown-item" to="/" value="za">South Africa</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
