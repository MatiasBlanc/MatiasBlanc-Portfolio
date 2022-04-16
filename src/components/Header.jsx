import headerIMG from '../assets/HeaderIMG.svg';

function Header() {
    return (
    <header className='w-full flex justify-center flex-col'>
        <img src={headerIMG} className="w-2/5 m-auto" alt="" />
        <h1 className='font-rb font-bold text-7xl text-center'>Matias Blanc</h1>
        <h2 className='font-ms text-2xl text-center'>Frontend developer</h2>
    </header>
    )
  }
  
export default Header