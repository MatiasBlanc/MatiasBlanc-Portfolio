import Navbar from '../components/Navbar.jsx'
import About from '../components/About'
import Project from '../components/Project.jsx'
import '../styles/Home.css'
import '../styles/App.css'

// TODO: Agregar certificados
// TODO: Estadisticas importantes
const Home = () => {
    return (
    <>
        <Navbar />
        <header id='header' className='header'>
            <h2 className='header__name'>Matias Blanc</h2>
            <h3 className='header__subtitle'>Frontend developer</h3>
        </header>
        <About />
        <Project />
    </>
)
}

export default Home