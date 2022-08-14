import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex flex-row bg-gray-900 text-white py-5 font-mono">
            
            <div className="w-1/2 text-left pl-5">
            <Link href="/"><a className="text-md font-md bg-white text-black px-2"><code>&lt;herald&gt;</code></a></Link>
            </div>
            <div className="w-1/2 h-max text-right">
                <Link href="/about"><a className="nav">About</a></Link>
                <Link href="/skills"><a className="nav">Skills</a></Link>
                <Link href="/work"><a className="nav">Work</a></Link>
                <Link href="/contact"><a className="nav">Contact</a></Link>
            </div>

        </nav>
    );
}

export default Navbar;