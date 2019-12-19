import React from 'react';
import {
    HashRouter,
    Route
} from 'react-router-dom';
import {Main} from "./components/main_paige/Main";


function App() {
    return (
        <HashRouter>
            <div className="container">
                <Route exact path='/' component={Main}/>
            </div>
        </HashRouter>
    );
}

export default App;
