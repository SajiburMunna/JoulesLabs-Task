import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import useDarkMode from './../hook/useDarkMode';

const Layout = ({ children }) => {
 
  return (
    <div className="dark:bg-black">
      <div className="dark:text-white">
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
