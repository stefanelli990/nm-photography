import { benefits } from "../data"

export default function Benefits() {
  return (
    <section className="bg-slate-50 my-0 py-[50px] lg:py-[100px]">
        <div className="wrapper">
            <ul className="flex flex-col md:flex-row gap-10">
                {benefits.map((item, index) => (
                    <li key={index} className="space-y-4">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </li>
                ))}
            </ul>
        </div>
    </section>
  )
}