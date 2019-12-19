import React, {Component} from 'react';
import {Link} from "react-router-dom";

const LogBar = (props) => {
    return (
        <div className="bar">
            <Link to='/login'><button>Zaloguj</button></Link>
            <Link to='/register'><button>Załóż Konto</button></Link>
        </div>
    )
};

export {LogBar};