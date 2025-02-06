import {useEffect, useState} from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLinks, setShowLinks] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setShowLinks(true);
            }, 800);
            console.log(timer);
            console.log(isOpen);

            return () => clearTimeout(timer);
        } else {
            setShowLinks(false);
        }


    }, [isOpen]);


    return (
        <header>
            <nav className="navbar">
                <div className="navbar_items" id="menuToggle">
                    <div>
                        <a href='/' className='logo'>
                            <img src="/images/logo-new.png" alt='Logo'/>
                        </a>
                    </div>


                    <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                        Menü
                        <span></span>
                        <span></span>
                    </div>


                    {isOpen && (
                        <div className={`overlay ${isOpen ? "active" : ""}`}>
                            <ul className={`nav-links ${showLinks ? "active" : ""}`} id='menu'>
                                <li><a href='#partner' onClick={() => setIsOpen(false)}>Shopware Partner</a></li>
                                <li><a href='#service' onClick={() => setIsOpen(false)}>Service</a></li>
                                <li><a href='#jobs' onClick={() => setIsOpen(false)}>Jobs</a></li>
                                <li><a href='#newsletter' onClick={() => setIsOpen(false)}>Newsletter</a></li>
                                <li><a href='#contact' onClick={() => setIsOpen(false)}>Contakt</a></li>
                            </ul>
                        </div>

                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;