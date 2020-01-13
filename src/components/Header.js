import React from "react";
import "../stylesheets/Header.scss";

function Header() {
  return (
    <header className='header'>
      <img className='header__image' src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png' alt='Rick and Morty' />
    </header>
  );
}

export default Header;
