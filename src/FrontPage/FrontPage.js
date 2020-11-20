import React, {useState, useEffect} from 'react';
import $ from 'jquery';

import './FrontPage.css';
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';
import ProjectModal from '../Modal/ProjectModal';
import Portfolio from '../Portfolio/Portfolio';

export default function FrontPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectToShow, setProjectToShow] = useState({
    id: null,
    title: null,
    type: null,
    caption: null,
    description: null,
    technologies: [],
    thumbnail: null,
    repository: {
      icon: null,
      url: null,
    },
    images: [],
  });

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects([...data]));
    $('.site-wrapper').delay(500).animate({opacity: 1}, 500);
  }, []);

  const openModal = (event) => {
    const project = projects.find((proj) => proj.id === event.target.value);
    if (project) {
      setProjectToShow(project);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="site-wrapper">
      <ProjectModal
        isOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
        project={projectToShow}
      />
      <Header />
      <About />
      <Skills />
      <Portfolio projects={projects} onViewProject={openModal} />
      <Footer />
    </div>
  );
}
