import React from 'react'

export default function Headings() {
    return (
        <div>
            <div className="d-flex justify-content-start ">
                <div className="dropdown my-2 mx-3">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Board
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="/">Action</a></li>
                    </ul>
                </div>
                <h5 className='btn btn-secondary my-2 mx-3'>Project Management</h5>
                <span className='btn btn-secondary my-2 mx-3'>&#9734;</span>
                <span className='btn btn-secondary my-2 mx-3'>Inktistic Ent</span>
                <span className='btn-gray bg-gray bg-lighten-xs btn  btn-secondary my-2 mx-3'>Workspace visible</span>
            </div>
        </div>
    )
}
