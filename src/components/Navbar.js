import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News Chrome</Link>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <button type="button" class="btn btn-dark btn-outline-secondary" style={{ border: "0px" }}>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                </button>
                                {/* <button type="button" class="btn btn-dark btn-outline-secondary" style={{ border: "0px" }}>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/About">About</Link>
                                    </li>
                                </button> */}
                                <button type="button" class="btn btn-dark btn-outline-secondary" style={{ border: "0px" }}>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/Business">Business</Link>
                                    </li>
                                </button>
                                <button type="button" class="btn btn-dark btn-outline-secondary" style={{ border: "0px" }}>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/Entertainment">Entertainment</Link>
                                    </li>
                                </button>
                                <button type="button" class="btn btn-dark btn-outline-secondary" style={{ border: "0px" }}>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/General">General</Link>
                                    </li>
                                </button>
                                <button type="button" class="btn btn-dark btn-outline-secondary" style={{ border: "0px" }}>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/Health">Health</Link>
                                    </li>
                                </button>
                                <button type="button" class="btn btn-dark btn-outline-secondary" style={{ border: "0px" }}>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/Science">Science</Link>
                                    </li>
                                </button>
                                <button type="button" class="btn btn-dark btn-outline-secondary" style={{ border: "0px" }}>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/Sports">Sports</Link>
                                    </li>
                                </button>
                                <button type="button" class="btn btn-dark btn-outline-secondary" style={{ border: "0px" }}>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/Technology">Technology</Link>
                                    </li>
                                </button>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
