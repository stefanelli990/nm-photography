import videoBg from '../assets/hero-video.mp4';
import Btn from "./Btn";

export default function Hero() {
  return (
    <section id="hero-section" className="relative my-0">
        <video autoPlay muted loop id="myVideo" className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover -z-[2]">
            <source src={videoBg} type="video/mp4"/>
        </video>
        <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 -z-[1]"></div>
        <div className="wrapper flex items-center justify-between min-h-screen lg:min-h-[700px] text-white">
            <div className="max-w-[550px]">
                <h1>let's capture<br />your beautiful<br />moments</h1>
                <p className="my-6">With unique approach to photography, I take ordinary moments and transform them into extraordinary memories that will last a lifetime.</p>
                <Btn btnPath={'/portfolio'} btnText={'view portfolio'} btnStyle={'btn btn-outlined btn-outlined-white'}/>
            </div>   
        </div>
    </section>
  )
}