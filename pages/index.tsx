import type { NextPage } from 'next'
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
        <button className="my-10 border-solid border-2 rounded border-red-400 w-fit px-5 py-2 hover:bg-red-400/20">Check out my Work</button>
      </div>

      <div className="flex justify-start ml-56">
        <h1 className="lg:text-xl xl:text-3xl xl:leading-snug font-bold w-max px-3">About.</h1>
      </div>

    </div>
    </>
  )
}

export default Home
