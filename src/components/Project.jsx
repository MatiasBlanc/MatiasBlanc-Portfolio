import projectJson from '../json/Project.json';

const Project = () => {
    return (
    <>
    {
        projectJson.map((project) => (
            <article key={project} className="project">
                <img className="project__image" src={project.image} alt="" />
                <h2 className="project__name">{project.name}</h2>
                <p className="project__language">Languages: {project.language}</p>
                <section className="project__btn">
                    <a className="btn btn--code" href={project.buttons.Code}>Code</a>
                    <a className="btn btn--live" href={project.buttons.Live}>Live</a>
                </section>
            </article>
        )
    )}
    </>
    );
}

export default Project

/* return (
    <article className="project">
        <h5 className="project__category">{projectJson[i].category}</h5>
        <img className="project__image" src={projectJson[i].image} alt="" />
        <h2 className="project__name">{projectJson[i].name}</h2>
        <p className="project__language">Languages: {projectJson[i].language}</p>
        <section className="project__buttons">
            <a className="project__button" href="">{projectJson[i].buttons.Code}</a>
            <a className="project__button" href="">{projectJson[i].buttons.Live}</a>
        </section>
    </article>
) */