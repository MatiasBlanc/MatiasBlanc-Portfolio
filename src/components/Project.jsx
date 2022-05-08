import projectJson from '../json/Project.json'

function Project() {
    return (
    <>
    { projectJson.map(project => (
      <article className="w-full lg:w-5/12 xl:w-1/4 p-4 bg-white-300 rounded-xl">
          <img className="w-full aspect-video font-bold rounded-xl" src={project.image} alt="" />
            <h2 className="font-rb text-dark text-3xl mt-6">{project.name}</h2>
            <ul className="flex card__category mt-3">
              <li>{project.language[0]}</li>
            </ul>
          <section className="flex flex-col mt-6">
            <a className="card__btn bg-primary" href="">Code</a>
            <a className="card__btn bg-secondary" href="">Live</a>
          </section>
      </article>
    ))
    }
    </>
    )
  }
  
  export default Project
  