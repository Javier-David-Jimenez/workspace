import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function PublicLayout () {
    return (
        <>
            <div id="sidebar">
                <h1>React router Veridas
                    <nav>
                        <ul>
                            <li>
                                <Link to={'/clock'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/people'}>People</Link>
                            </li>
                        </ul>    
                    </nav>
                </h1>
            </div>
            <div id="detail"><Outlet /></div>
        </>
    );
}
