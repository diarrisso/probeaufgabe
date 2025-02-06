import Button from "../forms/Button.jsx";

const ServiceJobContent = ({subtitle, description, title, buttonText, onClick}) => {

    return (
        <div className='service_job_flex_items'>
            <span>{subtitle}</span>
            <h2>{title}</h2>
            <p>{description}</p>

            <Button type="button" title={buttonText} variant="service" className="btn-service" onClick={onClick}/>

        </div>

    )

}


export default ServiceJobContent;