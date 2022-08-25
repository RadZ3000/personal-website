import type { NextPage } from 'next'
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';


const Home: NextPage = () => {
  return (
    <div id="home" className="page">

      <div id="intro" className="flex flex-col justify-center gap-y-10 h-screen">
        <p className="text-sm md:text-lg text-red-400">Hello, my name is</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-7xl xl:leading-snug font-extrabold bg-white text-black w-max px-3"><code><span className="text-red-700">&lt;</span>HERALD ADOWEI<span className="text-red-700">&gt;</span></code></h1>
        <h1 className="text-lg lg:text-3xl xl:text-6xl xl:leading-snug font-extrabold bg-gray-900 text-red-500 w-max">
          <code>
            <TypeAnimation
              sequence={[
                'Programmer.',
                2000,
                'I build stuff for the web.'
              ]}
            />
          </code>
        </h1>
        <p className="text-xs md:text-sm w-2/3">I'm a web developer specializing in designing, building, and maintaining component-based front end websites.</p>
        <button className="mt-10 border-solid border-2 rounded border-red-400 w-fit px-5 py-2 hover:bg-red-400/20 hover:border-red-500 duration-500">
          <Link href="/work">Check out my Work</Link>
        </button>
      </div>

    </div>
  )
}

export default Home