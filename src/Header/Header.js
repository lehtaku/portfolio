import React from 'react';
import './Header.css';

import {Button} from 'reactstrap';

const styles = {
  banner: {
    background: 'url(./images/banner.webp)',
  },
};

export default function Header() {
  const SocialMediaIcon = ({href, iconName}) => (
    <a href={href}>
      <img src={`./images/icons/${iconName}.png`} alt="Social" />
    </a>
  );

  return (
    <div
      className="container-fluid banner-wrapper"
      id="home"
      style={styles.banner}
    >
      <div className="container banner">
        <div className="row">
          <div className="col-sm banner-heading">
            <h1>Aku Lehtonen</h1>
            <h4>
              A Software Developer from <br />
              Jyväskylä, Finland.
            </h4>
            <a href="mailto:aku.lehtonen97@gmail.com">
              <Button className="btn-contact" outline color="link">
                CONTACT ME
              </Button>
            </a>
            <div className="social-media-icons">
              <SocialMediaIcon
                href="https://www.instagram.com/lehtaku/"
                iconName="instagram"
              />
              <SocialMediaIcon
                href="https://github.com/lehtaku"
                iconName="github"
              />
              <SocialMediaIcon
                href="https://www.linkedin.com/in/aku-lehtonen-257166154/"
                iconName="linkedin"
              />
            </div>
          </div>

          <div className="col-sm banner-image">
            <img
              src="./images/profile-pic.webp"
              className="rounded-circle border"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
