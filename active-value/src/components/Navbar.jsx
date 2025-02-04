import {useState} from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


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
                            <ul className="nav-links" id='menu'>
                                <li><a href='#partner'>Shopware Partner</a></li>
                                <li><a href='#service'>Service</a></li>
                                <li><a href='#jobs'>Jobs</a></li>
                                <li><a href='#newsletter'>Newsletter</a></li>
                                <li><a href='#contact'>Contakt</a></li>
                            </ul>
                        </div>

                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;