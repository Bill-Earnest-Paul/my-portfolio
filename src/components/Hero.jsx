import Navbar from './Navbar.jsx';
import github from '/github.png';
import linkedin from '/linkedin.png';
import twitter from '/twitter.png';
import oblivion from '/oblivion.png';
import Resume from '/Resume.pdf';
export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center'>
        
        <div className="md:h-[400px] h-[400px] w-[400px] bg-gradient-to-br from-emerald-800 via-emerald-600 to-emerald-400
 transform rotate-55 z-0 right-45 top-28 absolute rounded-md">
</div>


        <Navbar/>
        <main id="home" className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10'>
  <section className='flex-1 mr-28 md:text-left mt-10 md:mt-0 relative' data-aos="fade-up" data-aos-delay="500">
    <div className='absolute -z-10 w-70 h-70 bg-[#388e3c] rounded-full blur-3xl opacity-50 -top-30  -left-12'></div>
    <header>
      <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>Bill Earnest Paul</h1>
      <h2 className='text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0ff4a] md:text-[#fdd835] mb-2'>
        My Learning & Career Journey
      </h2>
    </header>
    <p className='text-base sm:text-lg md:text-gray-200 mb-6'>
      Welcome! Explore my journey from college projects and technical learning to hands-on professional experience, building skills along the way.
      </p>
    <div className='flex items-center space-x-4 mb-6'>
      <a href="https://www.linkedin.com/in/bill-earnest/" target='_blank' className="transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(34,139,34,0.6)]">
        <img src={linkedin} alt="linkedin" className="w-11 h-11" />
      </a>
      <a href="https://github.com/Bill-Earnest-Paul" target='_blank' className="transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(34,139,34,0.6)]">
        <img src={github} alt="github" className="w-11 h-11" />
      </a>
      <a href="https://x.com/Sandwich_047" target='_blank' className="transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(34,139,34,0.6)]">
        <img src={twitter} alt="twitter" className="w-11 h-11" />
      </a>
    </div>
    <a href={Resume} download>
      <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-[#2e7d32] hover:scale-110 hover:shadow-[0_0_40px_rgba(46,125,50,0.7)] rounded-full text-lg transition-all duration-300'>
        Download Resume
      </button>
    </a>
  </section>

  <figure data-aos="fade-up" data-aos-delay="500" className='flex justify-center md:justify-end mt-0'>
    <img 
      src={oblivion} 
      alt="my-image" 
      className="h-[500px] w-[600px] object-cover rounded-lg"  // Increased size
    />
  </figure>
</main>

    </div>
  )
}
