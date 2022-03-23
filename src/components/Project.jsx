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
                    <a href={project.buttons.Code} target="_black">
                        <button className="btn btn--code">
                            <span className='btn__text--code'>Code</span>
                        </button>
                    </a>
                    <a href={project.buttons.Live} target="_black"><button className="btn btn--live">Live</button></a>
                </section>
            </article>
        )
    )}
    </section>
    );
}

export default Project