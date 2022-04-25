import headerIMG from '../assets/HeaderIMG.svg';

function Header() {
    return (
    <header className='flex justify-center flex-col w-full text-center mt-12'>
        <img src={headerIMG} className="w-90 lg:w-2/5 mx-auto" alt="" />
        <h1 className='font-rb text-primary dark:text-white-400 mt-5 md:mt-10 font-bold text-5xl md:text-6xl lg:text-7xl leading-none'>Matias Blanc</h1>
        <h2 className='font-ms text-secondary font-semibold text-xl sm:text-2xl'>Frontend developer</h2>
    </header>
    )
  }
  
export default Header