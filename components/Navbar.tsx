// import Link from "next/link";

// const Navbar = () => {
//     return (
//         <nav className="flex flex-row bg-gray-900 text-white py-5 font-mono w-full">


// <div className="w-1/2 text-left pl-5">
//     <Link href="#intro"><a className="text-sm md:text-lg bg-red-600 text-black px-2 hover:text-white duration-700"><code>&lt;herald&gt;</code></a></Link>
// </div>
//             <div className="w-1/2 items-right text-right pr-5">
//                 <button data-collapse-toggle="menu" type="button" className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:text-white focus:text-red-500" aria-controls="navbar-default" aria-expanded="false">
//                     <span className="sr-only">Open main menu</span>
//                     <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//                 </button>
//             </div>
//             <div className="hidden md:block w-1/2 h-max text-right">
//                 <Link href="/"><a className="nav">Home</a></Link>
//                 <Link href="/about"><a className="nav">About</a></Link>
//                 <Link href="/work"><a className="nav">Work</a></Link>
//                 <Link href="/contact"><a className="nav">Contact</a></Link>
//             </div>


//         </nav>
//     );
// }

// export default Navbar;


import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';


export default function Home() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className="font-mono">
            <Head>
                <title>Herald Adowei</title>
                <meta
                    name="description"
                    content="Herald's Website"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="w-full bg-gray-900 shadow pb-5 md:pb-24 lg:pb-0">
                <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <div className="w-1/2 text-left pl-5">
                                <Link href="/"><a className="text-sm md:text-lg bg-red-600 text-black px-2 hover:text-white duration-700"><code>&lt;herald&gt;</code></a></Link>
                            </div>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center text-right space-y-8 md:flex md:space-x-0 md:space-y-0 text-sm sm:text-xs md:text-sm lg:text-base">
                                <li className="text-white">
                                    <Link href="/">
                                        <a className="nav">HOME</a>
                                    </Link>
                                </li>
                                <li className="text-white">
                                    <Link href="/about">
                                        <a className="nav">ABOUT</a>
                                    </Link>
                                </li>
                                {/* <li className="text-white">
                                    <Link href="/work">
                                        <a className="nav">Work</a>
                                    </Link>
                                </li> */}
                                <li className="text-white">
                                    <Link href="/contact">
                                        <a className="nav">CONTACT</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}