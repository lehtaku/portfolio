import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <p>
              Handcrafted with
              <img alt="Icon" src="./images/icons/react-white.png" />
              +
              <img alt="Icon" src="./images/icons/coffee.png" />
            </p>
          </div>
          <div className="col-sm">
            <p>
              © 2020 <b>Aku Lehtonen</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
