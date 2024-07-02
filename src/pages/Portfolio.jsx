import { useState } from 'react';
import portfolioImg1 from '../assets/portfolio-img-1.jpg';
import portfolioImg2 from '../assets/portfolio-img-2.jpg';
import portfolioImg3 from '../assets/portfolio-img-3.jpg';
import portfolioImg4 from '../assets/portfolio-img-4.jpg';
import portfolioImg5 from '../assets/portfolio-img-5.jpg';
import portfolioImg6 from '../assets/portfolio-img-6.jpeg';
import portfolioImg7 from '../assets/portfolio-img-7.jpg';
import portfolioImg8 from '../assets/portfolio-img-8.jpg';
import portfolioImg9 from '../assets/portfolio-img-9.jpg';
import portfolioImg10 from '../assets/portfolio-img-10.jpg';
import portfolioImg11 from '../assets/portfolio-img-11.jpg';
import portfolioImg12 from '../assets/portfolio-img-12.jpg';

export default function Portfolio() {

  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filterCategories = ['all','weddings','business','model','party'];
  const portfolioImages = [
    {path: portfolioImg2, category: 'weddings'},
    {path: portfolioImg3, category: 'weddings'},
    {path: portfolioImg1, category: 'weddings'},
    {path: portfolioImg4, category: 'business'},
    {path: portfolioImg5, category: 'business'},
    {path: portfolioImg6, category: 'business'},
    {path: portfolioImg7, category: 'model'},
    {path: portfolioImg8, category: 'model'},
    {path: portfolioImg9, category: 'model'},
    {path: portfolioImg10, category: 'party'},
    {path: portfolioImg11, category: 'party'},
    {path: portfolioImg12, category: 'party'}
  ]

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages = selectedCategory === 'all' ? portfolioImages : portfolioImages.filter(image => image.category === selectedCategory);


  return (
    <main>
      <section id="porfolio">
      <div className="wrapper pt-[170px] pb-[100px]">
        <div className="flex items-center justify-center flex-wrap gap-2 mb-[50px]">
          {filterCategories.map((category, index) => (
            <button key={index} onClick={() => handleFilterClick(category)} className={`px-3 py-1 capitalize ${selectedCategory === category ? 'active' : ''}`}>{category}</button>
          ))}
        </div>
        <div className="columns-3">
          {filteredImages.map((img,index) => (
            <div className='mb-4 overflow-hidden group' key={index}>
              <img src={img.path} alt="" className='group-hover:scale-125 duration-700'/>
            </div>
          ))}
        </div>
      </div>
      </section>
    </main>
  )
}