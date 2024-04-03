export default function Contact() {
    return (
        <main className="pt-[150px]">
            <div className="section-container">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="mb-8">GET IN TOUCH</h2>
                    <p>As you've probably gathered by now, we are all about connections and life experiences. We do get a buzz with the possibility of meeting new people and documenting their adventures. Tell us about your plans!</p>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <input placeholder="Enter your full name..." type="text" className="inputs"/>
                        <input placeholder="Enter your name..." type="text" className="inputs"/>
                    </div>
                </div>
            </div>
        </main>
    )
}