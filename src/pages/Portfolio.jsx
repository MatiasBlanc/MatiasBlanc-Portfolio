import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Skills from '../components/Skills';

function Portfolio() {
    return (
    <>
        {/* <Navbar /> */}
        <div className='my-20 pb-10'>
            <div className='divider'>
                <h2 className='divider__text'>Skills</h2>
            </div>
            <div>
                <Skills />
            </div>
        </div>
        <div className='bg-white-200 my-20 pb-10'>
            <div className='divider'>
                <h2 className='divider__text'>Proyectos</h2>
            </div>
            <div className='w-90 md:w-3/5 lg:w-90 mx-auto flex justify-center flex-wrap gap-4 lg:gap-10'>
                <Project />
            </div>
        </div>
    </>
)
}
  export default Portfolio
  