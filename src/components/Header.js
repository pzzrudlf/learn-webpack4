import React, { Component } from 'react';

const Header = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-1 col-xs-offset-11">
          <h1>Header</h1>
          <hr />
          { props.homeLink }
        </div>
      </div>
    </div>
  );
}

export default Header;