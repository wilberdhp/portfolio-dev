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
    if (allProjects.length <= endIndex) {
      viewInitialProjects()
    } else {
      viewMoreProjects()
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7 p-2 h-[65%]">
        {
          projects.map(({ image, title, technologies, description, github, live, star }, index) => (
            <CardProject key={index} id={index} image={image} title={title} technologies={technologies} description={description} github={github} live={live} star={star} />
          ))
        }
      </div>

      {
        allProjects.length <= 3 ? "" : (
          <button className="button-view" onClick={changeFunction} type="button">
            {allProjects.length <= endIndex ? textBtnLessProjects + " " : textBtnMoreProjects + " "}
            {allProjects.length <= endIndex ? (<i className="bi bi-arrow-up-circle-fill"></i>) : (<i className="bi bi-arrow-down-circle-fill"></i>)}
          </button>
        )
      }   
    </>
  )
}