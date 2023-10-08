import './App.css';
import logo from './images/logo.svg'
import facebook from './images/facebook.svg'
import youtube from './images/youtube.svg'
import linked from './images/linkedin.svg'
import menu from './images/menu.svg'
import imagehome from './images/image1.jpg'
import { useState } from 'react';
function App() {

  const [menuvesible , setMenuvesible] = useState(false)
  
  function handleClick() {
    setMenuvesible(!menuvesible)
  }

  return (
    <header>
      <h1>Ettaba</h1>
    </header>,
    <body>
      <nav className="container mx-auto p-6" >
        <div className="flex items-center justify-between" >
          <div className="grid grid-cols-4 gap-4 items-center">
            <img src={logo} alt='ettaba logo' width='50px ' ></img>
            <div className='flex  text-black text-4xl'>Ettaba</div>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <a href='#' className='text-slate-900 hover:text-slate-300 '>Portfolio</a>
            <a href='#' className='text-slate-900 hover:text-slate-300 '>About</a>
            <a href='#' className='text-slate-900 hover:text-slate-300 '>Contact</a>
            <a href='#' className='text-slate-900 hover:text-slate-300 '>Social</a>
            <a href='#' className='py-2 px-6 rounded-full text-white bg-orange-500 hover:bg-slate-900' > Call Me</a>
          </div>

          <button onClick={handleClick} id='mobile-btn' className='md:hidden'>
          <img src={menu} alt='ettaba logo' className='h-8' ></img>
              
          </button>

        </div>

        <div className='md:hidden'>
          <div id='mobile-menu'
           className={`flex flex-col bg-gray-50 py-8 left-8 right-6 drop-shadow-lg border border-gray-300 items-center space-y-4 font-bold absolute ${menuvesible ? '' : 'hidden'}`}>
            
            <a href='#' className='text-slate-900 hover:text-slate-300 '>Portfolio</a>
            <a href='#' className='text-slate-900 hover:text-slate-300 '>About</a>
            <a href='#' className='text-slate-900 hover:text-slate-300 '>Contact</a>
            <a href='#' className='text-slate-900 hover:text-slate-300 '>Social</a>
            <a href='#' className='py-2 px-6 rounded-full text-white bg-orange-500 hover:bg-slate-900' > Call Me</a>
         
          </div>

        </div>
      </nav>

      <section id='hero'>
  <div className='container px-6 space-x-6 flex flex-col-reverse md:flex-row items-center'>
    
    
    <div className=' lg:w-1/2 md:w-1/2 flex flex-col justify-center space-y-5 py-8 text-center md:text-left text-slate-900 bg-slate-200 '>
      <h1 className='font-bold ml-5 text-3xl md:text-5xl'>Bienvenue a tous</h1>
      <p className='ml-5'>Aliquip Lorem exercitation est pariatur. Sunt nulla officia excepteur minim consectetur eiusmod eu anim. Mollit adipisicing pariatur ut exercitation nisi ad dolore irure aliquip culpa. Non fugiat ad eu ea est anim nisi elit nisi nisi consectetur eu do ullamco.</p>
      <a href='#' className='py-2 ml-5 px-6 rounded-full self-center md:self-start text-white bg-orange-500 hover-bg-slate-900'> Call Me</a>
    </div>

    <div className=' md:w-1/2 lg:w-1/2'>
      <img  src={imagehome} alt='ettaba logo' className='' ></img>
    </div>

  </div>
</section>


      <section id='author'>

        <div className='container px-5 mx-auto my-32 text-center'>
          <h2 className='font-bold text-4xl'>Ea id eu magna tempor mollit deserunt pariatur.</h2>
          <p className='mt-8 max-w-5xl mx-auto'>Lorem fugiat id exercitation ullamco elit veniam. Ipsum laboris nulla consectetur irure deserunt nisi fugiat enim. Culpa esse amet tempor culpa velit tempor nostrud fugiat id nostrud commodo fugiat. Dolore est dolor nisi veniam culpa deserunt. Ipsum consectetur et sit consectetur minim laboris.</p>
          <div className='mt-10 flex flex-col space-y-10 space-x-0  md:flex-row md:space-x-5 md:space-y-0' >
            <div className='bg-slate-200 md:w-1/3 flex flex-col p-6 space-y-2 rounded-lg border border-slate-300 items-center'>
              <img src={logo} alt='wassim' className='h-16 w-16 rounded-full bg-blue-300 -mt-14 ' ></img>
              <h5 className='font-bold text-lg text-slate-900'>wassim sakri</h5>
              <p className='leading-5 text-sm' >Cupidatat consectetur duis est sint adipisicing dolor anim nulla voluptate mollit. Labore consequat qui in nostrud in est. Magna irure laborum cupidatat esse tempor et proident sint labore voluptate in laborum velit magna. Enim dolor laboris veniam culpa laboris ullamco. Laboris fugiat anim labore et aliqua tempor dolore Lorem.</p>
            </div>

            <div className='bg-slate-200 md:w-1/3 flex flex-col p-6 space-y-2 rounded-lg border border-slate-300 items-center'>
              <img src={logo} alt='wassim' className='h-16 w-16 rounded-full bg-blue-300 -mt-14' ></img>
              <h5 className='font-bold text-lg text-slate-900'>wassim sakri</h5>
              <p className='leading-5 text-sm' >Cupidatat consectetur duis est sint adipisicing dolor anim nulla voluptate mollit. Labore consequat qui in nostrud in est. Magna irure laborum cupidatat esse tempor et proident sint labore voluptate in laborum velit magna. Enim dolor laboris veniam culpa laboris ullamco. Laboris fugiat anim labore et aliqua tempor dolore Lorem.</p>
            </div>

            <div className='bg-slate-200 md:w-1/3 flex flex-col p-6 space-y-2 rounded-lg border border-slate-300 items-center'>
              <img src={logo} alt='wassim' className='h-16 w-16 rounded-full bg-blue-300 -mt-14 ' ></img>
              <h5 className='font-bold text-lg text-slate-900'>wassim sakri</h5>
              <p className='leading-5 text-sm' >Cupidatat consectetur duis est sint adipisicing dolor anim nulla voluptate mollit. Labore consequat qui in nostrud in est. Magna irure laborum cupidatat esse tempor et proident sint labore voluptate in laborum velit magna. Enim dolor laboris veniam culpa laboris ullamco. Laboris fugiat anim labore et aliqua tempor dolore Lorem.</p>
            </div>
          </div>
        </div>

      </section>

      <footer className='bg-slate-900'>

        <div className=' space-y-5  pb-10 flex  flex-col-reverse items-center md:flex-row md:justify-between md:px-10'>

          <div className=' py-5 flex flex-col  items-center justify-between space-y-2 md:space-y-2 md:items-start'>


            <div className='flex flex-row space-x-3 items-center mx-0 my-2'>
              <img src={logo} alt='ettaba logo' className='h-8' ></img>
              <h1 className='font-bold'>Ettaba</h1>
            </div>

            <div className=' flex space-x-2 ' >
              <a href='#'>
                <img src={facebook} alt='ettaba logo' className='h-8' ></img>
              </a>
              <a href='#'>
                <img src={youtube} alt='ettaba logo' className='h-8' ></img>
              </a>
              <a href='#'>
                <img src={linked} alt='ettaba logo' className='h-8' ></img>
              </a>
            </div>
          </div>
            <div className=' pt-5 md:hidden text-white'>
              Copyright &copy; 2023, All Rights Reserved
            </div>
          <div className='flex justify-around space-x-36'>
            <div className='flex flex-col'>
              <div className='text-white'>Home</div>
              <div className='text-white'>About</div>
              <div className='text-white'>Contact</div>
            </div>

            <div className='flex flex-col'>
              <div className='text-white'>Imprint</div>
              <div className='text-white'>Privacy</div>
              <div className='text-white'>Credits </div>
            </div>
          </div>
          
          <div className='flex flex-col justify-between mx-5'>
            <form action='#'>
              <input
                type='text'
                placeholder='Subscribe to Newsletter'
                className='flex-1 mx-2 py-2 px-6 rounded-full'
              />

              <button className='bg-orange-500 rounded-full px-4 py-2 hover:bg-slate-500'>GO</button>
            </form>
           
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;
