import Link from "next/link";
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
        <div className="page">

            <div id="work" className="flex flex-col gap-y-20 justify-center items-center w-5/6 h-screen">

                <h1 className="lg:text-xl xl:text-3xl xl:leading-snug font-bold text-red-500 w-fit">Work.</h1>

                <div className="grid grid-rows-2 gap-16 grid-cols-3">

                    <div className="flex flex-col gap-y-4 content-center bg-transparent border-white border rounded-xl w-64 h-64 p-5">
                        <div className="flex flex-row justify-end gap-x-4 content-center h-1/6">
                            <Link href="#"><a className="hover"><FaGithub /></a></Link>
                            <Link href="#"><a className="hover"><FaAnchor /></a></Link>
                        </div>
                        <Link href="https://herald-sidebar-component.netlify.app/"><a className="hover w-full h-1/6 text-lg">Navbar</a></Link>
                        <p className="text-xs h-1/3 w-full text-gray-300">
                            Easily customizable and reusable Navbar Component. Made with NextJS.
                        </p>
                        <div className="flex flex-row items-end gap-x-3 h-1/3 text-sm">
                            <FaHtml5 />
                            <FaCss3 />
                            <FaJs />
                            <FaReact />
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-y-4 content-center bg-transparent border-white border rounded-xl w-64 h-64 p-5">
                        <div className="flex flex-row justify-end gap-x-4 content-center h-1/6">
                            <Link href="#"><a className="hover"><FaGithub /></a></Link>
                            <Link href="#"><a className="hover"><FaAnchor /></a></Link>
                        </div>
                        <Link href="https://herald-sidebar-component.netlify.app/"><a className="hover w-full h-1/6 text-lg">Navbar</a></Link>
                        <p className="text-xs h-1/3 w-full text-gray-300">
                            Easily customizable and reusable Navbar Component. Made with NextJS.
                        </p>
                        <div className="flex flex-row items-end gap-x-3 h-1/3 text-sm">
                            <FaHtml5 />
                            <FaCss3 />
                            <FaJs />
                            <FaReact />
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-4 content-center bg-transparent border-white border rounded-xl w-64 h-64 p-5">
                        <div className="flex flex-row justify-end gap-x-4 content-center h-1/6">
                            <Link href="#"><a className="hover"><FaGithub /></a></Link>
                            <Link href="#"><a className="hover"><FaAnchor /></a></Link>
                        </div>
                        <Link href="https://herald-sidebar-component.netlify.app/"><a className="hover w-full h-1/6 text-lg">Navbar</a></Link>
                        <p className="text-xs h-1/3 w-full text-gray-300">
                            Easily customizable and reusable Navbar Component. Made with NextJS.
                        </p>
                        <div className="flex flex-row items-end gap-x-3 h-1/3 text-sm">
                            <FaHtml5 />
                            <FaCss3 />
                            <FaJs />
                            <FaReact />
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-4 content-center bg-transparent border-white border rounded-xl w-64 h-64 p-5">
                        <div className="flex flex-row justify-end gap-x-4 content-center h-1/6">
                            <Link href="#"><a className="hover"><FaGithub /></a></Link>
                            <Link href="#"><a className="hover"><FaAnchor /></a></Link>
                        </div>
                        <Link href="https://herald-sidebar-component.netlify.app/"><a className="hover w-full h-1/6 text-lg">Navbar</a></Link>
                        <p className="text-xs h-1/3 w-full text-gray-300">
                            Easily customizable and reusable Navbar Component. Made with NextJS.
                        </p>
                        <div className="flex flex-row items-end gap-x-3 h-1/3 text-sm">
                            <FaHtml5 />
                            <FaCss3 />
                            <FaJs />
                            <FaReact />
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-4 content-center bg-transparent border-white border rounded-xl w-64 h-64 p-5">
                        <div className="flex flex-row justify-end gap-x-4 content-center h-1/6">
                            <Link href="#"><a className="hover"><FaGithub /></a></Link>
                            <Link href="#"><a className="hover"><FaAnchor /></a></Link>
                        </div>
                        <Link href="https://herald-sidebar-component.netlify.app/"><a className="hover w-full h-1/6 text-lg">Navbar</a></Link>
                        <p className="text-xs h-1/3 w-full text-gray-300">
                            Easily customizable and reusable Navbar Component. Made with NextJS.
                        </p>
                        <div className="flex flex-row items-end gap-x-3 h-1/3 text-sm">
                            <FaHtml5 />
                            <FaCss3 />
                            <FaJs />
                            <FaReact />
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-4 content-center bg-transparent border-white border rounded-xl w-64 h-64 p-5">
                        <div className="flex flex-row justify-end gap-x-4 content-center h-1/6">
                            <Link href="#"><a className="hover"><FaGithub /></a></Link>
                            <Link href="#"><a className="hover"><FaAnchor /></a></Link>
                        </div>
                        <Link href="https://herald-sidebar-component.netlify.app/"><a className="hover w-full h-1/6 text-lg">Navbar</a></Link>
                        <p className="text-xs h-1/3 w-full text-gray-300">
                            Easily customizable and reusable Navbar Component. Made with NextJS.
                        </p>
                        <div className="flex flex-row items-end gap-x-3 h-1/3 text-sm">
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