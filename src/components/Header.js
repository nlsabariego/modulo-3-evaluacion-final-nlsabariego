import React from "react";
import "../stylesheets/Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to='/'>
      <header className='header'>
        <img className='header__image' src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png' alt='Rick and Morty' />
      </header>
    </Link>
  );
}

export default Header;
