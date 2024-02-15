
  //Navbar

function ExternalNavbar() {
  return (
        <>
        <div className="flex flex-wrap place-items-top">
        <section className="relative mx-auto">
            <nav className="flex justify-between bg-green-600 text-white w-screen">
            <div className="px-2 xl:px-12 py-6 flex w-full items-center">
                <a className="text-3xl font-bold font-heading items-center" href="#">
                {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
                <h2 className="align-items-center mb-8 text-3xl font-extrabold leading-none tracking-normal text-gray-900 md:text-3xl md:tracking-tight">
                    <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-black to-black lg:inline"><span className="text-white">Gest</span>Pro<span className="text-white"> ERP</span></span>
                </h2>
                </a>
                <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li><a className="hover:text-gray-200" href="#">Inicio</a></li>
                <li><a className="hover:text-gray-200" href="#">Contacto</a></li>
                <li><a className="hover:text-gray-200" href="#">Nosotros</a></li>
                <li><a className="hover:text-gray-200" href="#">Ayuda</a></li>
                </ul>
                <div className="hidden xl:flex space-x-5 items-center">
                
                <a className="flex items-center hover:text-gray-200" href="/login">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
                
                </div>
            </div>
         
            <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </a>
            </nav>
            
        </section>
        </div>
      
        </>
  );
}

export default ExternalNavbar