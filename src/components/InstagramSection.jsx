import instaImg1 from '../assets/insta-img-1.jpg';
import instaImg2 from '../assets/insta-img-2.jpg';
import instaImg3 from '../assets/insta-img-3.jpg';
import instaImg4 from '../assets/insta-img-4.jpg';
import instaImg5 from '../assets/insta-img-5.jpg';
import instaImg6 from '../assets/insta-img-6.jpg';
import instaImg7 from '../assets/insta-img-7.jpg';
import instaImg8 from '../assets/insta-img-8.jpg';
import instaImg9 from '../assets/insta-img-9.jpg';
import instaImg10 from '../assets/insta-img-10.jpg';
import instaImg11 from '../assets/insta-img-11.jpeg';
import instaImg12 from '../assets/insta-img-12.jpeg';
import instaImg13 from '../assets/insta-img-13.jpg';
import instaImg14 from '../assets/insta-img-14.jpg';
import instaImg15 from '../assets/insta-img-15.jpg';
import instaImg16 from '../assets/insta-img-16.jpg';
import instaImg17 from '../assets/insta-img-17.jpg';
import instaImg18 from '../assets/insta-img-18.jpg';

export default function InstagramSection() {

  const instaImages = [
    { imageName: instaImg1, alt: 'instaImg1' },
    { imageName: instaImg2, alt: 'instaImg2' },
    { imageName: instaImg3, alt: 'instaImg3' },
    { imageName: instaImg4, alt: 'instaImg4' },
    { imageName: instaImg5, alt: 'instaImg5' },
    { imageName: instaImg6, alt: 'instaImg6' },
    { imageName: instaImg7, alt: 'instaImg7' },
    { imageName: instaImg8, alt: 'instaImg8' },
    { imageName: instaImg9, alt: 'instaImg9' },
    { imageName: instaImg10, alt: 'instaImg10' },
    { imageName: instaImg11, alt: 'instaImg11' },
    { imageName: instaImg12, alt: 'instaImg12' },
    { imageName: instaImg13, alt: 'instaImg13' },
    { imageName: instaImg14, alt: 'instaImg14' },
    { imageName: instaImg15, alt: 'instaImg15' },
    { imageName: instaImg16, alt: 'instaImg16' },
    { imageName: instaImg17, alt: 'instaImg17' },
    { imageName: instaImg18, alt: 'instaImg18' },
  ]
  
  return (
    <section id="instagram-section" className="bg-slate-100 py-[50px]">
      <div className="flex justify-center text-center pb-[50px]">
        <h2>follow me on instagram</h2>
      </div>
      <div className='relative'>
      <div className='h-[300px] lg:h-[350px] overflow-hidden'>
        <div className="columns-3 sm:columns-4 lg:columns-6 xl:columns-8 gap-2 space-y-2">
          {instaImages.map((images, index) => (
            <img key={index} src={images.imageName} alt={images.alt} />
          ))}
        </div>
      </div>
      <a href='https://www.instagram.com/nemanjaphotography_/' target='_blank' aria-label="Visit Instagram page" className='bg-white text-lg absolute p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>@nemanjaphotography_</a>
      <div className="bg-black/50 absolute h-full w-full top-0 left-0"></div>
      </div>
    </section>
  );
}
