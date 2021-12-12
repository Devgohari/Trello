import React from 'react'
import NavItems from './NavItems';
import Logo from './Logo'
import Searchbar from './Searchbar.js';
// component life cycle
// mutable and immutable
// shallow comparing and deep comparings
// rest operator
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary ">
            <div className="container-fluid">
                    <Logo/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavItems item1='Starred' />
                        <NavItems item1='Recent' />
                        <NavItems item1='Item-3' />
                        <Searchbar/>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
