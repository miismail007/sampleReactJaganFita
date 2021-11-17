import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import About from './About'

function RouterExample() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <Link className="navbar-brand" to="/">Router Example</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item" >
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to="/gallery">Gallery</Link>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<h1>Home</h1>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<h1>Contact</h1>}/>
                        <Route path="/gallery" element={<h1>Gallery</h1>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default RouterExample
