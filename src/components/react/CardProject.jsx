import './CardProjectStyles.css';

export const CardProject = ({ id, image, title, technologies, description, github, live, star }) => {

  return (
    <div id={id} className="project-card">
      <div className='project-info-container'>
        <img className="project-img" src={image} alt={title} loading="lazy" />
        <h3>{title}</h3>
        <div className="technology-container">
          {
            technologies.map(({ style, icon, name, reference, href }, index) => {
              if (reference) {
                return (
                  <div key={index} className={`technology ${reference}`}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="technology-name">{name}</a>
                  </div>
                )
              } else {
                return (
                  <div key={index} className={`technology ${style}`}>
                    <img className='technology-icon' src={icon} alt={name} loading="lazy" />
                    <span className="technology-name">{name}</span>
                  </div>
                )
              }
            })
          }
        </div>

        <p className='project-description'>{description}</p>
      </div>
      
      
      <div className="btn-container">
        {
          github ? 
            (
              <a className={`btn-links github ${star ? "star" : ""}`} href={github} target="_blank" rel="noopener noreferrer">
                {star ? star : "GitHub"}
              </a>
            ) : ""
        }
        {
          live ? (<a className="btn-links demo" href={live} target="_blank" rel="noopener noreferrer">Demo</a>) : ""
        }
        
        
      </div>
    </div>
  )
}