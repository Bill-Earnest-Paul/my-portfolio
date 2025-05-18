import atom from '/atom.png';
import java from '/java.png';
import tailwind_pic from '/tailwind_pic.png';
import nodejs_pic from '/nodejs_pic.png';
import islandtree from '/islandtree.png';

const skillSet=[
    {id:1,image:atom,title:"React js",description:"I have hands-on experience building dynamic user interfaces with React, utilizing components, hooks, and state management to create responsive and efficient web applications."},
    {id:2,image:tailwind_pic,title:"Tailwind css",description:"While still learning, I’ve used Tailwind CSS to style projects, appreciating its utility-first approach for quick prototyping and building custom designs."},
    {id:3,image:nodejs_pic,title:"Node js",description:"I have practical experience with Node.js, focusing on server development and various file operations, laying the foundation for further growth in backend development."},
    {id:4,image:java,title:"Java",description:"I’ve developed a strong understanding of Java fundamentals, including object-oriented principles, and have applied it to solve algorithmic problems and build small projects."},
];

const SkillBox=({image, title, description})=>(
  
  <article className='group bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center md:mt-20 hover:bg-green-900 transition-all duration-300 flex flex-col items-center justify-center'>
  <figure className='flex justify-center mb-4'>
      <img src={image} alt={title} className='w-20'/>
  </figure>
  <header>
      <h3 className='text-lg sm:text-xl font-semibold mb-2'>{title}</h3>
  </header>
  <p className='text-gray-400 text-sm sm:text-base group-hover:text-gray-100'>
      {description}
  </p>        
</article>


)
export default function Skills() {
  return (
    <section id='skills' className='relative min-h-screen overflow-hidden flex flex-col item-center justify-center text-white px-4 py-10'>
        <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#74f13ade] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2'></div>
        <img data-aos='fade-right' data-aos-delay='100'
  src={islandtree} 
  alt="Left-Picture" 
  className='absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-64 opacity-70' 
/>
        <div data-aos='fade-up' data-aos-delay='100' className='relative z-20 text-center space-y-6 sm:space-y-10 mt-15'>
          <header >
            <h1 className='text-3xl sm:text-4xl font-bold'><span className='text-green-400'>My Skills </span> & <br/>Learning Journey</h1>
            <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>Technologies explored and skills developed through hands-on projects and learning.</p>
          </header>
          <section data-aos="flip-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="500" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4'>
            {skillSet.map((skill)=>{
              return (<SkillBox 
                key={skill.id}
                image={skill.image}
                title={skill.title}
                description={skill.description}
                />);
            })}

          </section>
        </div>

        <img 
  src={islandtree} 
  data-aos='fade-left' data-aos-delay='100'
  alt="right-picture" 
  className='absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-64 opacity-70' 
/>



    </section>
  )
}
