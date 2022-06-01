import React from "react";
import { Link } from "gatsby"

const Links = [
    {
        id: 0,
        path: '/',
        label: 'Home'
    },
    {
        id: 1,
        path: '/menu',
        label: 'Menu'
    },
    {
        id: 2,
        path: '/about',
        label: 'About'
    }
]

export default function HeaderContainer () {
    return (
        <div className="header-container">
            <div className="navbar">
                <div className="navbar-brand">
                    <div className="navbar-brand-item">
                        <Link to="" className="navbar-brand-item-link">
                            <span>Restaurant</span> <span>Inc.</span>
                        </Link>
                    </div>
                </div>
                <div className="navbar-menu">
                   { Links && Links.map(link => (
                        <div className="navbar-menu-item" key={link.id}>
                            <Link to={link.path} activeClassName="active" className="navbar-menu-item-link">
                                { link.label }
                            </Link>
                        </div>
                   ))}
                </div>
                {/* <div className="navbar-social"></div> */}
            </div>
        </div>
    )
}