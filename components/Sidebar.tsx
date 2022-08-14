import type { NextPage } from 'next'
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaCodepen,
} from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <div>

      <div className="min-h-screen w-20 bg-black text-white flex flex-col items-center">
        <a href="#" className="btn"><FaTwitter /></a>
        <a href="#" className="btn"><FaInstagram /></a>
        <a href="#" className="btn"><FaGithub /></a>
        <a href="#" className="btn"><FaCodepen /></a>
      </div>

    </div>
  )
}

export default Home
