import { services } from "../data"

export default function Services() {

  return (
    <section id="services-section" className="overflow-x-hidden">
      <div className="wrapper">
        {services.map((service, index) => (
          <div key={index} className="flex items-center relative justify-between flex-col-reverse gap-10 md:static md:flex-row-reverse md:text-right lg:gap-20 pb-[50px] md:pb-[100px] odd:text-left md:pt-[50px] last-of-type:pb-[50px]">
            <div className={'bg-slate-50 h-[300px] md:h-[450px] absolute bottom-[25px] md:bottom-auto max-w-[90%] md:max-w-[40%] w-full -z-10 -left-4 ' + (index % 2 === 0 ? ' md:-left-0' : 'md:left-auto md:-right-0')}></div>
            <div className={"flex items-center justify-between flex-col-reverse gap-10 lg:gap-20 " + (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')}>
                <div className="w-full md:w-auto md:flex-1 relative h-[250px] md:h-[350px]">
                <img src={service.servicesImage} alt={service.alt} />
                </div>
                <div className="flex-1 odd:text-right">
                <h2 className="mb-6">{service.servicesName}</h2>
                <p>{service.servicesDescription}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
