import portfolioImg1 from '../public/portfolio-img-1.jpg';
import portfolioImg2 from '../public/portfolio-img-2.jpg';
import portfolioImg3 from '../public/portfolio-img-3.jpg';
import portfolioImg4 from '../public/portfolio-img-4.jpg';
import portfolioImg5 from '../public/portfolio-img-5.jpg';
import portfolioImg6 from '../public/portfolio-img-6.jpg';
import portfolioImg7 from '../public/portfolio-img-7.jpg';
import portfolioImg8 from '../public/portfolio-img-8.jpg';
import portfolioImg9 from '../public/portfolio-img-9.jpg';
import portfolioImg10 from '../public/portfolio-img-10.jpg';
import portfolioImg11 from '../public/portfolio-img-11.jpg';
import portfolioImg12 from '../public/portfolio-img-12.jpg';
import portfolioImg13 from '../public/portfolio-img-13.jpg';
import portfolioImg14 from '../public/portfolio-img-14.jpg';
import portfolioImg15 from '../public/portfolio-img-15.jpg';

import servicesImg1 from '../public/services-img-1.jpg';
import servicesImg2 from '../public/services-img-2.jpg';
import servicesImg3 from '../public/services-img-3.jpg';

export const portfolioImages = [
    {imgName: portfolioImg1, alt: 'Gallery Image 1', categories: 'Personal'},
    {imgName: portfolioImg2, alt: 'Gallery Image 2', categories: 'Personal'},
    {imgName: portfolioImg3, alt: 'Gallery Image 3', categories: 'Personal'},
    {imgName: portfolioImg4, alt: 'Gallery Image 4', categories: 'Personal'},
    {imgName: portfolioImg5, alt: 'Gallery Image 5', categories: 'Personal'},
    {imgName: portfolioImg6, alt: 'Gallery Image 6', categories: 'Personal'},
    {imgName: portfolioImg7, alt: 'Gallery Image 7', categories: 'Fashion'},
    {imgName: portfolioImg8, alt: 'Gallery Image 8', categories: 'Fashion'},
    {imgName: portfolioImg9, alt: 'Gallery Image 9', categories: 'Fashion'},
    {imgName: portfolioImg10, alt: 'Gallery Image 10', categories: 'Fashion'},
    {imgName: portfolioImg11, alt: 'Gallery Image 11', categories: 'Wedding'},
    {imgName: portfolioImg12, alt: 'Gallery Image 12', categories: 'Wedding'},
    {imgName: portfolioImg13, alt: 'Gallery Image 13', categories: 'Wedding'},
    {imgName: portfolioImg14, alt: 'Gallery Image 14', categories: 'Event'},
    {imgName: portfolioImg15, alt: 'Gallery Image 15', categories: 'Event'},
];

 export const services = [
    {servicesName: 'Photo Shooting', servicesDescription: "Whether it's a family portrait, a corporate headshot, or a wedding ceremony, my photo shooting services are tailored to suit your needs. I understand the importance of capturing the perfect moment, and I excel in creating stunning images that reflect your unique personality and style.", servicesImage: servicesImg1, alt: 'Photo Shooting image'},
    {servicesName: 'Video Shooting', servicesDescription: "From cinematic wedding films to promotional videos, my video shooting services are designed to tell your story with elegance and precision. Using state-of-the-art equipment and techniques, I capture every detail and emotion, ensuring that your vision is brought to life on screen.", servicesImage: servicesImg2, alt: 'Video Shooting image'},
    {servicesName: 'Retouch', servicesDescription: "My retouching services add the finishing touch to your photographs, enhancing their beauty and clarity. Whether it's removing imperfections, adjusting colors, or adding creative effects, I ensure that every image is polished to perfection.", servicesImage: servicesImg3, alt: 'Photo Shooting image',}
];

export const navLinks = [
    {name: 'Home', url: '/'},
    {name: 'Portfolio', url: '/portfolio'},
    {name: 'About', url: '/about'},
    {name: 'Contact', url: '/contact'},
];

export const filterCategories = [
    {name: 'All'},
    {name: 'Fashion'},
    {name: 'Wedding'},
    {name: 'Event'},
    {name: 'Personal'},
]