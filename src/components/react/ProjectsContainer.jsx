import { useEffect, useState } from "react";
import { CardProject } from "./CardProject.jsx";
import './ProjectsContainer.css';

const viewProjects = (array = [], start, end) => {
  return array.slice(start, end);
}

export const ProjectsContainer = ({ allProjects, textBtnMoreProjects, textBtnLessProjects }) => {
  const [projects, setProjects] = useState([]);
  const [endIndex, setEndIndex] = useState(3);

  useEffect(() => {
    const newProjects = viewProjects(allProjects, 0, endIndex);
    setProjects(newProjects);
  }, [])

  const viewMoreProjects = () => {
    const newEndIndex = endIndex + 3;
    setEndIndex(newEndIndex);
    const newProjects = viewProjects(allProjects, 0, newEndIndex);
    setProjects(newProjects);
  }

  const viewInitialProjects = () => {
    const initialEndIndex = 3;
    setEndIndex(initialEndIndex);
    const initialProjects = viewProjects(allProjects, 0, initialEndIndex);
    setProjects(initialProjects);
  }

  const changeFunction = () => {
    if (projects.length < endIndex) {
      viewInitialProjects()
    } else {
      viewMoreProjects()
    }
  }

  return (
    <>
      <div className="projects-container">
        {
          projects.map(({ image, title, technologies, description, github, live }, index) => (
            <CardProject key={index} id={index} image={image} title={title} technologies={technologies} description={description} github={github} live={live} />
          ))
        }
      </div>

      {
        allProjects.length <= 3 ? "" : (
          <button className="button-view" onClick={changeFunction} type="button">
            {projects.length < endIndex ? textBtnLessProjects + " " : textBtnMoreProjects + " "}
            {projects.length < endIndex ? (<i className="bi bi-arrow-up-circle-fill"></i>) : (<i className="bi bi-arrow-down-circle-fill"></i>)}
          </button>
        )
      }   
    </>
  )
}