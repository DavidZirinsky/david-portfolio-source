export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} David Zirinsky. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:dzirinsky@gmail.com" className="text-gray-400 hover:text-white">
              Email
            </a>
            <a href="https://github.com/DavidZirinsky/" className="text-gray-400 hover:text-white">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/davidzirinsky/" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
