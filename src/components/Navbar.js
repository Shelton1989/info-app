import React, {Component} from 'react';
import './Navbar.css';
import logo from '../img/navlogocolor.png';

class Navbar extends Component {
    render(){
        return (
            <div className="navbar">
                <div className="container">
                    <a href="../index.html"><img className="logo" alt="site logo" src={logo}/></a>
                    <div className="navcontainer">
                        <ul className="navgroup">
                            <li><a className="navlink" href="#">Home</a></li>
                            <li><a className="navlink" href="#">About</a></li>
                            <li><a className="navlink" href="#">Services</a></li>
                            <li><a className="navlink" href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;