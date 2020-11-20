import React from 'react';
import './ProjectModal.css';

import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

export default function ProjectModal({onCloseModal, isOpen, project}) {
  return (
    <Modal
      isOpen={isOpen}
      toggle={onCloseModal}
      className="modal-xl"
      centered
      scrollable={false}
    >
      <ModalHeader className="project-title" toggle={onCloseModal}>
        {project.title}
      </ModalHeader>
      <ModalBody>
        <p>{project.description}</p>
        <a className="link-repository" href={project.repository.url}>
          <Button outline color="link" className="btn-repository">
            <img src={project.repository.icon} alt="Repository" />
            Repository
          </Button>
        </a>
      </ModalBody>
      <ModalHeader>Technologies</ModalHeader>
      <ModalBody>
        <ul className="modal-tech-list">
          {project.technologies.map((tech, index) => (
            <li key={index.toString()}>- {tech}</li>
          ))}
        </ul>
      </ModalBody>
      <ModalHeader>Images</ModalHeader>
      <ModalBody>
        <div className="gallery-wrapper">
          {project.images.map(({original}, index) => {
            return (
              <img
                key={index.toString()}
                src={original}
                alt=""
                className="gallery-img"
              />
            );
          })}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          outline
          color="link"
          className="btn-close-modal"
          onClick={onCloseModal}
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
