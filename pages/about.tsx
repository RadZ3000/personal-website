import Image from 'next/image';
import profile from '../images/hi2.png';
import { TypeAnimation } from 'react-type-animation';


const About = () => {
  return (
    <div id="about" className="page">

      <div id="intro" className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-x-12 w-full lg:w-5/6 px-12 h-full lg:h-screen">
        <div className="w-full lg:w-1/2 lg:text-justify">
          <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-3xl xl:leading-snug font-bold text-red-500 w-fit ml-12">
            <code>
              <TypeAnimation
                sequence={[
                  'About Me.',
                ]}
              />
            </code>
          </h1>
          <p className="text-sm md:text-sm lg:text-md py-12 pr-5">
            Hi! I'm Herald, and I creatively code captivating content.
            <br /><br />
            I'm a full-stack developer proficient in multiple aspects of code, from UI/UX design all the way to deployment and database management. I have 4+ years of experience working with different frontend, backend, database management, and UI/UX frameworks, including:
            <br /><br />
            <ul>
              <li>- Figma, Webflow</li>
              <li>- HTML, CSS, Tailwind CSS</li>
              <li>- JavaScript (ES6+), TypeScript</li>
              <li>- React.js, Next.js</li>
              <li>- Node.js, PHP</li>
              <li>- SQL, MySQL, MongoDB</li>
              <li>- D3.js</li>
              <li>- Vercel, Netlify</li>
            </ul>
          </p>
        </div>
        <div className="flex items-center w-10/12 sm:w-3/5 md:w-full lg:w-2/5 h-4/5 md:h-full"><Image src={profile} /></div>
      </div>

    </div>
  )
}

export default About;