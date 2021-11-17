import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">{props.logo}</a>
            <ul className="navbar-nav">
                    {props.menu.map((menuItem)=>
                        <li className="nav-item" key={Math.random()}>
                            <Link className="nav-link" to={menuItem.toLowerCase()}>{menuItem}</Link>
                        </li>
                    )}
            </ul>
        </nav>
    )
}

export default Header
