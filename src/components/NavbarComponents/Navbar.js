import React from 'react'
import NavItems from './NavItems';
import Logo from './Logo'
// component life cycle
// mutable and immutable
// shallow comparing and deep comparings
// rest operator
export default function Navbar() {
    function debounce(func) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, 1000);
        };
    }
    function saveInput() {
        console.log(document.getElementById('searchbar').value);
    }
    const processChange = debounce(saveInput);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary ">
            <div className="container-fluid">
                    <Logo/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavItems item1='Starred' />
                        <NavItems item1='Recent' />
                        <NavItems item1='Item-3' />
                    </ul>
                    <div className="d-flex">
                        <input className="form-control me-2" type="search" id='searchbar' placeholder="Search" onKeyUp={processChange} aria-label="Search" />
                        <button className="btn btn-outline-info bg-dark text-light" type="submit" >Search</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
