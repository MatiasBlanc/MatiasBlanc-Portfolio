function Project() {
    return (
      <article className="w-full lg:w-5/12 xl:w-1/4 p-4 bg-white-300 rounded-xl">
          <img className="w-full aspect-video font-bold rounded-xl" src="https://i.imgur.com/nYupHfv.png" alt="" />
            <h2 className="font-rb text-dark text-3xl mt-6">Linktree Page</h2>
            <ul className="flex project__technologies mt-3">
              <li>Html</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          <section className="flex flex-col mt-6">
            <a className="project__btn bg-primary" href="">Code</a>
            <a className="project__btn bg-secondary" href="">Live</a>
          </section>
      </article>
    )
  }
  
  export default Project
  