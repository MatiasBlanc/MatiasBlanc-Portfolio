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
                    <a className="btn btn--code" target="_blank"  href={project.buttons.Code}>Code</a>
                    <a className="btn btn--live" target="_blank"  href={project.buttons.Live}>Live</a>
                </section>
            </article>
        )
    )}
    </section>
    );
}

export default Project