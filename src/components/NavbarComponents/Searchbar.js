import React from 'react'

function Searchbar() {
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
        <div className="div justify-content-end">
        <div className="d-flex ">
            <input className="form-control me-2" type="search" id='searchbar' placeholder="Search" onKeyUp={processChange} aria-label="Search" />
            <button className="btn btn-outline-info bg-dark text-light" type="submit">Search</button>
        </div>
        </div>
    )
}

export default Searchbar
