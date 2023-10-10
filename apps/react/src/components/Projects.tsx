import './Projects.css';

interface ProjectProps {
  id: string;
  name: string;
  link: string;
}

const projects: ProjectProps[] = [
  {
    id: 'stroeer',
    name: 'Stroeer Labs',
    link: 'https://jobs.stroeer-labs.com/',
  },
  {
    id: 'hiredev',
    name: 'Hire Dev',
    link: 'https://hire.dev/',
  },
  {
    id: 'nexusgaming',
    name: 'Nexus Gaming',
    link: '#',
  },
];

const Project = ({id, name, link}: ProjectProps) => {
  return (
    <li className='border-box list-item px-auto pt-8'>
      <a href={link} className={`${id} block bg-cover bg-center	bg-no-repeat h-96 bg-slate-600`}>
        {name}
      </a>
    </li>
  );
};

function Projects() {
  return (
    <section className='w-full px-auto py-10'>
      <div className='px-4 sm:px-12 2xl:px-48'>
        <div className='text-center'>
          <h3 className='text-base pb-3'>CASE STUDIES</h3>
          <h2 className='text-4xl'>Projects</h2>
        </div>

        <ul className='list-none'>
          {projects.map(project => (
            <Project {...project} key={project.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;




