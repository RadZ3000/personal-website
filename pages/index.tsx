import type { NextPage } from 'next'
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';


const Home: NextPage = () => {
  return (
    <div id="home" className="page">

      <div id="intro" className="flex flex-col justify-center items-center w-5/6 md:items-start md:w-2/3 lg:w-2/3 gap-y-10 sm:gap-y-14 h-full lg:h-screen">
        <p className="text-xl md:text-lg text-red-400">Hello, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl xl:leading-snug font-extrabold bg-white text-black w-max px-3"><code><span className="text-red-700">&lt;</span>HERALD ADOWEI<span className="text-red-700">&gt;</span></code></h1>
        <h1 className="text-xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl xl:leading-snug font-extrabold bg-gray-900 text-red-500 w-max">
          <code>
            <TypeAnimation
              sequence={[
                'Software Engineers.',
                2000,
                'I build stuff for the web.'
              ]}
            />
          </code>
        </h1>
        <p className="text-md md:text-lg w-full flex text-center md:text-left sm:w-4/5 md:w-3/4">I'm a software engineer specializing in designing, building, and maintaining front end and back end of component-based websites.</p>
        <button className="mt-10 flex border-solid border-2 rounded border-red-400 w-fit px-10 py-5 hover:bg-red-400/20 hover:border-red-500 duration-500">
          <Link href="/contact">Say Hi!</Link>
        </button>
      </div>

    </div>
  )
}

export default Home