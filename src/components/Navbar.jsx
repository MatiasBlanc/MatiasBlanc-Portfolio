function Navbar() {
    return(
        <navbar className="w-full">
            <ul className="w-6/12 flex justify-evenly mx-auto my-2 py-3 bg-white-300 dark:bg-secondaryDark rounded-2xl">
                <li className="navbar__element hover:navbar__element--active">
                    <a href="/">Inicio</a>
                </li>
                <li className="navbar__element hover:navbar__element--active">
                    <a href="/portfolio">Portafolio</a>
                </li>
                <li className="navbar__element hover:navbar__element--active">
                    <a href="/blog">Blog</a>
                </li>
                <li className="navbar__element hover:navbar__element--active">
                    <a href="/contact">Contacto</a>
                </li>
            </ul>
        </navbar>
)
}

export default Navbar;