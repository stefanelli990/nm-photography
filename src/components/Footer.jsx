export default function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <div className="wrapper">
            <div className="flex flex-col sm:items-center md:flex-row md:justify-between gap-8">
                <p>&copy; {currentYear} NM Photography. Developed by <a href="https://github.com/stefanelli990" target="_blank" className="underline">stefanelli990</a></p>
                <div className="flex gap-6">
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
        </div>
    </footer>
  )
}