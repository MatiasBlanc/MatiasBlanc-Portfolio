import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Skills from '../components/Skills';

// Todo: StyledComponents para los divider
export default function Portfolio() {
	return (
		<>
			<Navbar />
			<div className='my-20 pb-10'>
				<div className='divider'>
					<h2 className='divider__text'>Services</h2>
				</div>
				<div>{/* <Services /> */}</div>
			</div>
			<div className='my-20 pb-10'>
				<div className='divider'>
					<h2 className='divider__text'>Skills</h2>
				</div>
				<div className='w-full grid grid-cols-2'>
					<Skills />
				</div>
			</div>
			<div className='bg-white-200 dark:bg-dark my-20 pb-10'>
				<div className='divider'>
					<h2 className='divider__text'>Proyectos</h2>
				</div>
				<div className='w-90 md:w-3/5 lg:w-90 mx-auto flex justify-center flex-wrap gap-4 lg:gap-10'>
					<Project />
				</div>
			</div>
		</>
	);
}
