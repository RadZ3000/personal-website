import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div id="home" className="page">

      <div id="intro" className="flex flex-col justify-center gap-y-10 h-screen">
        <p className="text-red-400">Hello, my name is</p>
        <h1 className="lg:text-4xl xl:text-7xl xl:leading-snug font-extrabold bg-white text-black w-max px-3"><code><span className="text-red-700">&lt;</span>HERALD ADOWEI<span className="text-red-700">&gt;</span></code></h1>
        <h1 className="lg:text-3xl xl:text-6xl xl:leading-snug font-extrabold bg-gray-900 text-red-500 w-max"><code>I build stuff for the web<span className="text-white">.</span><span className="box"></span></code></h1>
        <p className="w-2/3">I'm a web developer specializing in designing, building, and maintaining component-based front end websites.</p>
        <button className="mt-10 border-solid border-2 rounded border-red-400 w-fit px-5 py-2 hover:bg-red-400/20 hover:border-red-500 duration-500">Check out my Work</button>
      </div>

    </div>
  )
}

export default Home