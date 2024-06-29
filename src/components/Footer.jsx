export default function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer>
            <div className="section-container py-[50px] md:py-[100px] text-sm flex flex-col space-y-8 text-center justify-between items-center md:flex-row md:space-y-0">
                <p>&copy; {currentYear} Nemanja Photography. Developed by <a href="https://github.com/stefanelli990" target="_blank" className="underline">stefanelli990</a></p>
                <div className="flex space-x-6">
                    <a href="https://www.instagram.com/nemanjaphotography_/" target="_blank" aria-label="Visit Instagram page">
                        Instagram
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100032362046704" target="_blank" aria-label="Visit Facebook page">
                        Facebook
                    </a>
                    <a href="https://www.istockphoto.com/portfolio/NemanjaMohenski" target="_blank" aria-label="Visit iStock portfolio">
                        iStock
                    </a>
                </div>
            </div>
        </footer>
  )
}