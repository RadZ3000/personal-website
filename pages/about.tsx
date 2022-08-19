import Image from 'next/image';
import profile from '../images/hi2.png';

const About = () => {
    return (
        <div id="about" className="page">
          <div id="intro" className="flex flex-row justify-center items-center content-center gap-x-12 w-5/6 px-12 h-screen">
            <div className="w-1/2 text-justify">
              <h1 className="lg:text-xl xl:text-3xl xl:leading-snug font-bold text-red-500 w-fit ml-12">About.</h1>
              <p className="py-12 pr-5">
                Hi! I'm Herald, and I creatively code captivating content.
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br /><br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="w-2/5 h-4/5"><Image src={profile} /></div>
          </div>
        </div>
    )
}

export default About;