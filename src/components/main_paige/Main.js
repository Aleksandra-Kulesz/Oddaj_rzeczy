import React, {Component} from 'react';
import {Header} from "./Header";
import {Steps} from "./Steps";

const Main = (props) => {
    return (
        <div className="container">
            <Header/>
            <Steps/>
        </div>
    )
};

export {Main};