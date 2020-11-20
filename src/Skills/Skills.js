import React, {useState} from 'react';
import $ from 'jquery';
import './Skills.css';

import {Button, ButtonGroup} from 'reactstrap';

export default function Skills() {
  const [section, setSection] = useState('frontend');

  const TechListItem = ({iconName, name}) => (
    <li>
      <p>
        <img src={`./images/icons/${iconName}.png`} alt="Technology" />
      </p>
      <p>{name}</p>
    </li>
  );

  const getSection = () => {
    const backend = (
      <div className="row">
        <div className="col-sm tech-list">
          <ul>
            <TechListItem iconName="nodejs" name="Node.js" />
            <TechListItem iconName="php" name="PHP" />
            <TechListItem iconName="csharp" name="C# / .NET" />
          </ul>
        </div>
        <div className="col-sm tech-list">
          <ul>
            <TechListItem iconName="laravel" name="Laravel" />
            <TechListItem iconName="lumen" name="Lumen" />
            <TechListItem iconName="socketio" name="Socket.IO" />
          </ul>
        </div>
        <div className="col-sm tech-list">
          <ul>
            <TechListItem iconName="mysql" name="MySQL" />
            <TechListItem iconName="mongodb" name="MongoDB" />
          </ul>
        </div>
      </div>
    );

    const frontend = (
      <div className="row">
        <div className="col-sm tech-list">
          <ul>
            <TechListItem iconName="react" name="React & React Native" />
            <TechListItem iconName="angular" name="Angular" />
            <TechListItem iconName="ionic" name="Ionic" />
          </ul>
        </div>
        <div className="col-sm tech-list">
          <ul>
            <TechListItem iconName="html" name="HTML" />
            <TechListItem iconName="css" name="CSS" />
            <TechListItem iconName="bootstrap" name="Bootstrap" />
          </ul>
        </div>
        <div className="col-sm tech-list">
          <ul>
            <TechListItem iconName="js" name="JavaScript" />
            <TechListItem iconName="typescript" name="TypeScript" />
            <TechListItem iconName="jquery" name="jQuery" />
          </ul>
        </div>
      </div>
    );

    const tools = (
      <div className="row">
        <div className="col-sm tech-list">
          <ul>
            <TechListItem iconName="git" name="Git" />
            <TechListItem iconName="postman" name="Postman" />
            <TechListItem iconName="confluence" name="Confluence" />
          </ul>
        </div>
        <div className="col-sm tech-list">
          <ul>
            <TechListItem iconName="linux" name="Linux" />
            <TechListItem iconName="jira" name="Jira" />
            <TechListItem iconName="applestore" name="Apple Store" />
          </ul>
        </div>
        <div className="col-sm tech-list">
          <ul>
            <TechListItem iconName="googleplay" name="Google Play" />
          </ul>
        </div>
      </div>
    );

    switch (section) {
      case 'frontend':
        return frontend;
      case 'backend':
        return backend;
      case 'tools':
        return tools;
      default:
        return frontend;
    }
  };

  function changeSection(event) {
    setSection(event.target.id);
    $(`#${section}`).removeClass('active');
    $(`#${event.target.id}`).addClass('active');
  }

  return (
    <div className="container-fluid skills" id="bio">
      <div className="container">
        <div className="row">
          <div className="col-sm section-heading">
            <h1>KNOW-HOW</h1>
            <p>
              Some of the technologies I&#39;ve been working with. The list
              keeps on growing always when needed.
            </p>
            <ButtonGroup className="btn-group">
              <Button
                onClick={changeSection}
                id="frontend"
                outline
                className="btn-selector active"
                color="link"
              >
                FRONT-END
              </Button>
              <Button
                onClick={changeSection}
                id="backend"
                outline
                className="btn-selector"
                color="link"
              >
                BACKEND / DATABASE
              </Button>
              <Button
                onClick={changeSection}
                id="tools"
                outline
                className="btn-selector"
                color="link"
              >
                TOOLS / OTHER
              </Button>
            </ButtonGroup>
          </div>
        </div>
        {getSection()}
      </div>
    </div>
  );
}
