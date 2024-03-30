export default function SectionTitle({ watermark, title}) {
    return (
        <div className="relative text-center mb-[75px]">
            <h2 className="text-8xl text-slate-100 uppercase">{watermark}</h2>
            <h3 className="text-5xl absolute bottom-0 left-1/2 -translate-x-1/2 capitalize">{title}</h3>
        </div>
    )
};