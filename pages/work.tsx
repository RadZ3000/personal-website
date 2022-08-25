import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import {
    FaGithub,
    FaAnchor,
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
} from 'react-icons/fa'

const Work = () => {
    return (
        <div id="work" className="page">

            <div id="intro" className="flex flex-col gap-y-20 justify-center items-center w-11/12 md:w-5/6 h-full lg:h-screen">

                <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-3xl xl:leading-snug font-bold text-red-500 w-fit">
                    <code>
                        <TypeAnimation
                            sequence={[
                                'My Work.',
                            ]}
                        />
                    </code>
                </h1>

                <div className="grid grid-rows-3 grid-cols-2 justify-center gap-6 md:grid-rows-2 md:grid-cols-3 md:gap-10 lg:grid-rows-2 lg:grid-cols-3 lg:gap-12">

                    <div className="translate container">
                        <div className="flex flex-row justify-end gap-x-4 content-center h-1/6">
                            <Link href="#"><a className="hover"><FaGithub /></a></Link>
                            <Link href="#"><a className="hover"><FaAnchor /></a></Link>
                        </div>
                            <a className="hover flex flex-col gap-y-4 w-full text-lg" target="_blank" rel="noopener noreferrer" href="https://herald-sidebar-component.netlify.app/">
                                <h1 className="text-sm md:text-base">Navbar & Footer</h1>
                                <p className="text-xs h-1/3 w-full text-gray-400">Navbar and Footer component made with Next.js</p>
                            </a>
                        <div className="flex flex-row items-end gap-x-3 h-1/3 text-xs md:text-sm">
                            <FaHtml5 />
                            <FaCss3 />
                            <FaJs />
                            <FaReact />
                        </div>
                    </div>

                    <div className="translate container">
                        <div className="flex flex-row justify-end gap-x-4 content-center h-1/6">
                            <Link href="#"><a className="hover"><FaGithub /></a></Link>
                            <Link href="#"><a className="hover"><FaAnchor /></a></Link>
                        </div>
                            <a className="hover flex flex-col gap-y-4 w-full text-lg" target="_blank" rel="noopener noreferrer" href="https://herald-sidebar-component.netlify.app/">
                                <h1 className="text-sm md:text-base">Sidebar</h1>
                                <p className="text-xs h-1/3 w-full text-gray-400">Sidebar component made with Next.js</p>
                            </a>
                        <div className="flex flex-row items-end gap-x-3 h-1/3 text-xs md:text-sm">
                            <FaHtml5 />
                            <FaCss3 />
                            <FaJs />
                            <FaReact />
                        </div>
                    </div>

                    <div className="translate container">
                        <div className="flex flex-row justify-end gap-x-4 content-center h-1/6">
                            <Link href="#"><a className="hover"><FaGithub /></a></Link>
                            <Link href="#"><a className="hover"><FaAnchor /></a></Link>
                        </div>
                            <a className="hover flex flex-col gap-y-4 w-full text-lg" target="_blank" rel="noopener noreferrer" href="https://herald-sidebar-component.netlify.app/">
                                <h1 className="text-sm md:text-base">Dropdown Menu</h1>
                                <p className="text-xs h-1/3 w-full text-gray-400">Dropdown menu component made with Next.js</p>
                            </a>
                        <div className="flex flex-row items-end gap-x-3 h-1/3 text-xs md:text-sm">
                            <FaHtml5 />
                            <FaCss3 />
                            <FaJs />
                            <FaReact />
                        </div>
                    </div>

                    <div className="translate container">
                        <div className="flex flex-row justify-end gap-x-4 content-center h-1/6">
                            <Link href="#"><a className="hover"><FaGithub /></a></Link>
                            <Link href="#"><a className="hover"><FaAnchor /></a></Link>
                        </div>
                            <a className="hover flex flex-col gap-y-4 w-full text-lg" target="_blank" rel="noopener noreferrer" href="https://herald-sidebar-component.netlify.app/">
                                <h1 className="text-sm md:text-base">Landing Page</h1>
                                <p className="text-xs h-1/3 w-full text-gray-400">Landing Page made with React.js</p>
                            </a>
                        <div className="flex flex-row items-end gap-x-3 h-1/3 text-xs md:text-sm">
                            <FaHtml5 />
                            <FaCss3 />
                            <FaJs />
                            <FaReact />
                        </div>
                    </div>

                    <div className="translate container">
                        <div className="flex flex-row justify-end gap-x-4 content-center h-1/6">
                            <Link href="#"><a className="hover"><FaGithub /></a></Link>
                            <Link href="#"><a className="hover"><FaAnchor /></a></Link>
                        </div>
                            <a className="hover flex flex-col gap-y-4 w-full text-lg" target="_blank" rel="noopener noreferrer" href="https://herald-login-template.netlify.app/">
                                <h1 className="text-sm md:text-base">Login Template</h1>
                                <p className="text-xs h-1/3 w-full text-gray-400">Company login template made with Next.js and Tailwind CSS</p>
                            </a>
                        <div className="flex flex-row items-end gap-x-3 h-1/3 text-xs md:text-sm">
                            <FaHtml5 />
                            <FaCss3 />
                            <FaJs />
                            <FaReact />
                        </div>
                    </div>

                    <div className="translate container">
                        <div className="flex flex-row justify-end gap-x-4 content-center h-1/6">
                            <Link href="#"><a className="hover"><FaGithub /></a></Link>
                            <Link href="#"><a className="hover"><FaAnchor /></a></Link>
                        </div>
                            <a className="hover flex flex-col gap-y-4 w-full text-lg" target="_blank" rel="noopener noreferrer" href="https://codepen.io/He_sRad/full/zYZWzje">
                                <h1 className="text-sm md:text-base">Choropleth Map</h1>
                                <p className="text-xs h-1/3 w-full text-gray-400">Choropleth map plotted with D3.js and React.js</p>
                            </a>
                        <div className="flex flex-row items-end gap-x-3 h-1/3 text-xs md:text-sm">
                            <FaHtml5 />
                            <FaCss3 />
                            <FaJs />
                            <FaReact />
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Work;