export const Footer = () => {
  return (

    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">Cinemaz</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="https://www.instagram.com/zslee_04/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/zavier-lee-b80886194/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
            </li>
            <li>
                <a href="https://github.com/Zavierzs" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
            </li>
        </ul>
        </div>

    </footer>
  )
}
