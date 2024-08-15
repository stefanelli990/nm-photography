import instaImg1 from '../assets/insta-img-1.jpg';
import instaImg2 from '../assets/insta-img-2.jpg';
import instaImg3 from '../assets/insta-img-3.jpg';
import instaImg4 from '../assets/insta-img-4.jpg';
import instaImg5 from '../assets/insta-img-5.jpg';

export default function InstagramSection() {
  const instaImages = [
    {
      path: instaImg1,
      alt: "instaImage1",
    },
    {
      path: instaImg2,
      alt: 'instaImage2'
    },
    {
      path: instaImg3,
      alt: 'instaImage3'
    },
    {
      path: instaImg4,
      alt: 'instaImage4'
    },
    {
      path: instaImg5,
      alt: 'instaImage5'
    }
  ];

  return (
    <section id="instagram-section" className='bg-slate-50 py-[50px]'>
      <div className="text-center pb-[50px]">
        <h2>follow me on instagram</h2>
      </div>
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
          {instaImages.map((img, index) => (
            <div key={index} className={`w-full aspect-square ${index === 4 ? 'hidden lg:block' : ''}`}>
              <img src={img.path} alt={img.alt}/>
            </div>
          ))}
        </div>
        <div className="bg-black/35 absolute h-full w-full top-0 left-0"></div>
        <a
          href="https://www.instagram.com/nemanjaphotography_/"
          target="_blank"
          aria-label="Visit Instagram page"
          className="bg-white absolute p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        >
          @nemanjaphotography_
        </a>
      </div>
    </section>
  );
}
