import type { NextPage } from 'next'
import Image from 'next/image';
import pic from '../images/hi.png';
import {
  FaGoogle,
  FaLinkedin,
  FaCodepen,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <>
      <div className="justify-center bg-gray-900 text-white font-mono">

        <div className="grid justify-center content-center gap-y-10 h-screen">
          <p className="text-red-400">Hello, my name is</p>
          <h1 className="lg:text-4xl xl:text-7xl xl:leading-snug font-extrabold bg-white text-black w-max px-3"><code><span className="text-red-700">&lt;</span>HERALD ADOWEI<span className="text-red-700">&gt;</span></code></h1>
          <p className="w-2/3">I'm a web developer specializing in designing, building, and maintaining component-based front end websites.
            <br /><br />
            I'm a web developer specializing in designing, building, and maintaining component-based front end websites.</p>
          <button className="mt-10 border-solid border-2 rounded border-red-400 w-fit px-5 py-2 hover:bg-red-400/20 duration-500">Check out my Work</button>
        </div>

        <div id="about" className="flex flec-col gap-x-12 ml-56">
          <div className="w-1/2 mt-24 text-justify">
            <h1 className="lg:text-xl xl:text-3xl xl:leading-snug font-bold w-max">About.</h1>
            <p className="py-12 pr-5">
              Hi! I'm Herald and I'm passionate about creating captivating interfaces
              <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              <br /><br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-2/5 h-4/5"><Image src={pic} /></div>
        </div>

      </div>
    </>
  )
}

export default Home
