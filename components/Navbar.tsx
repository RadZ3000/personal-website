import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex flex-row bg-gray-900 text-white py-5 font-mono w-full">

            <div className="w-1/2 text-left pl-5">
                <Link href="#intro"><a className="text-sm md:text-lg bg-red-600 text-black px-2 hover:text-white duration-700"><code>&lt;herald&gt;</code></a></Link>
            </div>
            <div className="w-1/2 items-right text-right pr-5">
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:text-white focus:text-red-500" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            </div>
            <div className="hidden md:block w-1/2 h-max text-right">
                <Link href="/"><a className="nav">Home</a></Link>
                <Link href="/about"><a className="nav">About</a></Link>
                <Link href="/work"><a className="nav">Work</a></Link>
                <Link href="/contact"><a className="nav">Contact</a></Link>
            </div>

        </nav>
    );
}

export default Navbar;