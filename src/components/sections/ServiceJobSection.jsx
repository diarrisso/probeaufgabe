import {useState} from "react";
import ServiceJobContent from "../content/ServiceJobContent.jsx";
import ContactFormSection from "./ContactFormSection.jsx";

const ServiceJobSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(!isOpen)
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleContactClick = () => {
        showModal();
    }

    return (

        <section className='service_job' id='service'>
            <div className='container'>
                <div className='service_job_flex'>
                    <ServiceJobContent
                        title="Keine Angst wir beißen nicht."
                        subtitle="service "
                        description="Aliquam erat volutpat. Nullam scelerisque auctor libero, id volutpat est dignissim vitae. Aliquam erat."
                        buttonText="Kontakt"
                        onClick={showModal}
                    />

                    <ContactFormSection
                        showModal={isOpen}
                        closeModal={closeModal}
                    />

                    <ServiceJobContent
                        title="Du willst ein Tein vonuns sein?"
                        subtitle="Jobs"
                        description="Aliquam erat volutpat. Nullam scelerisque auctor libero, id volutpat est dignissim vitae Aliquam."
                        buttonText="Jobangebote"
                        onClick={handleContactClick}
                    />
                </div>
            </div>
        </section>

    )

}

export default ServiceJobSection;