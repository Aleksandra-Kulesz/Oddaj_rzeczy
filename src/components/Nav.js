import React, {Component} from 'react';
import {Link} from "react-scroll";

class Nav extends Component {
    state = {
        isOpen: false
    };

    handleNavClick = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    render() {
        if (this.state.isOpen === true) {
            return (
                <nav>
                    <div onClick={this.handleNavClick} className="menu_opened">
                            <span/>
                            <span/>
                            <span/>
                    </div>
                    <ul className='opened_list'>
                        <Link>
                            <li className='opened_list_elem'>Start</li>
                        </Link>
                        <Link>
                            <li className='opened_list_elem'>O co chodzi?</li>
                        </Link>
                        <Link>
                            <li className='opened_list_elem'>O nas</li>
                        </Link>
                        <Link>
                            <li className='opened_list_elem'>Fundacje i organizacje</li>
                        </Link>
                        <Link>
                            <li className='opened_list_elem'>Kontakt</li>
                        </Link>
                    </ul>
                </nav>
            )
        } else {
            return (
                <nav>
                    <div onClick={this.handleNavClick} className="menu_closed">
                        <div className="hamburger">
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    </div>
                </nav>
            )
        }
    }
}

export {Nav};