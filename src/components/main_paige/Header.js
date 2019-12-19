import React, {Component} from 'react';
import {LogBar} from "../LogBar";
import {Nav} from "../Nav";

const Header = (props) => {
    return (
        <header>
            <LogBar/>
            <Nav/>
            <div className="header_content">
                <div className="header_content_filter">
                    <h2>Zacznij pomagać!</h2>
                    <h1>ODDAJ Niechciane rzeczy w zaufane ręce</h1>
                    <div className="decoration"/>
                    <button>załóż konto</button>
                </div>
            </div>
        </header>
    )
};

export {Header};