import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className='bg-primary-100 w-full'>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
