function Navbar() {
	const handleMenu = evt => {
		evt.target.classList.toggle('hidden');
	};
	return (
		<>
			<button onClick={handleMenu} className='w-5'>
				<div className='w-full border-t-2 border-primary border-solid mt-1'></div>
				<div className='w-full border-t-2 border-primary border-solid mt-1'></div>
				<div className='w-full border-t-2 border-primary border-solid mt-1'></div>
			</button>
			<navbar className='w-full'>
				<ul className='w-45 flex justify-evenly mx-auto my-4 py-3 bg-white-300 dark:bg-secondaryDark rounded-2xl'>
					<li className='navbar__element'>
						<a href='/'>Inicio</a>
					</li>
					<li className='navbar__element'>
						<a href='/portfolio'>Portafolio</a>
					</li>
					<li className='navbar__element'>
						<a href='/blog'>Blog</a>
					</li>
					<li className='navbar__element'>
						<a href='/contact'>Contacto</a>
					</li>
				</ul>
			</navbar>
		</>
	);
}

export default Navbar;
