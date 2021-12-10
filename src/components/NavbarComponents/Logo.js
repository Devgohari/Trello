import React from 'react'
import icon from './icon.png'
function Logo() {
    return (
        <div>
            <img src={icon} alt="" style={{ height: '25px', width: '25px' }} />
                <a className="navbar-brand" href='/'>Trello</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        </div>
    )
}

export default Logo
