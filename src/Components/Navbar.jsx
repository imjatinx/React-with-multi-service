import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">RP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link className="nav-a text-decoration-none text-white" aria-current="page" to="/API">API</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-a text-decoration-none text-white" aria-current="page" to="/Firebase">FirebaseAuth</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
