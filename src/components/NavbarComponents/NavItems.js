import React from 'react'

function NavItems() {
    return (
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item">Action</a></li>
            </ul>
        </li>
    )
}

export default NavItems
