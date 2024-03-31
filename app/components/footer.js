import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhone, FaLocationDot   } from "react-icons/fa6";

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="section-container py-[50px] sm:py-[100px] text-sm flex flex-col space-y-8 text-center justify-between items-center sm:flex-row sm:space-y-0">
                <p>&copy; {currentYear} Nemanja Photography. Developed by <a href="https://github.com/stefanelli990" target="_blank" className="underline">Stefanelli990</a></p>
                <div className="flex space-x-8">
                    <a href="https://www.instagram.com/nemanjaphotography_/" target="_blank" aria-label="Visit Instagram page">
                        <FaInstagram/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100032362046704" target="_blank" aria-label="Visit Facebook page">
                        <FaFacebookF/>
                    </a>
                </div>
            </div>
        </footer>
    )
}