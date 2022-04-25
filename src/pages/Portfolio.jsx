import Navbar from '../components/Navbar';
import Project from '../components/Project';

function Portfolio() {
    return (
      <>
        {/* <Navbar /> */}
        <div>
        <section className='divider'>
            <h2 className='divider__text'>Skills</h2>
        </section>
        <section>
          
        </section>
        </div>
        <div className='bg-white-200 my-20 pb-10'>
          <section className='divider'>
            <h2 className='divider__text'>Proyectos</h2>
          </section>
          <section className='w-90 md:w-3/5 lg:w-90 mx-auto flex justify-center flex-wrap gap-4 lg:gap-10'>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </section>
        </div>
      </>
    )
  }
  
  export default Portfolio
  