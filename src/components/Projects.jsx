import project1 from '/online-shopping.jpg';
import project2 from '/cleaning-specialist.jpg';
import project3 from '/one-page-bootstrap.jpg';

const ProjectCard=({image,title,description,link})=>{
    return(
        <article  className='relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group'>
            <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#74f568c3] rounded-full blur-3xl opacity-50 -top-5 left-10'></div>
            <div className='relative z-10'>

            <figure className="relative group w-full h-48 overflow-hidden">
  {/* Image */}
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
  />

  {/* Overlay Container */}
  <div className="absolute inset-0 h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    
    {/* Green semi-transparent background */}
    <div className="absolute inset-0 bg-green-800 opacity-40 pointer-events-none"></div>

    {/* Button stays fully visible */}
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="z-10"
    >
      <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5] transition">
        Live Preview
      </button>
    </a>
  </div>
</figure>


                <div className='px-6 py-4'>
                    <header>
                        <h3 className='text-white font-bold text-xl mb-2'>{title}</h3>
                    </header>
                    <p className='text-gray-200 text-base'>{description}</p>
                </div>
            </div>
        </article>
    )
};



export default function Projects() {
    
        const listProjects=[
            {
                image:project1,
                title:'Online Shopping Website',
                description:"A responsive, front-end only online shopping website with an intuitive and mobile-friendly interface.",
                link:"https://bills-online-shopping-website.netlify.app/"
            },
            {
                image:project2,
                title:'Cleaning Specialist',
                description:"A responsive front-end website for a cleaning service, featuring a user-friendly design and dynamic image carousel powered by jQuery bxSlider.",
                link:"https://bills-cleaning-service-website.netlify.app/"
            },
            {
                image:project3,
                title:'One Page website',
                description:"A responsive one-page website with a clean, flexible layout designed for an optimal user experience across devices.",
                link:"https://bills-one-page-website.netlify.app/"
            },
        ];
    

  return (
    <main  className='p-4' id='projects'>
        <section data-aos='fade-up' data-aos-delay='300'>
            <header className='text-center'>
                <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>
                    My <span className='text-green-400'>Projects</span>
                </h1>
                <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
                Even though I’m now transitioning toward IT support, these past projects reflect my practical understanding of systems, debugging, and technical workflows.
                </p>
            </header>
        </section>
        <section data-aos='zoom-out' data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className='flex flex-wrap gap-4 justify-center mt-6'>
            {listProjects.map((project,index)=>(
                <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}/>
            ))};

        </section>
    </main>
  )
}
