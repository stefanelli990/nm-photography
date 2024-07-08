import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import InstagramSection from "../components/InstagramSection";

export default function Layout({ children, open, setOpen }) {
  return (
    <>
        <Navbar open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen}/>
        {children}
        <InstagramSection />
        <Footer />
    </>
  )
}