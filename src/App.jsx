import {useState} from 'react'
import './style.scss'
import SlideBannerSection from "./components/sections/SlideBannerSection.jsx";
import ServiceJobsPage from "./pages/ServiceJobsPage.jsx";
import PartnerPage from "./pages/PartnerPage.jsx";
import NewsletterPage from "./pages/NewsletterPage.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header/>
            <SlideBannerSection/>
            <PartnerPage/>
            <ServiceJobsPage/>
            <NewsletterPage/>
            <Footer/>
        </>
    )
}

export default App
