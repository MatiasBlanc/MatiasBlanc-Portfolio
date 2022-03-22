import projectJson from '../json/Project.json';

const Project = () => {
    return (
    <section id='project' className='project__container'>
    {
        projectJson.map((project) => (
            <article key={project} className="project">
                <img className="project__image" src={project.image} alt="" />
                <h2 className="project__name">{project.name}</h2>
                <p className="project__language">Languages: {project.language}</p>
                <section className="project__btn">
                    <button className="btn btn--code"><a href={project.buttons.Code} target="_black"  className='btn__text--code'>Code</a></button>
                    <button className="btn btn--live"><a href={project.buttons.Live} target="_black" >Live</a></button>
                </section>
            </article>
        )
    )}
    </section>
    );
}

export default Project