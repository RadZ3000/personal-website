import {
    FaGithub,
    FaCodepen,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="flex flex-row justify-center bg-gray-900 text-gray-300 py-5 font-mono w-full">

            {/* <div className="w-1/2"></div> */}
            <div className="flex flex-col justify-center gap-5 text-xs">
                <p>Designed and Developed by <a href="#" className="hover:text-red-400 hover:brightness-100 duration-500 underline">Herald Adowei</a></p>
                <div className="flex flex-row justify-center gap-x-5">
                    <a href="https://github.com/RadZ3000" target="_blank" rel="noopener noreferrer" className="footer hover:text-black"><FaGithub /></a>
                    <a href="https://www.linkedin.com/heraldadowei" target="_blank" rel="noopener noreferrer" className="footer hover:text-blue-700"><FaLinkedin /></a>
                    <a href="mailto: guyherry3@gmail.com" target="_blank" rel="noopener noreferrer" className="footer hover:text-red-700"><FaEnvelope /></a>
                    <a href="https://www.instagram.com/herald_a/" target="_blank" rel="noopener noreferrer" className="footer hover:text-pink-400"><FaInstagram /></a>
                    {/* <a href="https://twitter.com/The_RadZee" target="_blank" rel="noopener noreferrer" className="footer hover:text-sky-400"><FaTwitter /></a> */}
                </div>
            </div>

        </footer>
    )
}

export default Footer;