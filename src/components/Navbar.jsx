import {useEffect, useState} from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLinks, setShowLinks] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [closeOverlay, setClosOverlay] = useState(false);

    useEffect(() => {
        if (isOpen) {

            setClosOverlay(false);
            const overlayTimer = setTimeout(() => {
                setShowOverlay(true);
            }, 400);

            const linksTimer = setTimeout(() => {
                setShowLinks(true);
            }, 800);

            return () => {
                clearTimeout(linksTimer);
                clearTimeout(overlayTimer);
            };

        } else {
            setClosOverlay(false);
            setTimeout(() => {
                setShowLinks(false);
                setShowOverlay(false);
            }, 400);
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
                        <div className={`overlay ${showOverlay ? "active" : ""}`}>
                            <ul className={`nav-links ${showLinks ? "active" : ""} ${setClosOverlay ? "closing" : ""}`}
                                id='menu'>

                                <NavLink
                                    link="#partner"
                                    title="Partner"
                                    onClick={() => setIsOpen(false)}
                                />

                                <li><a href='#partner' onClick={() => setIsOpen(false)}>Shopware Partner</a></li>
                                <li><a href='#service' onClick={() => setIsOpen(false)}>Service</a></li>
                                <li><a href='#jobs' onClick={() => setIsOpen(false)}>Jobs</a></li>
                                <li><a href='#newsletter' onClick={() => setIsOpen(false)}>Newsletter</a></li>
                                <li><a href='#contact' onClick={() => setIsOpen(false)}>Kontakt</a></li>
                            </ul>
                        </div>

                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;


export const NavLink = ({link, onClick, title}) => {

    return (
        <li>
            <a
                href={link}
                onClick={onClick}
            >
                {title}
            </a>
        </li>
    )
}
