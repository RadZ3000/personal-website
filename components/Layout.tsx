import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}

export default Layout;