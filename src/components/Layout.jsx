import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

export default function Layout({ children, open, setOpen }) {
  return (
    <>
        <Navbar open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen}/>
        {children}
  
    </>
  )
}