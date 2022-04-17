import headerIMG from '../assets/HeaderIMG.svg';

function Header() {
    return (
    <header className='w-full flex justify-center flex-col dark:bg-dark'>
        <img src={headerIMG} className="w-2/5 m-auto" alt="" />
        <h1 className='font-rb text-secondaryDark dark:text-white-400 font-bold text-7xl text-center'>Matias Blanc</h1>
        <h2 className='font-ms text-primary font-semibold text-2xl text-center'>Frontend developer</h2>
    </header>
    )
  }
  
export default Header