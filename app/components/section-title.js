export default function SectionTitle({ watermark, title}) {
    return (
        <div className="relative text-center mb-[50px] sm:mb-[75px]">
            <h1 className="text-slate-100 uppercase">{watermark}</h1>
            <h2 className="w-full absolute -bottom-2  left-1/2 -translate-x-1/2 capitalize">{title}</h2>
        </div>
    )
};