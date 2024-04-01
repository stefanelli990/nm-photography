import portfolioImg1 from '../public/portfolio-img-1.jpg';
import portfolioImg2 from '../public/portfolio-img-2.jpg';
import portfolioImg3 from '../public/portfolio-img-3.jpg';
import portfolioImg4 from '../public/portfolio-img-4.jpg';
import portfolioImg5 from '../public/portfolio-img-5.jpg';
import portfolioImg6 from '../public/portfolio-img-6.jpg';

import servicesImg1 from '../public/services-img-1.jpg';
import servicesImg2 from '../public/services-img-2.jpg';
import servicesImg3 from '../public/services-img-3.jpg';

export const portfolioImages = [
    {imgName: portfolioImg1, alt: 'Gallery Image 1'},
    {imgName: portfolioImg2, alt: 'Gallery Image 2'},
    {imgName: portfolioImg3, alt: 'Gallery Image 3'},
    {imgName: portfolioImg4, alt: 'Gallery Image 4'},
    {imgName: portfolioImg5, alt: 'Gallery Image 5'},
    {imgName: portfolioImg6, alt: 'Gallery Image 6'}
];

 export const services = [
    {servicesName: 'Photo Shooting', servicesDescription: 'Lorem ipsum dolor sit amet consectetur. Tortor lacus posuere magna arcu elit cras. Semper neque nisl ut consequat odio hendrerit mauris sem.', servicesImage: servicesImg1, alt: 'Photo Shooting image'},
    {servicesName: 'Video Shooting', servicesDescription: 'Lorem ipsum dolor sit amet consectetur. Tortor lacus posuere magna arcu elit cras. Semper neque nisl ut consequat odio hendrerit mauris sem.', servicesImage: servicesImg2, alt: 'Video Shooting image'},
    {servicesName: 'Retouch', servicesDescription: 'Lorem ipsum dolor sit amet consectetur. Tortor lacus posuere magna arcu elit cras. Semper neque nisl ut consequat odio hendrerit mauris sem.', servicesImage: servicesImg3, alt: 'Photo Shooting image'},
];

export const navLinks = [
    {name : 'Home', url: '/'},
    {name : 'Portfolio', url: '/portfolio'},
    {name : 'Services', url: '/services'},
    {name : 'About', url: '/about'},
    {name : 'Contact', url: '/contact'},
];