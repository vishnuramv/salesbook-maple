import '../styles/header.css';
import M from 'materialize-css';  
import { useEffect } from 'react';
import Logo from '../assets/Logo.svg'
const Header = () => {
    useEffect(() => {
        let elems = document.querySelectorAll('.dropdown-trigger');
        let navelems = document.querySelectorAll('.sidenav');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225, hover: true, coverTrigger: false});
        M.Sidenav.init(navelems);
    });
    return (
        <nav className="header">
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">Vetting</a></li>
                <li><a href="#!">management</a></li>
            </ul>
            <ul id="dropdown2" className="dropdown-content">
                <li><a href="#!">eCommerce marketing</a></li>
                <li><a href="#!">Top experts</a></li>
                <li><a href="#!">Future work</a></li>
                <li><a href="#!">eCommerce 101</a></li>
            </ul>
            <a href="/" className="header__logo"><img src={Logo} alt="logo" /></a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
            <div className="header__menu">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="/">How can we help?</a></li>
                    <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Quality standard<i className="material-icons right">arrow_drop_down</i></a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Our story</a></li>
                    <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">Blog<i className="material-icons right">arrow_drop_down</i></a></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Apply as an expert</a></li>
                    <li><a href="/">Login</a></li>
                    <li><a href="/" className="btn z-depth-1">Get Started</a></li>
                </ul>
            </div>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="/">How can we help?</a></li>
                <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Quality standard<i className="material-icons right">arrow_drop_down</i></a></li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Our story</a></li>
                <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">Blog<i className="material-icons right">arrow_drop_down</i></a></li>
                <li><a href="/">Apply as an expert</a></li>
                <li><a href="/">Login</a></li>
                <li><a href="/" className="btn z-depth-1">Get Started</a></li>
            </ul>
        </nav>
    )
}

export default Header
