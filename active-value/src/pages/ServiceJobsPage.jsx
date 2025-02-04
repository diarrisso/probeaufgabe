import ServiceJobSection from "../components/sections/ServiceJobSection.jsx";

const ServiceJobsPage = () => {

    const handleContactClick = () => {

        document.getElementById('modal').style.opacity = "1";
        document.getElementById('.modal-overlay').style.opacity = "1";
        console.log('hee')
    }

    return (
        <>
            <ServiceJobSection handleContactClick={handleContactClick} handleJobClick={handleContactClick}/>

        </>
    )

}

export default ServiceJobsPage;