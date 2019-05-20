import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = (props) => {

    const clockLinkRef = React.createRef();
    const stoperLinkRef = React.createRef();


    return (
        <div className="header">
            <h1>{props.title}</h1>
            <Link className="link" to="/clock" ref={clockLinkRef}>clock</Link>
            <Link className="link" to="/stoper" ref={stoperLinkRef}>stoper</Link>
        </div>
    );
}

export default Header;