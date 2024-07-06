import aboutImg from '../assets/about-img.jpg';

export default function About() {
  return (
    <main>
       <section id='about-section'>
          <div className="wrapper pt-[120px] pb-[50px] md:pt-[170px] md:pb-[100px]">
              <div className='lg:flex items-center justify-center lg:gap-16 xl:gap-24'>
                  <div className='mb-8 lg:hidden'>
                      <h2 className='mb-4'>Let's introduce myself</h2>
                      <p className='uppercase opacity-50 text-xs'>Exclusive Photographer for IStock - Photo Editor</p>
                  </div>
                  <div className='relative mb-8 w-full max-w-[400px] lg:mb-0'>
                      <img src={aboutImg} alt='Nemanja Mohenski posing'/>
                  </div>
                  <div>
                      <div className='hidden mb-8 lg:block'>
                          <h2 className='mb-4'>Let's introduce myself</h2>
                          <p className='uppercase opacity-50 text-xs'>Exclusive Photographer for IStock - Photo Editor</p>
                      </div>
                      <p className='mb-4'>
                      I value family, nostalgia, movies, good conversation, and love. I feel so lucky to be surrounded by the best humans in the world and I cherish them so much. Some days I wish I could just stop time, and soak this all in for as long as possible. 
                      </p>
                      <p className='mb-4'>
                      When I photograph weddings, my goal is to find these same connections and wonderful people in my clients lives and document how much love there is between them. My goal is to witness you, to see you fully for who you are and how beautiful you and your love is. 
                      </p>
                      <p>Reach out and connect with any questions you may have, or simply drop me a line and tell me what you love the most in life.</p>
                  </div>
              </div>
          </div>
        </section>
    </main>
  )
}