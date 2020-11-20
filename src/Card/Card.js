import React from 'react';
import './Card.css';
import {Button} from 'reactstrap';

export default function Card({
  id,
  type,
  imgSrc,
  title,
  description,
  clickHandler,
}) {
  return (
    <div className={`col-md-4 card-project ${type}`}>
      <div className="card">
        <img className="card-img-top" src={imgSrc} alt="Project" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <Button
            className="btn-view"
            value={id}
            onClick={clickHandler}
            outline
            color="link"
          >
            VIEW PROJECT
          </Button>
        </div>
      </div>
    </div>
  );
}
