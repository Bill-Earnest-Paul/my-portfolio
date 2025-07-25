import spacecat from '/spacecat.png';
import spaceguitar from '/spaceguitar.png';
import computerpc from '/computerpc.png';
export default function About() {
  return (
    <section
  id='about'
  className='min-h-screen overflow-visible sm:overflow-hidden flex items-center justify-center text-white px-4 sm:px-6'>
      <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
      <figure data-aos='fade-right' data-aos-delay='100' className='flex flex-wrap justify-center gap-4 relative'>

{/* Group the blob and computer image together */}
<div className="relative z-10">
  {/* Blob behind the computer */}
  <div className="absolute -top-10 -left-10 z-0 w-[60vw] max-w-[500px]">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        fill="#66bb6a"
        d="M40.3,-58.8C53.4,-49.5,65.1,-38.2,69.5,-24.6C73.9,-11.1,70.9,4.7,63.2,18.6C55.6,32.5,43.4,44.5,30.1,52.9C16.8,61.4,2.5,66.3,-11.6,68.3C-25.8,70.3,-39.8,69.3,-49.3,60.4C-58.9,51.5,-64,34.6,-68.8,17.8C-73.6,1,-78.2,-15.7,-70.3,-26.6C-62.4,-37.5,-42,-42.7,-25.6,-49.5C-9.1,-56.4,3.3,-65,16.3,-66.8C29.3,-68.6,42.1,-63.5,40.3,-58.8Z"
        transform="translate(100 100)"
      />
    </svg>
  </div>

  {/* Computer image in front */}
  <img src={computerpc} alt="Main computer" className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg shadow-lg object-contain"/>
</div>

{/* Other floating images */}
<img
  src={spacecat}
  alt="Computer image"
  className="absolute top-0 sm:-top-2 left-5 sm:left-10 transform -translate-y-6 sm:-translate-y-12 z-20 w-20 h-20 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
/>

<img
  src={spaceguitar}
  alt="Astronaut with guitar image"
  className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-32 sm:h-32 rounded-3xl shadow-lg object-cover"
/>
</figure>

    <article   data-aos="fade-left" data-aos-delay="100" className='text-center lg:text-left relative'>
      <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#2e7d32] rounded-full blur-3xl opacity-50 -top-5 left-10'></div>
      <header>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
          About Me
        </h1>
      </header>
    <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed'>
    Hi, I’m Bill — a Computer Science graduate with a Master’s degree and a strong foundation in web technologies, systems handling, and problem-solving. While I started by exploring full-stack development, I’ve now found a more focused interest in technical support and IT infrastructure roles. I'm passionate about helping users solve problems, supporting system operations, and maintaining seamless application functionality.    </p>
    <footer>
    <a href="#skills">
  <button className='inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-white hover:text-[#2e7d32] hover:scale-110 hover:shadow-[0_0_40px_rgba(46,125,50,0.7)] rounded-full text-sm sm:text-lg transition-transform duration-500 ease-in-out'>
    Learn More
  </button>
</a>
    </footer>
    </article>
      </div>

    </section>
  )
}
